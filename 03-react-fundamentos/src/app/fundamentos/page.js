import MeuComponente from "./Meu Componente.js"
import NumeroMaior from "./NumeroMaior.js"


export default function Fundamentos() {
    return (
        <>
            {/*Comentarios no JSX*/}
            <h1>MeuComponente1</h1>
            <hr />
            <MeuComponente />
            <hr />
            <NumeroMaior numA={2} numB={10} />
           
        </>
    )
}
