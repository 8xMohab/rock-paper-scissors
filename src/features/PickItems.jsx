import React from "react";
import { Items } from "../GameLogic";
import Item from "./item/Item";
function PickItems() {
  return (
    <div className="w-52 h-52 lg:w-64 lg:h-64 mx-auto mt-48 bg-[url('/bg-triangle.svg')] bg-no-repeat bg-contain relative">
      {Items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </div>
  );
}
export default PickItems;
