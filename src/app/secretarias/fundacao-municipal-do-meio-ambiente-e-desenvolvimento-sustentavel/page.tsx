'use client';
import ProtectedContent from '@/components/ProtectedContent';

export default function FundacaoMeioAmbienteDesenvolvimentoPage() {
  const encryptedContent = "SUA_CHAVE_ENCRIPTADA_AQUI";

  return (
    <ProtectedContent
      encryptedContent={encryptedContent}
      title="Fundação Municipal do Meio Ambiente e Desenvolvimento"
    >
      <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
        Fundação Municipal do Meio Ambiente e Desenvolvimento
      </h1>
      <p>
        Este é o conteúdo protegido da Fundação Municipal do Meio Ambiente e Desenvolvimento.
        Aqui você pode incluir informações, documentos e demais conteúdos que somente serão
        visualizados após a validação da senha.
      </p>
    </ProtectedContent>
  );
}
