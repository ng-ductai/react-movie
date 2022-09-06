import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/slide/Slide";
import List from "../components/list/List";
import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const list = [
    {
      title: "Trending Movies",
      path: "/movie",
      category: category.movie,
      type: movieType.popular,
    },
    {
      title: "Top Rated Movies",
      path: "/movie",
      category: category.movie,
      type: movieType.top_rated,
    },
    {
      title: "Trending TV",
      path: "/tv",
      category: category.tv,
      type: tvType.popular,
    },
    {
      title: "Top Rated TV",
      path: "/tv",
      category: category.tv,
      type: tvType.top_rated,
    },
  ];

  return (
    <>
      <HeroSlide />
      <div className="container">
        {list.map((item, index) => (
          <div className="section mb-3" key={index}>
            <div className="section__header mb-2">
              <h2>{item.title}</h2>
              <Link to={item.path}>
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <List category={item.category} type={item.type} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
