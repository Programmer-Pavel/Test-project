import { createContext, useState } from 'react';

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthContextValue {
  user: string | null;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
