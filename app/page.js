import Api from "./components/api";
import CopyRight from "./components/copyRight";
import NewsGrid from "./components/NewsGridCard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-blue-500 ">  
    <div className="flex flex-col items-center min-h-screen justify-center font-sans ">
      <NewsGrid />
  
    </div>
        <Api />
      <CopyRight />
      </div>
  );
}
