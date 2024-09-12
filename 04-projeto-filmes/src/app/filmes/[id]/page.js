'use client'

import apiFilmes from "@/app/apis/apiFilmes";
import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import { CardImg, Col, Row } from "react-bootstrap";


export default function page(props) {

   const [filme, setFilme] = useState({})

    useEffect(() => {
        buscarFilme()


    }, [])

    async function buscarFilme() {

        const resultado = await apiFilmes("/movie/" + props.params.id + "?language=pt-BR")


        const filmeRecebidos = resultado.data
        console.log(resultado.data)
        setFilme(filmeRecebidos)
    }



    return (


        <Pagina titulo={filme.title}>



            {filme.id && (

                <Row>
                    <Col md={3}>
                        <CardImg src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} />
                    </Col>


                    <Col md={9}>

                    <p><b>Sinopse:</b> {filme.overview}</p>
                    <p><b>Data de Lançamento:</b> {filme.release_date}</p>
                    <p><b>Orçamento:</b> {filme.revenue}</p>
                    <p><b>Duração:</b> {filme.runtime}</p>
                    <p><b>Nota:</b> {filme.vote_average} </p>



                    </Col>
                </Row>

            )}







        </Pagina>
    )
}
