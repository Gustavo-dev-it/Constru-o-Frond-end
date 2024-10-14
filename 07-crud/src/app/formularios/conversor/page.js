'use client'

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

export default function ConversorMoeda() {
  const [showModal, setShowModal] = useState(false);
  const [valorReal, setValorReal] = useState('');
  const [resultado, setResultado] = useState({});
  
  // Cotações fictícias para o exemplo
  const cotacoes = {
    USD: 0.20,   
    EUR: 0.18,   
    BTC: 0.000003 
  };

  function converter(event) {
    event.preventDefault();

    const valorNumerico = parseFloat(valorReal);

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
  }

  return (
    <Pagina titulo="Conversor de Moedas">
      <Form onSubmit={converter}>
        <Form.Group className="mb-3">
          <Form.Label>Valor em Reais:</Form.Label>
          <Form.Control
            type="number"
            required
            value={valorReal}
            onChange={e => setValorReal(e.target.value)}
            min={0}
            step={0.01}
          />
          <Form.Text>Valor em R$ (Reais)</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 text-center">
          <Button type="submit" variant="success">
            <FaCheck /> Converter
          </Button>
        </Form.Group>
      </Form>

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
