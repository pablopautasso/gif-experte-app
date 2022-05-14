import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div>
      <h1>GifExpert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />


      <ol>
        {
            categories.map( category => (
                <GifGrid key={category} category={category} />
            ))
        }
      </ol>
    </div>
  );
};
