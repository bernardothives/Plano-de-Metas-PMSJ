'use client';
import ProtectedContent from '@/components/ProtectedContent';

export default function IntegradaComunicacaoPage() {
  const encryptedContent = "SUA_CHAVE_ENCRIPTADA_AQUI";

  return (
    <ProtectedContent
      encryptedContent={encryptedContent}
      title="Secretaria Integrada de Comunicação"
    >
      <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
        Secretaria Integrada de Comunicação
      </h1>
      <p>
        Este é o conteúdo protegido da Secretaria Integrada de Comunicação. Aqui você pode incluir
        informações, documentos e demais conteúdos que somente serão visualizados
        após a validação da senha.
      </p>
    </ProtectedContent>
  );
}
