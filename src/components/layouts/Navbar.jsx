import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/Logo (1).png";
import Heading from "../Heading";
import { FaSearch , FaUser ,FaCaretDown,FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-white py-[30px]">
        <Container>
          <Flex>
            <div className="">
              <Image src={Logo} />
            </div>
            <div className="m-auto">
              <ul className="flex gap-x-[20px] ">
                <li className="text-sm hover:text-HoverC transition-2s    font-DM sans text-MenutxtC landing-auto">
                  Home
                </li>
                <li className="text-sm hover:text-HoverC transition-2s  font-DM sans text-MenutxtC landing-auto">
                  Shop
                </li>
                <li className="text-sm hover:text-HoverC transition-2s  font-DM sans text-MenutxtC landing-auto">
                  About
                </li>
                <li className="text-sm hover:text-HoverC transition-2s  font-DM sans text-MenutxtC landing-auto">
                  Contact
                </li>
                <li className="text-sm hover:text-HoverC transition-2s  font-DM sans text-MenutxtC landing-auto">
                  Journal
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div >
      <div className="bg-MenuC py-5">
        <Container>
          <Flex className={`justify-between gap-x-30`}>
            <div className=" flex">
              <>
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z"
                    fill="#262626"
                  />
                  <path
                    d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z"
                    fill="#262626"
                  />
                </svg>
                <Heading 
                text={"Shop by Category"} 
                as={"h3"} 
                className={"text-HoverC text-sm"}/>
              </>
            </div>

            <div className="relative">
                <input 
                className="bg-white outline-0 w-[600px] p-4 m-auto items-center" 
                type="search" 
                placeholder="Search Products"
                />
                 <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2"/>
            </div>
            <div className="flex gap-x-3">
              <div className="flex">

              <FaUser/>
              <FaCaretDown />
              </div>
            
              <FaShoppingCart />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
