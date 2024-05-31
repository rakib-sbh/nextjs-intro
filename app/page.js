import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Welcome Home Page</h1>
      <Link href={"/blog"} className="mt-6">
        Blog
      </Link>
      <Link href={"/products"}>Products</Link>
    </>
  );
};

export default HomePage;
