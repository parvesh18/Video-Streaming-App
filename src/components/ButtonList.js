import React from "react";
import Button from "./Button";
import { BUTTON_NAMES } from "../utils/constants";

const ButtonList = () => {
  return (
    <ul className="hidden lg:flex flex-wrap justify-center gap-x-3">
      {BUTTON_NAMES.map((item) => (
        <Button key={item.id} name={item.name} />
      ))}
    </ul>
  );
};

export default ButtonList;
