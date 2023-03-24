import React, { useEffect, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"
import useSWR from 'swr';
import axios from 'axios';
import Link from "next/link";
import clsx from "clsx";

const SearchBar = ({result}) => {
  
  async function fetchData(query) {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=8cd337d555b044639574874af216df52`;
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;
  }
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const { data } = useSWR(debouncedQuery, fetchData);
  // useEffect(() => {
  //   if (data && data.articles) {
  //     setSearchResults(data.articles);
  //   }
  // }, [data]);
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedQuery(query);

    }, 500);
   
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [query]);

 

  // TypeHead
  const filterData=(event)=>{
    setQuery(event.target.value);
    const filteredResult=result.articles.filter((res)=>{
      console.log(res.title);
      return res.title.toLowerCase().includes(query.toLowerCase());
    })
    setSearchResults(filteredResult);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
        <AiOutlineSearch
         fontSize={40}
        />
        </div>
        <div>
          <input
            className="input"
            style={{
              backgroundColor: "gray",
              outline: "none",
              color:"white",
              border: "none",
              paddingInline:"10px",
              paddingBlock: "10px",
            }}
            onChange={filterData}
            type="text"
          />
          <div
            style={{
              position: "absolute",
              zIndex:"10",
              left:"0",
              margin:"auto",
              right:"0",
              top:"200px",
              width:"70%",
              height:"400px",
            }}
            className={clsx("flex flex-col  overflow-auto scrollbar-hide")}
          >
            {searchResults.map((article) => (
              <div key={article.url} 
                style={{
                  backgroundColor:"#EAEAEA",
                  color:"black",
                  paddingBlock:"10px",
                  border:"1px solid black",
                }}
              >
                <Link href={article.url}>
                <h3>{article.title}</h3>
                <p 
                style={{
                    fontSize:"0.875rem"
                }}
                >{article.description}</p>
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
