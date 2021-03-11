import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";

//set up vars
const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91kt2pGYt8L._AC_UL200_SR200,200_.jpg",
    title: "I Love You to THE Mood and back",
    author: "Dr Seuss",
  },

  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91Hc5W9y5-L._AC_UL200_SR200,200_.jpg",
    title: "What Is God Like?",
    author: "Rachel Held Evans",
  },
];

// stateless functional component
//always return JSX
const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
function BookList() {
  return <section className="booklist">{names}</section>;
}

const Book = (props) => {
  return (
    <acticle className="book">
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </acticle>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
