import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center mx-20 relative">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-4xl">DISCOVER THE HOT</h1>
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa1%2F45%2Fa145d11a2a467f5937e89a12a97587c4bd2a6e84.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt="img1"
            className="mt-5  object-contain h-[400px]"
          />
          <h1 className="font-bold text-4xl mt-10">THE SUMMER COLLECTION</h1>
        </div>
        <div className="flex flex-col justify-center items-center ml-10 ">
          <h1 className="font-bold text-4xl w-[170px] absolute top-[120px] right-[150px]">New ITEMS OF</h1>
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F07%2Fd8%2F07d86c107921249384ab0e0f5db407bead1d570f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt="img1"
            className="mt-5  object-contain h-[500px]"
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center relative">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F90%2F9b%2F909ba0304dc66fef9d4edcc1fe827ecd69bba30e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
          alt="img3"
          className="size-[500px] object-contain "
        />
        <div className="w-[300px] absolute left-[400px] top-[200px]">
          <h1 className="font-bold text-3xl">OVERSIZED SHIRT</h1>
          <p className="font-semibold text-xl mt-2">Rs.340</p>
          <p className="mt-2">
            Oversized shirt in woven cotton fabric. Collar, buttons at front,
            and yoke at back with pleat. Dropped shoulders, long sleeves, and
            button at cuffs. Rounded hem, longer at back.
          </p>
          <button className="mt-2 bg-black text-white font-semibold rounded-sm p-2">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8d%2F88%2F8d889aa506bf07eed2bf4cd948224eac8376fced.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt="img3"
            className="size-[300px] object-contain "
          />
          <h1 className="text-xl font-semibold mt-2">Linen Shorts</h1>
          <p>Rs.240</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[230px]">
        <h1 className="text-3xl font-bold">BEST SELLERS</h1>
        <p className="mt-2 ">These products are bought twice as often. Have time to taste fation, too.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd5%2F9a%2Fd59a99ade33ffa989131688646ac6365fb260ac5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            alt="img3"
            className="size-[300px] object-contain "
          />
          <h1 className="text-xl font-semibold mt-2">Wide-leg Pants</h1>
          <p>Rs.370</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F34%2F30%2F3430f738c173d2e10761abbc77462fed2a201905.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            alt="img3"
            className="size-[300px] object-contain "
          />
          <h1 className="text-xl font-semibold mt-2">Stain Dress</h1>
          <p>Rs.320</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
