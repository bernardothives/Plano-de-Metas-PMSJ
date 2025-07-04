'use client';
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import BackButton from './BackButton';

export default function ProtectedContent({ encryptedContent, children, title = 'Área Protegida' }) {
  const [acessoLiberado, setAcessoLiberado] = useState(false);
  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
      // Novo container principal que imita o layout das outras páginas
      <div style={{
        minHeight: '100vh',
        padding: '2rem',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* O botão de voltar agora fica aqui, e seu próprio estilo o alinha à esquerda */}
        <BackButton />

        {/* A caixa de login, que será centralizada pelo container principal */}
        <div style={{
          padding: '2rem',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          marginTop: '2rem' // Adiciona um espaço entre o botão e a caixa
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
      </div>
    );
  }

  // O conteúdo protegido permanece como estava
  return (
    <div style={{ padding: '2rem', width: '100%', margin: '1rem auto' }}>
      {children}
    </div>
  );
}