import Image from "next/image";
import React from "react";

export default function Author({ tutor }) {
  console.log(tutor);
  return (
    <section className="mb-0 w-full flex items-center my-5 gap-3">
      {
        <Image
          className="rounded-full"
          src={tutor?.Img || ""}
          alt={tutor?.Name}
          width={60}
          height={60}
          objectFit="cover"
        />
      }

      <div>
        <p className="font-bold">{tutor?.Name}</p>
        <p>{tutor?.Description}</p>
      </div>
    </section>
  );
}
