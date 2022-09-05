import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export default function Home({ session }) {
  return <div>{JSON.stringify(session)}</div>;
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  /*if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }*/

  return {
    props: {
      session,
    },
  };
}
