import React, { useEffect, useState } from "react";
import SingleFood from "../SingleFood/SingleFood";
import spinner from "./Ripple-1s-200px.gif";

const Food = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setFoods(data.categories))
      .catch((err) => alert(err));
  }, []);
  return (
    <>
      {foods.length > 0 ? (
        <div className="grid grid-rows-4 h-500 justify-center items-center grid-flow-col gap-4 mt-10">
          {foods.map((food) => (
            <SingleFood key={food.idCategory} food={food} />
          ))}
        </div>
      ) : (
        <img
          className="flex justify-center items-center"
          src={spinner}
          alt="0"
        />
      )}
    </>
  );
};

export default Food;
