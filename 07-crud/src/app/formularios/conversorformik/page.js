'use client'

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Button, CardImg, Modal, Row, Col} from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ConversorMoeda() {
  const [showModal, setShowModal] = useState(false);
  const [resultado, setResultado] = useState({});

  // Cotações fixas
  const cotacoes = {
    USD: 0.20,   
    EUR: 0.18,   
    BTC: 0.000003 
  };

  const converter = (values) => {
    const valorNumerico = parseFloat(values.valorReal);

    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    const novoResultado = {
      USD: (valorNumerico * cotacoes.USD).toFixed(2),
      EUR: (valorNumerico * cotacoes.EUR).toFixed(2),
      BTC: (valorNumerico * cotacoes.BTC).toFixed(8)
    };

    setResultado(novoResultado);
    setShowModal(true);
  };

  return (
    <Pagina titulo="Conversor de Moedas">

<Row className="justify-content-center">
        <Col xs={6} md={4} className="d-flex justify-content-center">
          <CardImg src="/imc/bitcoin.png" style={{ width: '80%', height: 'auto' }} />
        </Col>
        <Col xs={6} md={4} className="d-flex justify-content-center">
          <CardImg src="/imc/dólar-americano-e-euro-notas-20243784.webp" style={{ width: '80%', height: 'auto' }} />
          </Col>
          </Row>


      <Formik
        initialValues={{ valorReal: '' }}
        onSubmit={converter}
      >
        {({ handleSubmit, setFieldTouched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="valorReal">Valor em Reais:</label>
              <Field
                id="valorReal"
                name="valorReal"
                type="number"
                className="form-control"
                min={0}
                step={0.01}
                onBlur={() => setFieldTouched("valorReal")}
              />
              <ErrorMessage name="valorReal" component="div" className="text-danger" />
              <small className="form-text">Valor em R$ (Reais)</small>
            </div>

            <div className="mb-3 text-center">
              <Button type="submit" variant="success">
                <FaCheck /> Converter
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Resultado da Conversão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Valor em Dólares: ${resultado.USD}</p>
          <p>Valor em Euros: €{resultado.EUR}</p>
          <p>Valor em Bitcoins: ₿{resultado.BTC}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Pagina>
  );
}
