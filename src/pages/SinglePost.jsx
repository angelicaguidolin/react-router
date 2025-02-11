import { useNavigate, useParams } from "react-router-dom"

export default function SinglePost(){
    const { id }=useParams()
    
    return(
        <>
        <h1>POST SINGOLO</h1>
        {id}
        </>
    )
}