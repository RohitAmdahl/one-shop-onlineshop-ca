import React from "react";
import FormatPrice from "../../helper/FormatPrice";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, imageUrl, title, price, discountedPrice } = product;

  return (
    <>
      <div className=" container mx-auto max-w-lg font-pins ">
        <div className="relative flex w-50 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative m-2 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="p-6">
            <div className="mb-2 flex flex-col">
              <p className="block  text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                {title}
              </p>
              <div className=" flex gap-8 font-sans text-base font-medium leading-relaxed antialiased text-primary ">
                {<FormatPrice price={discountedPrice} />}
                <del className=" font-sans text-sm font-normal leading-normal  antialiased py-1 text-red-600  ">
                  {discountedPrice !== price && (
                    <p>
                      <FormatPrice price={price} />
                    </p>
                  )}
                </del>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <Link
              to={`/detail/${id}`}
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary "
              type="button"
            >
              Veiw Product
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
