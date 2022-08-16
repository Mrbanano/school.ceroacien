import Router from "next/router";
import { useEffect } from "react";
export default function index({ href }) {
  useEffect(() => {
    Router.push(href || "/api/auth/signin");
  });
  return null;
}
