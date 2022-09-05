import React from "react";
import GridItem from "./GridItem";
import Pagination from "./Pagination";

function Grid({ apparels }) {
  return (
    <>
      <Pagination />
      <div className="grid">
        {apparels.map((apparel) => (
          <GridItem apparel={apparel} key={apparel.id} />
        ))}
      </div>
    </>
  );
}

export default Grid;
