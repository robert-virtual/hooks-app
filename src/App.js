import { useState } from "react";
import { About } from "./components/about";
import { Hello } from "./components/hello";
import Publish from "./components/publish";
import userContext from "./userContext";

function App() {
  const [user, setUser] = useState({ name: "robert", age: 21 });
  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Publish />
        <hr />
        <h1>hola mundo</h1>
        <input
          type="text"
          value={user.name}
          onChange={({ target }) => setUser({ ...user, name: target.value })}
        />
        <Hello />
        <About />
      </div>
    </userContext.Provider>
  );
}

export default App;
