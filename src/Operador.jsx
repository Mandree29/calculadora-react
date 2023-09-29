import './css/botao.css'

function Operator({value, handleClick}){
    return(
        <div id="operador" className='botao' value={value} onClick={handleClick}>{value}</div>
    )
}


export default Operator