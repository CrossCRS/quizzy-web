import React from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import axios from 'axios';

interface Props {
  children: React.ReactNode,
}

interface IAuthContext {
  token: string | null,
  username?: string,
  setData?: (newToken: string, newUsername: string) => void,
  clearData?: () => void,
}

const AuthContext = createContext<IAuthContext>({ token: null });

const AuthProvider = ({ children }: Props) => {
  // State to hold the authentication token
  const [token, setTokenState] = useState<string | null>(localStorage.getItem('token'));
  const [username, setUsernameState] = useState<string | undefined>();

  // Function to set the authentication token
  const setData = (newToken: string, newUsername: string) => {
    setTokenState(newToken);
    setUsernameState(newUsername);
  };

  // Function to clear tokens
  const clearData = () => {
    setTokenState(null);
    setUsernameState(undefined);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + token;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem('token');
    }
  }, [token]);

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
