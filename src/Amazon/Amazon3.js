import React from "react";
import { product } from "./Amazon";
import Amazon2 from "./Amazon2";

const Amazon3 = () => {
  return (
    <div className="myclass">
      {product.map((item) => (
        <Amazon2
          key={item}
          title={item.title}
          imgpath={item.imgpath}
          brand={item.brand}
          price={item.price}
        >
        </Amazon2>
      ))}
    </div>
  );
};

export default Amazon3;
