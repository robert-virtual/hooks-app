import { createContext } from "react";

const userContext = createContext({ user: { name: "", age: 0 }, setUser() {} });
export default userContext;
