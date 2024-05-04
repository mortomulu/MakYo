import TitleSection from "../Elements/TitleSection";
import ProductCard from "../Fragments/Products/ProductCard";
import delivery from "../../assets/delivery.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=4"
      );
      const data = await response.data;
      setProducts(data.products);
      return data;
    },
  });

  if (postQuery.isLoading) return <h1 className="text-center text-2xl font-lexend-deca font-bold mb-16">Loading....</h1>;
  if (postQuery.isError) return <h1 className="text-center text-2xl font-lexend-deca font-bold mb-16">Error loading data!!!</h1>;


  return (
    <div className="w-full py-28 px-32">
      <TitleSection title={"See Our Product"} />
      <div className="mt-24 flex justify-between">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            image={product.images[0]}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
