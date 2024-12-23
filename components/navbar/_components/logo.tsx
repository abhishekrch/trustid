import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <span className="ml-3 mr-2 text-xl font-bold">
          trust<span className="text-sky-600">ID </span>
        </span>
      </Link>
    </>
  );
};

export default Logo;