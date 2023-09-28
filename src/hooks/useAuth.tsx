import React from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import axios from 'axios';

interface Props {
  children: React.ReactNode,
}

interface IAuthContext {
  token: string | null,
  username: string | null,
  setData?: (newToken: string, newUsername: string) => void,
  clearData?: () => void,
}

const AuthContext = createContext<IAuthContext>({ token: null, username: null });

const AuthProvider = ({ children }: Props) => {
  // State to hold the authentication token
  const [token, setTokenState] = useState<string | null>(localStorage.getItem('token'));
  const [username, setUsernameState] = useState<string | null>(localStorage.getItem('username'));

  // Function to set the authentication token
  const setData = (newToken: string, newUsername: string) => {
    setTokenState(newToken);
    setUsernameState(newUsername);
  };

  // Function to clear tokens
  const clearData = () => {
    setTokenState(null);
    setUsernameState(null);
  };

  useEffect(() => {
    if (token && username) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + token;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
  }, [token, username]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      username,
      setData,
      clearData,
    }),
    [token],
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
