import './css/botao.css'

function Igual({value, clickHandle}){
    return(
        <div id="igual" className='botao' onClick={clickHandle}>{value}</div>
    )
}


export default Igual