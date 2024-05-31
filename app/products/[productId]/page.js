import { Metadata } from "next/config";

export const generateMetadata = ({ params }) => {
  return {
    title: `Details for ${params.productId}`,
    description: "This product is very good",
  };
};

const ProductDetail = ({ params }) => {
  return <h1>Product Details Page {params.productId}</h1>;
};

export default ProductDetail;
