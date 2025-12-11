import { useState } from "react"
import DOMPurify from "dompurify"

function Secure() {
    const [userImput, setUserImput] = useState("");
    const [displayedContent, setDisplayedContent] = useState("");
    const [comments, setComments] = useState([]);
    const [newComment, setNewComments] = useState("");

    return(
        <>
        <h2>Page sécurisée</h2>
        </>
    )
}

export default Secure