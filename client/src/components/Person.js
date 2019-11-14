import React from "react";
import { Link } from "react-router-dom";

//import styles from "./Person.pcss";

// import cx from "classnames";

const Person = props => {
  const { person, firePerson } = props;

  /*
  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender == "f"
  });
  */

  return (
    <div
      css={[
        {
          border: "5px solid rgb(0,0,0)",
          borderRadius: "15px",
          margin: "1em 0",
          padding: "1em"
        },
        person.gender === "m" && {
          backgroundColor: "rgb(200, 200, 255)"
        },
        person.gender === "f" && {
          backgroundColor: "rgb(255, 255, 200)"
        }
      ]}
      key={person.id}
    >
      <Link to={`/person/${person.id}`}>
        {person.lastName} {person.firstName}
      </Link>
      <div>
        <button onClick={() => firePerson(person.id)}>You're fired!</button>
      </div>
    </div>
  );
};

export default Person;
