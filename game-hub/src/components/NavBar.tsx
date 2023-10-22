import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import K from "../assets/k.png";
import ColorModeSwitch from "./colorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={K} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
