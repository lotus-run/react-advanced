import React, { useState, useEffect } from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatarSrc = "https://i.pravatar.cc/150?img=13";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack>
        <Avatar name="Pete" src={avatarSrc}></Avatar>
        <h3>{greeting}</h3>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>

    </FullScreenSection>
  )
};

export default LandingSection;
