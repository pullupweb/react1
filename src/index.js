import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import men30 from "./image/Pop-Smoke-2.jpg"
import men40 from "./image/Screen-Shot-2019-08-14-at-3.44.09-PM.png"
import men50 from "./image/OIPUG9FRDB7.jpg"
//adding props
const Person = ({ img, name, job, children }) => {
  //using template litrals
  // const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

//now to create a component
const PersonList = () => {
  return (
    <section className = "person-list">
      <Person img="34" name="khyn" job="web devoloper"><img src={men30}></img></Person>
      <Person img="32" name="pullup" job="designer"><img src={men40}></img></Person>
      <Person img="56" name="magge" job="boss"><img src={men50}></img>
        <p>
          Lorem ipsum dolor site amet consectetur adipisicing elit.
        </p>
      </Person>
    </section>
  );
}



ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
