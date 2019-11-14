import React, { useState, useEffect } from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import { useDispatch, useSelector } from "react-redux";
import { HIRE_PERSON, FIRE_PERSON, getPersons } from "../ducks/person";
import { Switch, Route } from "react-router";

const App = props => {
  const dispatch = useDispatch();
  const persons = useSelector(state => state.person);

  console.log(persons, "persons");
  useEffect(() => {
    dispatch(getPersons());
  }, [dispatch]);

  const firePerson = id => {
    dispatch({ type: FIRE_PERSON, payload: id });
  };

  const hirePerson = person => {
    dispatch({ type: HIRE_PERSON, payload: person });
  };

  const isGood = person => person.age >= 30;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <>
      <div>
        <h1> HESE ERP </h1>

        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return (
                <div>
                  <HirePersonForm hirePerson={hirePerson} />
                  <h2> Pahikset </h2>{" "}
                  <PersonList persons={badPersons} firePerson={firePerson} />
                  <h2> Hyvikset </h2>{" "}
                  <PersonList persons={goodPersons} firePerson={firePerson} />{" "}
                </div>
              );
            }}
          />
          <Route
            path="/person/:id"
            exact
            render={props => {
              const person = persons.find(p => p.id === props.match.params.id);
              if (!person) return null;
              return (
                <div>
                  <h2>
                    {person.lastName}, {person.firstName}
                  </h2>
                </div>
              );
            }}
          />
        </Switch>
      </div>{" "}
    </>
  );
};

export default App;
