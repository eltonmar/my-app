//O import abaixo não precisa ser usado para a criação de uma function component
//import React from "react"
import { ITarefa } from '../../../types/tarefa'
import style from './item.module.scss'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

//function abaixo para criar os itens que forem adicionados na tabela
export default function Item({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa }: Props) {
    //console.log('Item atual: ', { tarefa, tempo, selecionado, completado, id })
    return (
        <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado : style.item} ${completado ? style.itemCompletado : ''}`} 
        
        onClick={() => !completado && selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        }
        )}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
            {completado && <span className={style.concluido} aria-label="item completada"></span>}
        </li>
    )
}