import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciou')

        return () => {
            console.log('O component finalizou')
        }
    }, []);

    useEffect(() => {
        console.log('O estado nome mudou')
    }, [nome]);

    useEffect(() => {
        console.log('materiaA mudou para: ' + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC        
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá {nome}, foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, não foi aprovado</p>
            )
        }
    }

    return(
        <form action="">
            <input type="text" name="" id="" placeholder="Seu Nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" min={0} max={10} onChange={({ target }) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" min={0} max={10} onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" min={0} max={10} onChange={evento => setMateriaC(parseInt(evento.target.value))}/>            
            {renderizaResultado()}
        </form>
    )
}

export default Formulario