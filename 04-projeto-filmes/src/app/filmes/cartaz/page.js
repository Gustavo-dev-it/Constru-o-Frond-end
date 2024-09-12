'use client'
import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '@/app/components/Pagina'
import apiFilmes from '@/app/apis/apiFilmes'

export default function page() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        buscarFilmes()

   
}, [])


    async function buscarFilmes() {

        const resultado = await apiFilmes.get("/movie/now_playing?language=pt-BR")
      

        const filmesRecebidos = resultado.data.results
        console.log(filmesRecebidos)
        setFilmes(filmesRecebidos)
    }

    return (

        <Pagina titulo="Filmes em Cartaz">

<Row md={4}>

{filmes.map(filme =>{
    return(
        <Col className='py-2'>

<Card>
<Card.Img src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path }/>

<Card.Title>{filme.original_title}</Card.Title>
<p><b>Nota:</b> {filme.vote_average} ⭐</p>
<Card.Footer>

    <Button className='bg-danger' href={'/filmes/' + filme.id}>Detalhes</Button>
</Card.Footer>

</Card>


      
      
        </Col>
    )
})}

</Row>



        </Pagina>

        



    )
}
