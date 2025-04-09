'use client';
import ProtectedContent from '@/components/ProtectedContent';

export default function UrbanismoServicosPublicosPage() {
  const encryptedContent = "SUA_CHAVE_ENCRIPTADA_AQUI";

  return (
    <ProtectedContent
      encryptedContent={encryptedContent}
      title="Secretaria de Urbanismo e Serviços Públicos"
    >
      <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
        Secretaria de Urbanismo e Serviços Públicos
      </h1>
      <p>
        Este é o conteúdo protegido da Secretaria de Urbanismo e Serviços Públicos.
        Aqui você pode incluir informações, documentos e demais conteúdos que somente serão
        visualizados após a validação da senha.
      </p>
    </ProtectedContent>
  );
}
