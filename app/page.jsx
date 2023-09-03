import Hero from "@/components/Hero";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <div className="text-4xl flex flex-col items-center justify-center text-black">
        Welcome to Todo App
        <Link href={"/todos"} className="p-4 bg-white">SHOW TODOS</Link>
      </div > */}
    </>
  );
};

export default Home;
