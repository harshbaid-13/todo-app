import Image from "next/image";
import logo from "@/public/to-do-list.png";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="overflow-hidden max-w-screen-xl mx-auto">
            <div
                className="flex flex-col lg:flex-row w-full px-4 items-center justify-between"
            >
                <div className="mt-12 flex flex-col">
                    <h1 className="px-5 max-w-2xl text-headerText mx-auto flex justify-center items-center text-5xl font-bold sm:text-7xl text-center">
                        <span>Todollo</span>
                    </h1>
                    <h1
                        className=" px-5 max-w-2xl mx-auto flex justify-center items-center text-[#fce19a] sm:text-3xl text-xl  font-bold text-center mb-20 "
                    >
                        <span>
                            Get things done with ease!
                        </span>
                    </h1>
                    <Link href={"/todos"}>
                        <button
                            className="bg-[#fdf0cf] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-105 duration-300  px-5 py-2.5 rounded-md max-w-2xl mx-auto  flex justify-center items-center text-black hover:text-[#fdf0cf] hover:bg-black sm:text-3xl text-xl font-bold text-center mb-20"
                        >
                            <span>
                                Start Todoling
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={logo} alt="logo" className="m-auto sm:w-full w-3/4" />
                </div>
            </div>
        </section >
    );
};

export default Hero;
