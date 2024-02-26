import React from "react";
import Hero from "@/components/Hero";
import Infoboxes from "@/components/Infoboxes";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Hero />
      <Infoboxes />
    </>
  );
};

export default HomePage;
