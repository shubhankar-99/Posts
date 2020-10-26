import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PostsContext = createContext();

export const PostsContextProvider = (props) => {
  const [data, setData] = useState();
  

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts`
      )
      .then((response) => setData(response.data))
      .catch((error) => alert('Retry...'))
  }, []);

  return (
    <PostsContext.Provider value={{ data }}>
      {props.children}
    </PostsContext.Provider>
  );
};