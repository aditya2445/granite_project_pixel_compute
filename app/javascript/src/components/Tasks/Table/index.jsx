import React from "react";

import Header from "./Header";
import Row from "./Row";

const Table = ({ data, destroyTask, showTask }) => (
  <div className="min-w-fill inline-block">
    <table className="min-w-fill border-collapse border border-gray-300">
      <Header />
      <Row data={data} destroyTask={destroyTask} showTask={showTask} />
    </table>
  </div>
);

export default Table;
