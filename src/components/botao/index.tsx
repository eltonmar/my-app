import { type } from "@testing-library/user-event/dist/type";
import React, { Children } from "react";
import style from './botao.module.scss'
//criando um botão que extende um componente React
//a função abaixo tem como função, colocar em cada botão no código o valor que será adicionado a cada um

{/*
interface Props {
    type ?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
    children?: React.ReactNode
}

function Botao ({onClick, type, children}:Props) {
    <button 
    onClick={onClick} 
    type= {type} 
    className={style.botao}
    >
        {children}
    </button>
}
*/}

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    children?: React.ReactNode
  }> {
    render() {
      const { type = "button", onClick } = this.props;
      return (
        <button 
        onClick={onClick}
        type={type} 
        className={style.botao}>
          {this.props.children}
        </button>
      )
    }
  }

  
//exportar a classe para ser importada em outra parte do código
export default Botao