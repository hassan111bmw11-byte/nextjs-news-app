"use client";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";


export default function Navbar({ activeCategores, setActiveCategores,onSearch
 }) {
  const categories = ["all", "tech", "business", "tesla", "apple"];
  const [ search, setSearch ] = useState("");


  function handelSearch(){
    if (search.trim())
      return onSearch(search)
     onSearch(search);
  }

  return (
    <div className="bg-white flex fixed z-50 w-screen items-center justify-between gap-8 shadow-2xl h-14">
      
      {/* Categories */}
      <div className="text-black flex items-center gap-4 mx-8">
        <h1 className="font-bold text-2xl">NEWS API</h1>

        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategores(cat)}
              className={`px-4 py-2 rounded-2xl transition duration-300 
                ${activeCategores === cat 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-200 hover:bg-blue-800 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="mx-10 flex gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) =>{ if(e.key === "Enter")
            handelSearch()
          }}
          placeholder="Search"
          className="border placeholder-blue-500 shadow-2xl px-3 border-blue-500 rounded-2xl h-8 w-80"
        />

        <button 
        onClick={handelSearch} 
        className=" hover:bg-blue-600 hover:text-white transition duration-300 w-20 h-8 shadow-2xl bg-gray-200 rounded-2xl">
          Search
        </button>

        <div className="hover:bg-zinc-500/40 flex justify-center transition duration-200 items-center rounded-2xl w-8">
          <StarIcon color="primary" />
        </div>
      </div>
    </div>
  );
}