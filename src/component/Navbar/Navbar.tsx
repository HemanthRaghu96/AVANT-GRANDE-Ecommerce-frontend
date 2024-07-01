import { IoMdPerson } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between mx-20 mt-5">
        <button className="w-[100px]">EN</button>
        <h1 className="font-semibold text-4xl">AVANT GRANDE</h1>
        <button className="flex justify-center items-center ">
          <IoMdPerson />
          <p className="mx-1">Sign in</p>
        </button>
      </div>
      <div className="flex justify-between mx-20 mt-5">
        <div className="flex relative">
          <input type="text" className="w-[150px] border-b-[1px] pr-[20px] pl-[3px] " placeholder="Search..."/>
          <span className="absolute right-0 bottom-1"><CiSearch /></span>
        </div>
        <ul className="flex">
          <li className="mx-2">WOMEN</li>
          <li className="mx-2">MEN</li>
          <li className="mx-2">KIDS</li>
        </ul>
        <button className="flex justify-center items-center w-[60px]">
          <IoBagHandleOutline />
          <p className="mx-1">0</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
