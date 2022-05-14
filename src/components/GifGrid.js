import React, { } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);
  const {loading, data: img} = useFetchGifs(category);
  
  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, [category]);



  
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid ">
        {img.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
