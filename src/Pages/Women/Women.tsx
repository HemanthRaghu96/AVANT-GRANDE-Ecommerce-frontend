import { useState } from "react";
import SeeAll from "./SeeAll";
import Tops from "./Tops";
import Jeans from "./Jeans";
import Homewear from "./Homewear";
import Swimwear from "./Swimwear";
import Underwear from "./Underwear";

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const renderContent = () => {
    switch (selectedCategory) {
      case "SeeAll":
        return <SeeAll />;
      case "Tops":
        return <Tops />;
      case "Jeans":
        return <Jeans />;
      case "Homewear":  
        return <Homewear />;
      case "Swimwear":
        return <Swimwear />;
      case "Underwear":
        return <Underwear />;
      default:
        return <SeeAll />;
    }
  };
  return (
    <div>
      <div className="mx-20 flex mt-10">
        <div className="w-[15%]">
          <h1 className="font-bold text-4xl">Women</h1>
          <ul className="flex flex-col">
            <li className="mt-1 text-gray-500 font-semibold cursor-pointer" onClick={() => setSelectedCategory('SeeAll')}>See all</li>
            <li className="mt-1 text-gray-500 font-semibold cursor-pointer" onClick={() => setSelectedCategory('Tops')}>Tops</li>
            <li className="mt-1 text-gray-500 font-semibold cursor-pointer" onClick={() => setSelectedCategory('Jeans')}>Jeans</li>
            <li className="mt-1 text-gray-500 font-semibold cursor-pointer" onClick={() => setSelectedCategory('Homewear')}>Homewear</li>
            <li className="mt-1 text-gray-500 font-semibold cursor-pointer" onClick={() => setSelectedCategory('Swimwear')}>Swimwear</li>
            <li className="mt-1 text-gray-500 font-semibold cursor-pointer" onClick={() => setSelectedCategory('Underwear')}>Underwear</li>
          </ul>
        </div>
        <div className="w-[85%] ">
        {renderContent()}
        </div>
      </div>
      <h1 className="bg-pink-200 flex justify-center items-center h-[40px] text-xl mt-10 text-gray-700">
        15% off Rs.200 or 20% off Rs.300 + free shipping
      </h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center relative mt-10">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F39%2Fec%2F39ec38cda48baaa1a877805e174162f206801a9b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            alt="img"
            className="size-[600px] object-contain"
          />
          <div className="flex flex-col absolute bottom-3">
            <h1 className="font-bold text-4xl text-black">BEACH SEASON</h1>
            <button className="mt-2 bg-black text-white font-semibold rounded-sm p-2 ">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative mt-10">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9f%2F7c%2F9f7cb740626d797a4357095dcc75e2436d9dbd39.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            alt="img"
            className="size-[600px] object-contain"
          />
          <div className="flex flex-col absolute bottom-3">
            <h1 className="font-bold text-4xl text-white">
              DRESS FOR EVERYDAY
            </h1>
            <button className="mt-2 bg-black text-white font-semibold rounded-sm p-2 ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
