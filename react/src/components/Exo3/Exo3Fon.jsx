import Button from "./Button"

function Exo3Fon() {

    function handleClickTata() {
        alert('test tata')
    }

    function handleClickToto() {
        alert("test toto")
    }

    return(
        <>
            <div className="exo3">
                < Button value={"0"} nameOfMyClass={'red'} functionClick={handleClickTata}/>
                < Button value={"1"} nameOfMyClass={'green'} functionClick={handleClickToto}/>
                < Button value={"2"} nameOfMyClass={'red'} functionClick={handleClickToto}/>
                < Button value={"+"} nameOfMyClass={'green'} functionClick={handleClickTata}/>
            </div>
        </>
    )
}

export default Exo3Fon