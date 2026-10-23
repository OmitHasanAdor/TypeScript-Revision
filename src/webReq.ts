import axios, { type AxiosResponse } from "axios";

// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then(res=>{
//     console.log(res)
// })

interface Posts{
    userId: number;
    id:number;
    title:string;
    body:string
}

const fetchData= async()=>{
try {
    const response:AxiosResponse<Posts>= await axios.get("https://jsonplaceholder.typicode.com/posts")
   console.log("posts",response.data)
} catch (error:any) {
    // if(axios.isAxiosError(error)) throw new Error(error.message);
    if(axios.isAxiosError(error)){
        console.log(error.message)
        if (error.response) {
            console.log(error.response.status)
        }
    }
    
}
}