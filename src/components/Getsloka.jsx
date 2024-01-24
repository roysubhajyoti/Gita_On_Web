import { useState } from "react";
import { useGetsloka } from "../utils/useGetsloka";
import { Getverse } from "./Getverse";
export const Getsloka = () => {
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const { data, fetchData } = useGetsloka();

  return (
    <div className=" w-full h-screen  flex justify-around mt-10 text-black">
      <div className="w-52 h-60 border-solid rounded-2xl text-white border-8 flex flex-col gap-2 border-transparent/10 backdrop-blur-sm shadow-lg">
        <h1 className="pb-2 ">Enter Chapter:</h1>
        <input
          type="text"
          className="bg-transparent/25 rounded-sm backdrop-blur-md w-full h-7 border-solid border-black border-2"
          onChange={(e) => setChapter(e.target.value)}
        />
        <h1 className="pb-2">Enter Verse:</h1>
        <input
          type="text"
          className="bg-transparent/25 rounded-sm backdrop-blur-md w-full h-7 border-solid border-black border-2"
          onChange={(e) => setVerse(e.target.value)}
        />

        <button
          className="mt-5 border-2 px-5 py-1 hover:rounded-xl  border-solid w-[150px] border-red-300 font-bold ml-5"
          onClick={() => {
            fetchData(chapter, verse);
          }}
        >
          Get Shloka
        </button>
      </div>
      <Getverse data={data} />
    </div>
  );
};
