import { useContext, useMemo } from "react";
import userContext from "../userContext";

function len(text = "") {
  return text.length;
}

export function Hello() {
  const { user, setUser } = useContext(userContext);
  const nameLen = useMemo(() => len(user.name), [user]);
  return (
    <div>
      <h2>hello</h2>
      <p>nameLen:{nameLen}</p>
      <input
        type="text"
        value={user.name}
        onChange={({ target }) => setUser({ ...user, name: target.value })}
      />
      <h3>User: {user.name}</h3>
    </div>
  );
}
