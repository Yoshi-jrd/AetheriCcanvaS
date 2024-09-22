import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase-config';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
