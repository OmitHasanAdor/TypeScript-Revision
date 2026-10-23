import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(res=>{
    console.log(res)
})