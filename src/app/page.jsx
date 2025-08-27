import React from "react";
import Header from "@/components/Header";
import Filters from "@/components/Filters";
import Products from "@/components/Products";

export default function Page() {
  return (
    <>
      <Header />
      <Filters />
      <Products />
    </>
  );
}
