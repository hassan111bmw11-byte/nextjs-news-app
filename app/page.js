import Api from "./components/api";
import CopyRight from "./components/copyRight";
import NewsGrid from "./components/NewsGridCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-500 font-sans ">
      <NewsGrid />
      <Api />
      <CopyRight />
    </div>
  );
}
