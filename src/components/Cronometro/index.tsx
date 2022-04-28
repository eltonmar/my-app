import Botao from "../botao"
import Relogio from "./Relogio"
import style from './cronometro.module.scss'
import { tempoParaSegundos } from "../../common/uteis/time"
import { ITarefa } from "../../types/tarefa"
import { useEffect, useState } from "react"

interface Props {
    selecionado: ITarefa| undefined
    finalizarTarefa: () => void
}
//código anterior omitido

export default function Cronometro({ selecionado, finalizarTarefa }:
    Props) {
        const [tempo, setTempo] = useState<number>();
    
      useEffect(() => {
        if(selecionado?.tempo) {
          setTempo(tempoParaSegundos(selecionado.tempo));
        }
      },[selecionado]);
    
      function regressiva(contador: number = 0) {
          setTimeout(() => {
              if(contador > 0) {
                  setTempo(contador -1);
                  return regressiva (contador -1);
              }
              finalizarTarefa ()
          }, 1000);
    
        }

    //console.log ('conversão: ', tempoParaSegundos('01:01:01'))
    //o código abaixo consegue selecionar o item sem entrar em nenhum loop, mas através dele não é possivel realizar ação
    //const [tempo, setTempo] = useState<number>(tempoParaSegundos(String(selecionado?.tempo)))
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para inicar</p>
            {/*Tempo: {tempo}*/}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick = {() => regressiva(tempo) }>
                    Começar
                </Botao>
            
        </div>
    )
}
