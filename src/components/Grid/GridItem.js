import React from "react";
import LikeButton from "./LikeButton";

function GridItem({ apparel }) {
  return (
    <div className="grid__card">
      <p>Name : {apparel.name}</p>
      <p>Category : {apparel.category}</p>
      <p>Rp.{apparel.price},00</p>
      <div>
        <span> Product description :</span> <p>{apparel.description}</p>
      </div>
      <LikeButton liked={apparel.liked} />
    </div>
  );
}

export default GridItem;
