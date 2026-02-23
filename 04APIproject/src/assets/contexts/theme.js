import { createContext, CreateContext, UseContext } from "react";

export const ThemeContext = createContext({

    ThemeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return UseContext(ThemeContext)
}