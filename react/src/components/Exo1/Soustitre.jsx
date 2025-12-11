function SousTitre() {

    let salutation = "";
    let time = new Date().getHours();
    let minutes = new Date().getMinutes();

    if (time < 18) {
        salutation = "Bonjour"
    } else {
        salutation = "Bonsoir"
    }

    let sentence = salutation+", il est "+time+"h"+minutes+", et je vous souhaite la bienvenue !";

    return(
        <div>
            <p>{ sentence }</p>
        </div>
    )
}

export default SousTitre

// const time = new Date().getHours()+h;
// const salutation = time > 17 ? "bonsoir" : "bonjour";
// const sentence = `${salutation} il est ${time} et je vous souhaite la bienvenue`;