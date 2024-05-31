"use client";

import { notFound } from "next/navigation";

const getRandomInt = (count) => {
  return Math.floor(Math.random() * count);
};

const ReviewDetails = ({ params }) => {
  const { reviewId, productId } = params;

  const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review of of the product reviewId {reviewId} and productId {productId}
    </h1>
  );
};

export default ReviewDetails;
