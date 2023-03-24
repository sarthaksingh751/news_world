import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "../ui/Layout";
import GeneralNews from "../ui/GeneralNews";

export async function getServerSideProps() {
  let result = await fetch(
    "https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=8cd337d555b044639574874af216df52"
  );
  result=await result.json()
  
  return {
    props: {
      result 
    },
  };
}

export default function Home({ result }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout result={result}>
        <GeneralNews result={result}/>
      </Layout>
    </>
  );
}
