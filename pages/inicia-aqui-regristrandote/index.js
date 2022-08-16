import Head from "next/head";
import React from "react";

export default function Index() {
  return (
    <>
      <Head>
        <title>Registrate a nuestro programa | ceroacien</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <iframe
        className="airtable-embed w-screen h-screen"
        src="https://airtable.com/embed/shrP87WhwwCZW08XT?backgroundColor=blue"
        frameBorder="0"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </>
  );
}