import React from "react";
import "./App.css";

const App = () => <PersonList />;

const Person = props => {
  const {img, name,job} = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />

      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};


const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "jon",
      job: "developer"
    },
    {
      img: 34,
      name: "mabb",
      job: "developer"
    },
    {
      img: 45,
      name: "dan",
      job: "developer"
    }
  ];
  return (
    <section>
      <Person person={people[0]}/>;
      <Person person={people[1]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </Person>;
      <Person person={people[2]}/>;
    </section>
  );
};




export default App;
