import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import StudyPlan from "../components/StudyPlan/Index";
import { CeroacienServerInstances } from "../config/server";
import Dashboard from "../components/Dashboard";
import Head from "next/head";

export default function Home({ rol }) {
  return (
    <>
      <Head>
        <title>{rol === "user" ? "Home" : "Dashboard"} | ceroacien </title>
      </Head>
      <main className="max-w-screen-2xl mx-auto">
        {rol === "user" ? <StudyPlan /> : <Dashboard />}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  let rol = null;

  try {
    const { data } = await CeroacienServerInstances.post("/user", {
      user: session.user,
    });
    console.log(data);
    if (data.Error === 1) {
      return {
        redirect: {
          destination: "/NoAutorizado",
          permanent: false,
        },
      };
    }
    rol = data.user.Rol;
  } catch (error) {
    console.log(error);
  }

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      rol,
    },
  };
}
