import { useState } from "react"
import "../assets/style/Pages.css"

function Vulnerable() {
    // etat pour un input user
    const [userInput, setUserInput] = useState("");
    // etat pour afficher le result
    const [displayedContent, setDisplayedContent] = useState("");
    // etat pour stocker les commentaires
    const [comments, setComments] = useState([]);
    const [newComments, setNewComment] = useState("");

    const handleDisplayContent = () => {
        setDisplayedContent(userInput);
    }
    const handleAddComment = () => {
        if (newComments.trim()) {
            //ajout direct sans sanitization
            setComments([...comments, newComments]);
            setNewComment('');
        }
    }
    return(
        <>
            <h2>Page vulnérable</h2>
            <p>Ici il y a des vulnérabilitées !</p>
            <section className="vunerablePageSection">
                <textarea 
                    value={userInput}
                    onChange={(e)=>setUserInput(e.target.value)}
                    placeholder="Entrez la faille vu en cours ici ! ex : img onerror..."
                ></textarea>
                <button onClick={handleDisplayContent}>
                    Envoyez le contenu (vulnérable!)
                </button>

                <div>
                    <span>Résultat affiché :</span>
                    {/* props react :  */}
                    <div dangerouslySetInnerHTML={{__html: displayedContent}}></div>
                </div>
            </section>
            <section className="vunerablePageSection">
                <h2>Injection dans un tableau/list</h2>
                <div>
                    <textarea 
                        value={newComments}
                        onChange={(e)=>setNewComment(e.target.value)}
                        placeholder="essayer les failles ici aussi"
                    >
                    </textarea>
                    <button onClick={handleAddComment}>Add comment vulnérable</button>                        
                </div>

                <div>
                    <span>Les comments :</span>
                    {comments.map((comment, index)=>(
                        <li key={index}>
                            <div dangerouslySetInnerHTML={{__html: comment}}/>
                        </li>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Vulnerable