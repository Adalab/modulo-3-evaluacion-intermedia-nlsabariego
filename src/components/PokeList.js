import React from "react";
import "../stylesheet/PokeList.css";

function PokeList(props) {
  return <ul className="content-list">{props.children}</ul>;
}

export default PokeList;
