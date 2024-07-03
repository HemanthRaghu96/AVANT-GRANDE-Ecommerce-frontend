import { IoMdPerson } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Men from "../../Pages/Men/Men";
import Kids from "../../Pages/Kids/Kids";
import Women from "../../Pages/Women/Women";
import TopsDetails from "../../Pages/Women/TopsDetails";
import  { MyContext } from "../../Context";
import Cart from "../../Pages/Cart/Cart";
import { useContext } from "react";

const Navbar = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("MyContext must be used within a Context.Provider");
  }

  const { cart } = context;

  return (
    <div>
  
        <div className="flex justify-between mx-20 mt-5">
          <button className="w-[100px]">EN</button>
          <h1 className="font-semibold text-4xl"><Link to={'/'}>AVANT GRANDE</Link></h1>
          <button className="flex justify-center items-center ">
            <IoMdPerson />
            <p className="mx-1">Sign in</p>
          </button>
        </div>
        <div className="flex justify-between mx-20 mt-5">
          <div className="flex relative">
            <input type="text" className="w-[150px] border-b-[1px] pr-[20px] pl-[3px] " placeholder="Search..." />
            <span className="absolute right-0 bottom-1"><CiSearch /></span>
          </div>
          <ul className="flex">
            <li className="mx-2"><Link to={'/women'}>WOMEN</Link></li>
            <li className="mx-2"><Link to={'/men'}>MEN</Link></li>
            <li className="mx-2"><Link to={'/kids'}>KIDS</Link></li>
          </ul>
          <Link to={"./cart"}>
            <button className="flex justify-center items-center w-[60px]">
              <IoBagHandleOutline />
              <p className="mx-1">{cart.length}</p>
            </button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/women" element={<Women />} />
          <Route path="/topdetails/:id" element={<TopsDetails />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
   
    </div>
  );
};

export default Navbar;
