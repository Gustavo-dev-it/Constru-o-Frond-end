import MeuComponente from "./Meu Componente.js"
import NumeroMaior from "./NumeroMaior.js"
import NumeroAleatorio from "./NumeroAleatorio.js"
import Cabecalho from "./Cabecalho.js"
import Familia from "./Familia.js"
import Filho from "./Filho.js"
import ImagemAleatoria from "./ImagemAleatoria.js"


export default function Fundamentos() {
    return (
        <>
            {/*Comentarios no JSX*/}
            <Cabecalho titulo="Fundamentos" descricao="Páginas de fundamentos de React/Next"/>
            <MeuComponente />
            <hr />
            <NumeroMaior numA={2} numB={10} />
           <hr/>

           <NumeroAleatorio />
           <NumeroAleatorio />
           <NumeroAleatorio />

           <hr/>

                <Familia nomeFamilia='soares'>

                <Filho nome="Julia" sobreNome="soares"/>
                <Filho nome="João" sobreNome="soares"/>
                <Filho nome="José" sobreNome="soares"/>

           </Familia>

<hr/>

<ImagemAleatoria>



    
</ImagemAleatoria>

           
        </>
    )
}
