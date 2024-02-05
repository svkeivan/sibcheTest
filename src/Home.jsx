import React from "react";
import { useQuery } from "react-query";
import HeroSection from "./Components/HeroSection/HeroSection";
import ProductList from "./Components/ProductSection/ProductList";
import { fetchProducts } from "./Data/GetData";

const Home = () => {
  const { data: products, isLoading } = useQuery("products", fetchProducts);

  return (
    <div className='container mx-auto p-4 my-10'>
      <HeroSection
        productData={products}
        isLoading={isLoading}
      />

      <ProductList
        productData={products}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;
