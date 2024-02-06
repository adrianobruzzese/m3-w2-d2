import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorMessage = () => (
  <Alert variant="warning">Attenzione: Problema di connessione. Verifica il token di accesso.</Alert>
);

export default ErrorMessage;
