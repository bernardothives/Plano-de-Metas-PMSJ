'use client';
import { useState } from 'react';
import CryptoJS from 'crypto-js';

export default function ProtectedContent({ encryptedContent, children, title = 'Área Protegida' }) {
  const [acessoLiberado, setAcessoLiberado] = useState(false);
  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Descriptografa o conteúdo utilizando a senha digitada
    const decrypted = CryptoJS.AES.decrypt(encryptedContent, senhaDigitada);
    const texto = decrypted.toString(CryptoJS.enc.Utf8);
    if (texto === 'acesso_ok') {
      setAcessoLiberado(true);
      setErro('');
    } else {
      setErro('Senha incorreta');
    }
  };

  if (!acessoLiberado) {
    return (
      <div style={{
        padding: '2rem',
        maxWidth: '400px',
        margin: '3rem auto',
        textAlign: 'center',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ marginBottom: '1rem', color: '#00743A' }}>{title}</h1>
        <p style={{ marginBottom: '1.5rem' }}>Digite a senha para acessar o conteúdo:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Digite a senha"
            value={senhaDigitada}
            onChange={(e) => setSenhaDigitada(e.target.value)}
            style={{
              padding: '0.75rem',
              width: '100%',
              marginBottom: '1rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button type="submit" style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#00743A',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Entrar
          </button>
        </form>
        {erro && <p style={{ color: 'red', marginTop: '1rem' }}>{erro}</p>}
      </div>
    );
  }

  // Exibe o conteúdo protegido se a senha estiver correta
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '3rem auto' }}>
      {children}
    </div>
  );
}
