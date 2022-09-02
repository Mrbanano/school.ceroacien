import Link from "next/link";
import React from "react";

export default function Index({ show }) {
  if (show) {
    return (
      <section className="p-2 bg-primary w-full relative">
        <div className=" max-w-7xl mx-auto text-center flex flex-col sm:flex-row justify-center items-center gap-1">
          <h6 className="text-white font-semibold text-sm md:text-base">
            DESCUBRE:
          </h6>
          <h6 className="text-white font-semibold text-xs md:text-base">
            Todo lo que tenemos para tí
          </h6>
          <Link href="/course">
            <a className="text-white font-semibold text-xs  md:text-base underline">
              <h6 className="ml-2">Ver </h6>
            </a>
          </Link>
        </div>
      </section>
    );
  }
  return null;
}
