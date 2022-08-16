import React from "react";

function index({ Resources }) {
  return (
    <>
      {Resources.map((item, index) => {
        return (
          <a key={index} href={item.Link} target="_blank" rel="noreferrer">
            <div className="flex gap-5 text-center w-full md:w-2/3 overflow-x-hidden  rounded  transition-colors ease-in-out  duration-300 hover:bg-slate-400 p-4">
              <div className="text-left">
                <h2 className=" text-xl md:text-2xl font-bold md:pb-2">
                  {item.Name}
                </h2>
                <p className=" text-gray-700">{item.Description}</p>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}

export default index;
