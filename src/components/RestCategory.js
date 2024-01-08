import React, { useState } from "react";
import ItemList from "./itemList";

const RestCategory = ({ data, show, setShowIndex }) => {
  const { title, itemCards } = data;

  function handleClick() {
    setShowIndex();
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {title}({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {show && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestCategory;
