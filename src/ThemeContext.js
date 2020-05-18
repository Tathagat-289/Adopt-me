import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);
/// in createContext- a hook- state and a function

export default ThemeContext;