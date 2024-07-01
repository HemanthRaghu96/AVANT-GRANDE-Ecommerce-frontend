const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-10 bg-gray-700">
      <div className="flex ">
        <div className="flex flex-col ">
        <h1 className="mt-7 text-white font-bold text-xl">CUSTOMER CARE</h1>
        <p className="mt-2 text-white ">Help center</p>
        </div>
        <div className="flex flex-col  mx-10">
        <h1 className="mt-7 text-white font-bold text-xl">FOLLOW US</h1>
        <p className="mt-2 text-white ">Instagram </p>
        <p className=" text-white ">Facebook </p>
        <p className=" text-white ">Twitter </p>
        <p className=" text-white ">Youtube </p>
        </div>
       
      </div>
      <div className="flex flex-col justify-center items-center w-[700px] mx-20">
        <h1 className="mt-7 text-white font-bold text-2xl">
          SUBSCRIBE TO AVANTGARDE.COM
        </h1>
        <p className="mt-2 text-white ">
          Subscribe to our newsletter for exclusive promotions, new collection
          reveals and the latest news from the avant garde, plus enjoy 10% off
          your first order
        </p>
        <p className="my-5 text-white font-semibold ">
          The content of this site is copyright-protected and is the property of
          HR
        </p>
      </div>
    </div>
  );
};

export default Footer;
