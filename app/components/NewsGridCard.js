import Image from "next/image";
export default async function NewsGrid() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=250ce62fd0874c8c970cc82cc88e7217",
    { cache: "no-store" },
  );

  const data = (await response.json()) || [];

  const myTitlesList = data.articles.map((article, index) => {
    return (
      <div
        key={index}
        style={{ height: "480px" }}
        className=" w-88 mt-8 overflow-hidden flex rounded-2xl bg-amber-50 flex-col justify-center items-center shadow-2xl "
      >
        <Image
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          src={article.urlToImage || "/image.png"}
          width={1000}
          height={1000}
          alt="news image"
        />
        <div className="flex flex-col p-2 ">
          <p>{article.publishedAt}</p>
          <h2 className="w-80 text-zinc-950 font-bold overflow-hidden h-20 ">
            {article.title}
          </h2>
          <h3>{article.description}</h3>
        </div>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <button className="p-2 bg-blue-700 m-4 w-80 rounded-2xl text-amber-50 h-12">
            Read More
          </button>
        </a>
      </div>
    );
  });

  return (
    <div className="grid mt-12 p-2 md:grid-cols-3 lg-grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 justify-center items-center gap-4 ml-20  ">
      {myTitlesList}
    </div>
  );
}
