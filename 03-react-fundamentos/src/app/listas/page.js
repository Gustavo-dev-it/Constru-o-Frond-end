import React from 'react'
import Pagina from '../Components/Pagina'
import {Col, Row, Table } from 'react-bootstrap'


export default function page() {

    const carros = ["HB20", "Palio", "Argo"]


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




        </Pagina>

    )
}
