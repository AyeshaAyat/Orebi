import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/Logo (1).PNG";


const Navbar = () => {
  return (
    <nav className="py-3 bg-white shadow-md"> 
    <Container>
      <Flex className="justify-between items-center">
        <Image src={Logo} alt="Logo"  />
        <ul className="flex gap-10 font-bold text-[14px] text-gray-700">
          <li className="cursor-pointer hover:text-blue-600" >Home</li>
          <li className="cursor-pointer hover:text-blue-600">Shop</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>
      </Flex>
    </Container>
</nav>
  );
};

export default Navbar;
