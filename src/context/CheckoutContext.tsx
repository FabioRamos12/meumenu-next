import { createContext, useState } from "react";

export const CheckoutContext = createContext({});

export function CheckoutContextProvider({ children }) {
    const [price, setPrice] = useState("");

    return (
        <CheckoutContext.Provider value={{}}>
            {children}
        </CheckoutContext.Provider>
    );
}
