import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import Logo from "../../assets/Logo (1).png"
const Footer = () => {
  return (
    <div className="bg-MenuC py-[50px]">
      <Container>
        <Flex className={`flex justify-between`}>
          <div className='w-[10%]'>
            <Heading className="font-bold text-HoverC pb-[25px]" Text={"MENU"} as={"h2"} />
            <ul>
              <li className="text-FootertxtC text-sm pb-2">Home</li>
              <li className="text-FootertxtC text-sm pb-2">Shop</li>
              <li className="text-FootertxtC text-sm pb-2">About</li>
              <li className="text-FootertxtC text-sm pb-2">Contact</li>
              <li className="text-FootertxtC text-sm pb-2">Journal</li>
            </ul>
          </div>
          <div className="w-[15%]">
            <Heading className="font-bold text-HoverC pb-[25px]" Text={"SHOP"} as={"h2"} />
            <ul>
              <li className="text-FootertxtC text-sm pb-2">Category 1</li>
              <li className="text-FootertxtC text-sm pb-2">Category 2</li>
              <li className="text-FootertxtC text-sm pb-2">Category 3</li>
              <li className="text-FootertxtC text-sm pb-2">Category 4</li>
              <li className="text-FootertxtC text-sm pb-2">Category 5</li>
            </ul>
          </div>
          <div className="w-[15%]">
            <Heading className="font-bold text-HoverC pb-[25px]" Text={"HELP"} as={"h2"} />
            <ul>
              <li className="text-FootertxtC text-sm pb-2">Privacy Policy</li>
              <li className="text-FootertxtC text-sm pb-2">Terms & Conditions</li>
              <li className="text-FootertxtC text-sm pb-2">Special E-shop</li>
              <li className="text-FootertxtC text-sm pb-2">Shipping</li>
              <li className="text-FootertxtC text-sm pb-2">Secure Payments</li>
            </ul>
          </div>
          <div className=" w-[35%] pb-[80px] ">
            <Heading className="font-bold text-HoverC pb-2" Text={"(052) 611-5711"} as={"h2"} />
            <Heading className="font-bold text-HoverC pb-[25px]" Text={"company@domain.com"} as={"h2"} />
            <Heading className="text-FootertxtC text-sm pb-2" Text={"575 Crescent Ave. Quakertown, PA 18951"} as={"p"} />
          </div>
          <div className="w-[25%]">
             <Image className={`pb-[130px] w-[104px] h-auto`} src={Logo} alt={Logo}/>
          </div>
        </Flex>
        <div className="">

        </div>
      </Container>
    </div>
  );
};

export default Footer;
