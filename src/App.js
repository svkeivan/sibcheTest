import { useEffect, useState } from "react";
import { fetchProducts } from "./Data/GetData";
import HeroSection from "./Components/HeroSection/HeroSection";
import ProductList from "./Components/ProductSection/ProductList";

function App() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    loadData();
  }, [setProductData]);
  return (
    <div className='container mx-auto p-4 my-10'>
      <HeroSection
        productData={productData}
        setProductData={setProductData}
        isLoading={isLoading}
      />

      <ProductList
        productData={productData}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
