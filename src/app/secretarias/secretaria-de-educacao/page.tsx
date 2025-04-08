'use client';
import ProtectedContent from '@/components/ProtectedContent';

export default function EducacaoPage() {
  // Valor criptografado gerado previamente usando, por exemplo:
  // const CryptoJS = require('crypto-js');
  // const encrypted = CryptoJS.AES.encrypt("acesso_ok", "senha123").toString();
  // console.log(encrypted);
  // Resultado: 'U2FsdGVkX1/MhbhFcfO7W1apVG0Zf1+kz0LZV65DiF0='
  const encryptedContent = 'U2FsdGVkX1/MhbhFcfO7W1apVG0Zf1+kz0LZV65DiF0=';

  return (
    <ProtectedContent encryptedContent={encryptedContent} title="Secretaria de Educação">
      <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>Secretaria de Educação</h1>
      <p>
        Este é o conteúdo protegido da Secretaria de Educação. Aqui você pode incluir
        informações, documentos e demais conteúdos que somente serão visualizados
        após a validação da senha.
      </p>
    </ProtectedContent>
  );
}
