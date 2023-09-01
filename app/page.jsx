// "use client"
// import { decrement, increment, incrementByAmount } from "@/features/counter/counterSlice";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

const Home = () => {
  // const dispatch = useDispatch();
  // const [amount, setAmount] = useState(0);
  // const count = useSelector((state) => state.counter.value);
  return (
    <div className="text-4xl flex flex-col items-center justify-center text-black">
      Welcome to Todo App
      <Link href={"/todos"} className="p-4 bg-white">SHOW TODOS</Link>
      {/* <div className="flex">
        <div>Count: {count}</div><button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(increment())}>
          +
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decrement())}>
          -
        </button></div>

      <form onSubmit={(e) => { e.preventDefault(); dispatch(incrementByAmount(Number(amount))) }}>
        <input type="number" onChange={(e) => { setAmount(e.target.value) }} />
        <button type="submit">Add</button>
      </form> */}
    </div >
  );
};

export default Home;
