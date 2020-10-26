import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { PostsContextProvider } from "./PostsContext";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  return (
     <PostsContextProvider>
       <Posts />
     </PostsContextProvider>
  );
}

export default App;