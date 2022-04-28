import React from "react";
import style from './relogio.module.scss'

interface Props {
    tempo: number | undefined
}
export default function Relogio ({tempo = 0} : Props) {
    //transformando o numero em segundos para minutos
    const minutos = Math.floor(tempo / 60)
    //pegando o resto da divisão por 60 e usando como os segundos 
    const segundos = tempo % 60
    //separando em string os minutos e os segundos para demonstrar nos Span´s do codigo
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')
    return (
        <React.Fragment>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </React.Fragment>
    )
}