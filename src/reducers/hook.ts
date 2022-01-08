import React, { Dispatch } from 'react'

export function useToggle(): [string, Dispatch<any>] {
    const [theme, setTheme] = React.useState(
        typeof window !== "undefined" ? localStorage.theme : "dark"
    );
    const colorTheme = theme === "dark" ? "light" : "dark";
    React.useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        if (typeof window !== "undefined") {
           localStorage.setItem("theme", theme);
        }
    }, [theme]);
    return [colorTheme, setTheme];
}

export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = React.useRef(callback)
    React.useLayoutEffect(() => {
      savedCallback.current = callback
    }, [callback])
    React.useEffect(() => {
      if (!delay && delay !== 0) {
        return
      }
      const id = setInterval(() => savedCallback.current(), delay)
      return () => clearInterval(id)
    }, [delay])
}  