'use client';
import ProtectedContent from '@/components/ProtectedContent';

export default function EducacaoPage() {
  const encryptedContent = "U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=";

  return (
    <ProtectedContent
      encryptedContent={encryptedContent}
      title="Secretaria de Educação"
    >
      <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
        Secretaria de Educação
      </h1>
      <p>
        Este é o conteúdo protegido da Secretaria de Educação. Aqui você pode incluir
        informações, documentos e demais conteúdos que somente serão visualizados
        após a validação da senha.
      </p>
    </ProtectedContent>
  );
}
