import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <h2>Counter {counter}</h2>

      {isLogged ? (
        <div>
          <button onClick={() => dispatch(increment(5))}>+</button>
          <button onClick={() => dispatch(decrement(5))}>-</button>
          <br></br>
          <br></br>
          <h3>You're now logged in!</h3>
          <button onClick={() => dispatch(logout())}>Log Out</button>
        </div>
      ) : (
        <div>
          <h3>You aren't logged in!</h3>
          <button onClick={() => dispatch(login())}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default App;
