import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useToggle = () => {

    const [value, setValue] = useLocalStorage("color-mode");

    useEffect(() => {
    const body = window.document.body
        if (value) {
            body.classList.add("color-mode");
        } else {
            body.classList.remove("color-mode")
        }
    }, [value])

return [value, setValue];
};