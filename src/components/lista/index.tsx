import React, { Children, useState } from "react";
import style from './lista.module.scss'
import Item from "./item";
import { ITarefa } from "../../types/tarefa";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
  }
  
function Lista({ tarefas, selecionaTarefa }:Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2 //onClick={() => {
            //setTarefas([...tarefas, {tarefa: "Estudar estado",tempo:"05:00:00"}])}}
            >
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map(item =>(
                    <Item
                    selecionaTarefa = {selecionaTarefa}
                    key = {item.id}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista