import './css/Display.css'

function Display({value, acompanhamento}){
    return(
        <div id="visor">
            {value}
            <p id='acompanhamento'>{acompanhamento}</p>
        </div>

    )
}


export default Display