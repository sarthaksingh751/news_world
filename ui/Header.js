import React from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
const Header = ({ result }) => {
  return (
    <header className="bg-white">
      <div className="px-20 mx-auto ">
      <div className=" flex flex-row items-center">
      <div className="grow-[0] mr-10 text-4xl">
        <GiHamburgerMenu/>
      </div>
      <div className="grow-[1]">
        <Link href="/">
        <Image src="/news.png" width={90} height={40}
        alt="NewsWorld logo"
        />
        </Link>
      </div>
      <div className="grow-[1] uppercase font-semibold text-4xl">
        NEWSWORLD.COM 
      </div>
      <div className="grow-[1]">
        <SearchBar result={result}/>
      </div>
      </div>
    </div>
    <Navigation/>
    </header>
  );
};

export default Header;
