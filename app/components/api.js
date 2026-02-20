import Image from "next/image";
export default function Api() {
  return (
    <div className="bg-white h-100 mt-8 flex-col shadow-2xl flex justify-center items-center">
      <Image src="/image.png" width={300} height={300} alt="api pic" />
      <p className="text-blue-700 font-bold mt-8">To Visit Api Surce</p>
      <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-600 mt-4 w-30 h-8 hover:bg-blue-500 hover:scale-125 transition-all-0.3-ease rounded text-amber-50 shadow-2xl shadow-black">
          Click Here
        </button>
      </a>
    </div>
  );
}
