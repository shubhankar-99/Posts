import React, { useContext } from "react";
import { PostsContext } from "../PostsContext";

import PostArticle from "./PostArticle";

function Posts(props) {
  const { data } = useContext(PostsContext);
  console.log(data);

  return (
    <div>
      <h1  className="head__text" >Posts App </h1>
      <div className="all__news">
         {data
          ? data.map((news) => (
              <PostArticle data={news} key={news.url} />
            ))
          : "Loading"} 
          
          
      </div>
    </div>
  );
}

export default Posts;