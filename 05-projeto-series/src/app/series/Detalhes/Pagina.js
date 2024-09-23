'use client'

import apiSeries from "@/app/apis/apiFilmes";
import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import { CardImg, Col, Row } from "react-bootstrap";


export default function page(props) {

   const [serie, setSerie] = useState({})

    useEffect(() => {
        buscarserie()


    }, [])

    async function buscarserie() {

        const resultado = await apiSeries("/tv/{id}?language=pt-BR")


        const serieRecebidos = resultado.data
        console.log(resultado.data)
        setSerie(serieRecebidos)
    }



    return (


        <Pagina titulo={serie.title}>



            {serie.id && (

                <Row>
                    <Col md={3}>
                        <CardImg src={"https://image.tmdb.org/t/p/w500/" + serie.poster_path} />
                    </Col>


                    <Col md={9}>

                    <p><b>Sinopse:</b> {serie.overview}</p>
                    <p><b>Data de Lançamento:</b> {serie.release_date}</p>
                    <p><b>Orçamento:</b> {serie.revenue}</p>
                    <p><b>Duração:</b> {serie.runtime}</p>
                    <p><b>Nota:</b> {serie.vote_average} </p>



                    </Col>
                </Row>

            )}







        </Pagina>
    )
}
