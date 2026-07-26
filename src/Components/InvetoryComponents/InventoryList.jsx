import products from "../../Data/Productdata";
import ProductCard from "./InventoryCard";

const ProductList = () => {
  return (
    <div className="space-y-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;