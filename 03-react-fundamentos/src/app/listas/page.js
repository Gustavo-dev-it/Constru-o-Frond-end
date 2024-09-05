
'use client'

import React from 'react'
import Pagina from '../Components/Pagina'
import { Col, Row, Table, Carousel } from 'react-bootstrap'


export default function page() {

    const carros = ["HB20", "Palio", "Argo"]
    const imagens = ['https://picsum.photos/200?random=1',
        'https://picsum.photos/200?random=2',
        'https://picsum.photos/200?random=3']



    return (
        <Pagina titulo="Listas">

            <Row>
                <Col>
                    {carros.map(carro => {
                        return <p>{carro}</p>
                    })}
                </Col>
                <Col>
                    <ul>
                        {carros.map(carro => {
                            return <li>{carro}</li>

                        })}

                    </ul>
                </Col>
            </Row>

            <Row>

                <Table striped bordered hover>
                    <thead className='table-danger'>
                        <tr>
                            <th>Carros</th>
                        </tr>
                    </thead>
                    <tbody>

                        {carros.map(carro => {
                            return (
                                <tr>
                                    <td>{carro}</td>
                                </tr>
                            )

                        })}

                    </tbody>
                </Table>

            </Row>

            <Row>

                <Carousel>
                    {imagens.map(imagem => {
                        return (
                            <Carousel.Item>
                                <img src={imagem} width={700} height={700} />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>



            </Row>




        </Pagina>

    )
}
