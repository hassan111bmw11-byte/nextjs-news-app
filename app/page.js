"use client";
import Api from "./components/api";
import CopyRight from "./components/copyRight";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState, useEffect } from "react";
import { categories } from './components/newsApi';
import Navbar from "./components/Navbar";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAricles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(categories[activeCategory], { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Fetch failed:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAricles();
  }, [activeCategory]);

  // تحديث دالة البحث لتشمل حالة التحميل أيضاً
  async function handelSearch(query) {
    setIsLoading(true); // ابدأ التحميل عند البحث
    try {
      const res = await fetch(categories.searchNews(query), { cache: "no-store" });
      const data = await res.json();
      setArticles(data.articles || []);
      setActiveCategory(null);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Navbar onSearch={handelSearch} activeCategores={activeCategory} setActiveCategores={setActiveCategory} />

      <div className="flex flex-col justify-center bg-linear-to-r from-blue-400 to-blue-800 min-h-screen">
        <div className="flex flex-col items-center min-h-screen justify-center font-sans">
          
          {/* --- فحص حالة التحميل --- */}
          {isLoading ? (
            // يمكنك استبدال هذا بـ Spinner أو Skeleton
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              <p className="text-white text-xl animate-pulse">Loading News</p>
            </div>
          ) : (
            /* عرض الشبكة فقط عندما لا يكون هناك تحميل */
            <div className="grid mt-12 p-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 justify-center items-center gap-4">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="w-100 mt-8 border h-fit pb-4 border-white/70 hover:bg-zinc-300 overflow-hidden flex rounded-4xl bg-white/50 flex-col justify-center items-center shadow-2xl"
                >
                  <div className="relative w-full h-48">
                    <img
                      src={article.urlToImage || "/image.png"}
                      alt="news"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-2">
                    <p className="text-xs text-gray-500">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                    <h2 className="w-80 text-zinc-950 font-bold overflow-hidden h-20">
                      {article.title}
                    </h2>
                    <h3 className="truncate w-80 text-sm text-gray-600">
                      {article.description}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <button className="hover:bg-blue-800 bg-blue-700 w-60 rounded-2xl text-amber-50 h-12">
                        Read More
                      </button>
                    </a>
                    <button className="hover:bg-blue-800 bg-blue-700 w-15 rounded-2xl text-amber-50 h-12">
                      <StarBorderIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* --- نهاية فحص حالة التحميل --- */}

        </div>
        <Api />
        <CopyRight />
      </div>
    </div>
  );
}
