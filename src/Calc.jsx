import './css/calculadora.css'
import './Display'
import Display from './Display'
import Numero from './Numero'
import Operator from './Operador'
import Decimal from './decimal'
import Igual from './igual'
import Reset from './Reset'
import Backspace from './Backspace'
import { useState } from 'react'

function Calculadora(){
  const [tela,setTela] = useState('0')
  const [estado,setEstado] = useState('Ini')
  const [acompanhamento,setAcompanhamento] = useState(estado)
  const [numeradores, setNumeradores] = useState(Array(3).fill(null))

function reset(){
    setTela('0')
    setEstado('Ini')
    setAcompanhamento(estado)
    setNumeradores(Array(3).fill(null))
    console.log(numeradores)
}

function handleNumerador(n){
    switch(estado){
        case 'Ini':
            n = n + ''
            setTela(n)
            numeradores[0] = tela
            setNumeradores(numeradores)
            console.log(numeradores)
            setEstado('N1')
            break
        case 'N1':
            n = n + ''
            setTela(tela + n)
            numeradores[0] = tela
            setNumeradores(numeradores)
            console.log(numeradores)
            break
        case 'N2init':
            n = n + ''
            setTela(n)
            numeradores[2] = tela
            setNumeradores(numeradores)
            console.log(numeradores)
            setEstado('N2')
            break
        case 'N2':
            n = n + ''
            setTela(tela + n)
            numeradores[2] = tela
            setNumeradores(numeradores)
            console.log(numeradores)
            break
    }
}

function handleOperator(o){
    if(estado == 'N1'){
        setEstado('N2init')
        switch(o){
            case '+':
               numeradores[0] = tela
               numeradores[1] = o
               setNumeradores(numeradores)
               console.log(numeradores)
               break
            case 'X':
               numeradores[0] = tela
               numeradores[1] = o
               setNumeradores(numeradores)
               console.log(numeradores)
               break
            case '/':
               numeradores[0] = tela
               numeradores[1] = o
               setNumeradores(numeradores)
               break
            case '-':
               numeradores[0] = tela
               numeradores[1] = o
               setNumeradores(numeradores)
               break
        }
    }
}
  function igual(){
    let resultado 
    let op
    numeradores[2] = tela
    if(numeradores[0] != null && numeradores[2] != null){
        numeradores[0] = parseInt(numeradores[0])
        numeradores[2] = parseInt(numeradores[2])
        op = numeradores[1]
        console.log(op)
        switch(op){
           case '+':
               resultado = numeradores[0] + numeradores[2]
               console.log(resultado)
               setTela(resultado)
               numeradores[0] = resultado
               numeradores[1] = null
               numeradores[2] = null
               setNumeradores(numeradores)
               console.log(numeradores)
               setEstado('N1')
               break
            case 'X':
               resultado = numeradores[0] * numeradores[2]
               console.log(resultado)
               console.log('veio aqui')
               setTela(resultado)
               numeradores[0] = resultado
               numeradores[1] = null
               numeradores[2] = null
               setNumeradores(numeradores)
               setEstado('N1')
               break
            case '/':
               resultado = numeradores[0] / numeradores[2]
               console.log(resultado)
               console.log("veio aqui")
               setTela(resultado)
               numeradores[0] = resultado
               numeradores[1] = null
               numeradores[2] = null
               setNumeradores(numeradores)
               setEstado('N1')
               break
            case '-':
               resultado = numeradores[0] - numeradores[2]
               console.log(resultado)
               setTela(resultado)
               numeradores[0] = resultado
               numeradores[1] = null
               numeradores[2] = null
               setNumeradores(numeradores)
               setEstado('N1')
               break
        }                
    }
}
    return (
        <div id='corpo'>
        
          <Display value={tela} acompanhamento={estado}/>
          <Reset clickHandle={() =>reset()}/>
          <Backspace/>
          <Numero value={7} clickHandle={() => handleNumerador(7)}/>
          <Numero value={8} clickHandle={() => handleNumerador(8)}/>
          <Numero value={9} clickHandle={() => handleNumerador(9)}/>
          <Operator value={"/"} handleClick={() =>handleOperator('/')}/>
          <Numero value={4} clickHandle={() => handleNumerador(4)}/>
          <Numero value={5} clickHandle={() => handleNumerador(5)}/>
          <Numero value={6} clickHandle={() => handleNumerador(6)}/>
          <Operator value={"X"} handleClick={() =>handleOperator('X')}/>
          <Numero value={1} clickHandle={() => handleNumerador(1)}/>
          <Numero value={2} clickHandle={() => handleNumerador(2)}/>
          <Numero value={3} clickHandle={() => handleNumerador(3)}/>
          <Operator value={"+"} handleClick={() =>handleOperator('+')}/>
          <Numero value={0} clickHandle={() => handleNumerador(0)}/>
          <Decimal value={'.'}/> 
          <Igual value={'='} clickHandle={()=>igual('=')}/> 
          <Operator value={"-"} handleClick={() =>handleOperator('-')}/>
        </div>
    )
}

export default Calculadora

