import React from "react";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import { articlesList } from "../../Constants";
import styles from "./ArticlesContainer.module.css";
const ArticlesContainer: React.FC = () => {
  return (
    <div className={styles.outsideContainer}>
      <h1 className={styles.Header}>Articles</h1>
      <div className={styles.cardsContainer}>
        {articlesList.map((article) => (
          <div className="flex-grow-1" key={article.title}>
            <ArticleCard
              title={article.title}
              description={article.description}
              image={article.image}
              link={article.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesContainer;
