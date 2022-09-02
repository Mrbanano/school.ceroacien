import Head from "next/head";
import React from "react";

export default function Index(url, description, keywords, title, img) {
  return (
    <Head>
      {/*<!----SEO-->*/}
      <link rel="canonical" href={url} />
      <meta name="author" content="ceroacien" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/*<!----Twitter-->*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ceroacien_io" />
      <meta name="twitter:creater" content="@ceroacien_io" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {/*<!----facebook-->*/}
      <meta name="og:locale" content="es_MX" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
      <meta name="og:site_name" content={url} />
      <meta name="og:image" content={img} />
    </Head>
  );
}
