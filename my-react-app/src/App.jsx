import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Welcome from "./Welcome";
import Login from "./Login";

function App() {
  // 0 is a initial value
  //hooks => prefix => use
  const [count, setCount] = useState(0);
  const firstName = "Ramita";
  const isLoggedIn = true;
  function handleCount() {
    setCount((count) => {
      console.log(count, "previous count values");
      return count + 1;
    });
  }
  return (
    // fragments
    <>
      {/* conditional rendering */}
      {!isLoggedIn ? <Login /> : <Welcome firstName={firstName} />}
      <section id="center">
        <button type="button" className="counter" onClick={handleCount}>
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;
