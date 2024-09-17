import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

export const AuthContext = createContext()//return value to children
export const AuthProvider = ({ children }) => {

  const [blogs, setBlogs] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [profile, setProfile] = useState()
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProfile = async () => {
      let token = localStorage.getItem("jwt")
      console.log(token)
      if(token){
        try {
            const { data } = await axios.get("https://blog-app-umber-phi.vercel.app/api/users/my-profile", {
              withCredentials: true,
              headers: {
                  'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json'
                 }
            }
            )
            console.log(data);
            setProfile(data);
            setIsAuthenticated(true)
          }
          catch (error) {
            console.log(error)
            localStorage.removeItem('jwt')
            setIsAuthenticated(false)
          }

      }
    };
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("https://blog-app-umber-phi.vercel.app/api/blogs/all-blogs",
          { withCredentials: true }
        )
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log(error)
      }
    }
    const fetchData = async () => {
      await fetchBlogs();
      await fetchProfile();
      setLoading(false);
    };
    fetchData();
  }, [])

  return (
    <AuthContext.Provider value={{
      blogs,
      isAuthenticated,
      setIsAuthenticated,
      profile,
      setProfile,
      loading,
    }}> {children} </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
