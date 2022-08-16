import axios from "axios";
let baseURL = "";

const production = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

if (!production) {
  baseURL = "http://localhost:3000/api/v0";
} else {
  baseURL = `/api/v0`;
}

export const CeroacienInstances = axios.create({
  baseURL,
  headers: {
    AccessControlAllowOrigin: "*",
    AccessControlAllowMethods: "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    AccessControlAllowHeaders: "Content-Type, application/json",
  },
});
