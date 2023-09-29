import './css/botao.css'

function Numero({value,clickHandle}){
    
    return (
        <div id="numero" className='botao' onClick={clickHandle}>{value}</div>
    )
}

export default Numero