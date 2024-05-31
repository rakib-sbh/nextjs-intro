"use client";

const getRandomInt = (count) => {
  return Math.floor(Math.random() * count);
};

const ProductDetailsLayout = ({ children }) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading product");
  }

  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
};

export default ProductDetailsLayout;
