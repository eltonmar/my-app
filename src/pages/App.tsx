//o useState não é do React, entao é preciso ser importado separadamente
import React, { useState } from 'react';
import { text } from 'stream/consumers';
import Cronometro from '../components/Cronometro';
//import Botao from './components/botao';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';
import Item from '../components/lista/item';

function App() {
  //primeiro, criar uma constante (variavel) dentro da function receber os valores que serão alocados na lista
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()
  function selecionaTarefa (tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      //ele pega os dados selecionados na tarefa, e se forem true, retorna true: se forem false, retorna false
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  {/* Abaixo é o código para finalizar a tarefa, e impedir que ela seja clicada novamente*/}
  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
        setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
            if(tarefa.id === selecionado.id) {
                return {
                    ...tarefa,
                    selecionado: false,
                    completado: true
                }
            }
            return tarefa;
        }))
    }
}
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas= {setTarefas} />
      <Lista tarefas={tarefas} 
      selecionaTarefa = {selecionaTarefa} 
      /> 
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefa = {finalizarTarefa} />
    </div>
  );
}

export default App;