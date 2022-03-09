import { useContext } from "react";
import userContext from "../userContext";

export function About() {
  const { user, setUser } = useContext(userContext);

  return (
    <div>
      <h2>About</h2>
      <input
        type="text"
        value={user.name}
        onChange={({ target }) => setUser({ ...user, name: target.value })}
      />
      <h3>User: {user.name}</h3>
    </div>
  );
}
