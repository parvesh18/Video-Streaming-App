import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../utils/appSlice";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  const genre = useSelector((store) => store.app.category);

  return (
    <button
      className={` px-3 py-1 rounded-lg cursor-pointer  select-none font-semibold my-1 ${
        genre === name
          ? "bg-black text-white hover:bg-black"
          : "bg-gray-100 text-black hover:bg-gray-200"
      }`}
      onClick={(e) => dispatch(category(e.target.innerHTML))}
    >
      {name}
    </button>
  );
};

export default Button;
