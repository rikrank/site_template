import "./lib/smoothScroll";
import "regenerator-runtime/runtime";

import axios from "axios";

const insertSprite = async () => {
  const res = await axios.get("/assets/svg/sprite.svg");
  const data = res.data;
  const body = document.getElementsByTagName("body")[0];

  body.insertAdjacentHTML("afterbegin", data);
};

insertSprite();

console.log('foo');
