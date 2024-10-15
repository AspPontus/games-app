import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext({
    currentUser: undefined,
    login: (email: string, password: string) => Promise.resolve(),
    register: (email:string, username:string, password:string, confirmPassword:string) => Promise.resolve(),
});

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const login = async (email:string, password:string) => {
        const response = await fetch("http://localhost:3001/api/user/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          })
        })
        const data = await response.json();
        setCurrentUser(data)

        return data.uid
    }
    
    const register = async (email:string, username:string, password:string, confirmPassword:string) => {
      const response = await fetch("http://localhost:3001/api/user/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword
        })
      })
      const data = await response.json();
      setCurrentUser(data)
    }

    const value = {
        currentUser,
        login,
        register
    }

    const fetchUser = async () => {
      const api = await fetch("http://localhost:3001/api/user/user-info", {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
      })
      const data = await api.json();
      console.log(data);
      setCurrentUser(data);
      setLoading(false);
      return data;
    }
    
    useEffect(() => {
      fetchUser();
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading&&children}
        </AuthContext.Provider>
      )
}
