import { ball, line } from "./Styles";
import { Item } from "./Item";

export const CardItem = ({ item, index, limit }) => {
  return (
    <div key={"item" + index} className=" w-full">
      <section className="relative w-full max-w-5xl mx-auto ">
        <div
          className={`absolute ${ball} ${limit === index + 1 ? null : line}`}
        >
          <div className=" w-full h-full rounded-full bg-primary animate-ping "></div>
        </div>
        <div className="h-full pl-12  w-full">
          <div className="h-[80%]  bg-transparent p-1 text-left ">
            <div className=" flex gap-4">
              <h2 className="text-lg font-bold md:text-3xl md:font-semibold text-primary">
                {item?.title}
              </h2>
            </div>
            <div className="mt-4 overflow-hidden md:text-lg font-light ">
              <p className="text-black/70">{item?.description}</p>
            </div>
            <div className="py-5 md:p-8 grid gap-2  md:grid-cols-3 md:gap-5 ">
              {item?.feactures.map((feacture, index) => (
                <Item key={"feacture" + index} feacture={feacture} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
