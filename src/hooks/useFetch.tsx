import {useState, useEffect} from "react";
import Axios from "axios";

type InitialState<T> = {
  data: T,
  error: string,
  loading: boolean
}

export const useFetch = (url: string) => {
  const [initialState, setInitailState] = useState<InitialState<T>>({
    data: null,
    error: "",
    loading: true
  })

  useEffect(() => {
    Axios.get(url).then(res => {
      setInitailState({...initialState, data: res.data, loading: false})
    }).catch(err => {
        setInitailState({...initialState, error: `${err.message}`})
      })
  }, [url])
  
  return initialState;
}