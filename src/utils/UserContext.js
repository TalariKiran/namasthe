
import React from "react";
import { createContext } from "react";

const UserContext = createContext(
    {
        loggedIn:'default User'
    }
);

export default UserContext;

