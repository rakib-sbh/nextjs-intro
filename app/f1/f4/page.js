import Link from "next/link";

const F4 = () => {
  return (
    <>
      <h1>F4 page</h1>
      <div>
        <Link href={"/f1/f3"}>F3</Link>
      </div>
      <div>
        <Link href={"/about"}>About Page</Link>
      </div>
    </>
  );
};

export default F4;
