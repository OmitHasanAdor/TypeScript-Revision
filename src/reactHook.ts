import { useState } from "react";  //react install korini to eta error dibe tai cmnt kore rakhchi
interface FetchStates<T>{
    data: T | null
    loading: boolean
    error:string | null
}
// url string holew return data interfaca etheke ashbe
export function useFetch<T>(url : string): FetchStates<T>{
      const [state, setState] = useState<FetchStates<T>>(
        {
    data: null ,
    loading: true,
    error: null
}
      );
// useEffect to make fetch request
return state
}