'use client';
import ProtectedContent from '@/components/ProtectedContent';

export default function RegularizacaoFundiariaPage() {
  const encryptedContent = "SUA_CHAVE_ENCRIPTADA_AQUI";

  return (
    <ProtectedContent
      encryptedContent={encryptedContent}
      title="Secretaria de Regularização Fundiária"
    >
      <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
        Secretaria de Regularização Fundiária
      </h1>
      <p>
        Este é o conteúdo protegido da Secretaria de Regularização Fundiária. Aqui você pode incluir
        informações, documentos e demais conteúdos que somente serão visualizados
        após a validação da senha.
      </p>
    </ProtectedContent>
  );
}
