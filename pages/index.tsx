import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./_app";
import { increment, decrement, byNumber } from "../slices/counterSlices";

const Home: NextPage = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Redux Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        Counter value = {counter}
        <button className="bg-green-600" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="bg-red-600" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <input
          type="number"
          className="border-2 pl-2"
          onKeyDown={e => {
            if (e.code == "Enter") {
              dispatch(byNumber(parseInt((e.target as HTMLInputElement).value)));
            }
          }}
        />
      </main>
    </div>
  );
};

export default Home;