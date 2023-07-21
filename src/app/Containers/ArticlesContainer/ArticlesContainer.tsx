import React from "react";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import {articlesList} from "../../Constants";

const ArticlesContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold text-center text-white">Articles</h1>
      <div className="flex md:flex-row flex-col w-full max-w-screen-lg px-25 mt-8">
        {articlesList.map((article) => (
          <ArticleCard
            title={article.title}
            description={article.description}
            image={article.image}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesContainer;
