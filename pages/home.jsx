import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import StudyPlan from "../components/StudyPlan/Index";
import { CeroacienServerInstances } from "../config/server";
import Dashboard from "../components/Dashboard";

export default function Home({ rol }) {
  if (rol === "user") {
    return <StudyPlan />;
  }
  if (rol === "teacher") {
    return <Dashboard />;
  }
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
