import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from 'axios'

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null) ;
    const { dispatch } = useAuthContext()

    const signup =  async(username, email, password) => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await axios.post('http://localhost:4000/api/user/signup', { username, email, password });
            console.log(response.data); // handle successful response
        
            // save the user to local storage
            localStorage.setItem('user',JSON.stringify(response.data.token))

            //update the auth context
            dispatch({type:'LOGIN', payload:response.data})
            setIsLoading(false)
          } catch (error) {
            console.error("eror",error.response.data); // log error details
            setIsLoading(false)
            setError(error.response.data.message)
          }
        



        
    }
    return { signup, isLoading, error }
}
