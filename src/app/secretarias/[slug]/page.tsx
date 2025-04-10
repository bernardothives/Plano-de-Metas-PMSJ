'use client';
import ProtectedContent from '@/components/ProtectedContent';
import { ReactElement } from 'react';

type SecretariaData = {
  title: string;
  encryptedContent: string;
  content: ReactElement;
};

const secretariasContent: Record<string, SecretariaData> = {
  'secretaria-de-administracao': {
    title: 'Secretária de Administração',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Administração
        </h1>
        <p>Conteúdo protegido da Secretaria de Administração.</p>
      </div>
    ),
  },
  'secretaria-de-assistencia-social': {
    title: 'Secretária de Assistência Social',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Assistência Social
        </h1>
        <p>Conteúdo protegido da Secretaria de Assistência Social.</p>
      </div>
    ),
  },
  'secretaria-de-cultura-e-turismo': {
    title: 'Secretária de Cultura e Turismo',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Cultura e Turismo
        </h1>
        <p>Conteúdo protegido da Secretaria de Cultura e Turismo.</p>
      </div>
    ),
  },
  'secretaria-integrada-de-comunicacao': {
    title: 'Secretária Integrada de Comunicação',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária Integrada de Comunicação
        </h1>
        <p>Conteúdo protegido da Secretaria Integrada de Comunicação.</p>
      </div>
    ),
  },
  'secretaria-de-desenvolvimento-economico-e-inovacao': {
    title: 'Secretária de Desenvolvimento Econômico e Inovação',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Desenvolvimento Econômico e Inovação
        </h1>
        <p>Conteúdo protegido da Secretaria de Desenvolvimento Econômico e Inovação.</p>
      </div>
    ),
  },
  'secretaria-de-educacao': {
    title: 'Secretária de Educação',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Educação
        </h1>
        <p>Conteúdo protegido da Secretaria de Educação.</p>
      </div>
    ),
  },
  'secretaria-de-esportes-e-lazer': {
    title: 'Secretária de Esportes e Lazer',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Esportes e Lazer
        </h1>
        <p>Conteúdo protegido da Secretaria de Esportes e Lazer.</p>
      </div>
    ),
  },
  'secretaria-de-financas': {
    title: 'Secretária de Finanças',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Finanças
        </h1>
        <p>Conteúdo protegido da Secretaria de Finanças.</p>
      </div>
    ),
  },
  'secretaria-de-governo': {
    title: 'Secretária de Governo',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Governo
        </h1>
        <p>Conteúdo protegido da Secretaria de Governo.</p>
      </div>
    ),
  },
  'secretaria-de-infraestrutura': {
    title: 'Secretária de Infraestrutura',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Infraestrutura
        </h1>
        <p>Conteúdo protegido da Secretaria de Infraestrutura.</p>
      </div>
    ),
  },
  'secretaria-de-planejamento-e-assuntos-estrategicos': {
    title: 'Secretária de Planejamento e Assuntos Estratégicos',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Planejamento e Assuntos Estratégicos
        </h1>
        <p>
          Conteúdo protegido da Secretaria de Planejamento e Assuntos Estratégicos.
        </p>
      </div>
    ),
  },
  'secretaria-da-receita': {
    title: 'Secretária da Receita',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária da Receita
        </h1>
        <p>Conteúdo protegido da Secretaria da Receita.</p>
      </div>
    ),
  },
  'secretaria-de-regularizacao-fundiaria': {
    title: 'Secretária de Regularização Fundiária',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Regularização Fundiária
        </h1>
        <p>Conteúdo protegido da Secretaria de Regularização Fundiária.</p>
      </div>
    ),
  },
  'secretaria-de-saude': {
    title: 'Secretária de Saúde',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Saúde
        </h1>
        <p>Conteúdo protegido da Secretaria de Saúde.</p>
      </div>
    ),
  },
  'secretaria-de-seguranca-defesa-social-e-transito': {
    title: 'Secretária de Segurança, Defesa Social e Trânsito',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Segurança, Defesa Social e Trânsito
        </h1>
        <p>
          Conteúdo protegido da Secretaria de Segurança, Defesa Social e Trânsito.
        </p>
      </div>
    ),
  },
  'secretaria-de-transparencia': {
    title: 'Secretária de Transparência',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Transparência
        </h1>
        <p>Conteúdo protegido da Secretaria de Transparência.</p>
      </div>
    ),
  },
  'secretaria-de-urbanismo-e-servicos-publicos': {
    title: 'Secretária de Urbanismo e Serviços Públicos',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Secretária de Urbanismo e Serviços Públicos
        </h1>
        <p>
          Conteúdo protegido da Secretaria de Urbanismo e Serviços Públicos.
        </p>
      </div>
    ),
  },
  'fundacao-educacional-municipal': {
    title: 'Fundação Educacional Municipal',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Fundação Educacional Municipal
        </h1>
        <p>Conteúdo protegido da Fundação Educacional Municipal.</p>
      </div>
    ),
  },
  'fundacao-municipal-do-meio-ambiente-e-desenvolvimento-sustentavel': {
    title: 'Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável',
    encryptedContent: 'U2FsdGVkX1/VWS6xeGe4WQV5OGgLg6Eqh3PCAd3adxk=',
    content: (
      <div>
        <h1 style={{ color: '#00743A', fontSize: '2rem', fontWeight: 'bold' }}>
          Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável
        </h1>
        <p>
          Conteúdo protegido da Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável.
        </p>
      </div>
    ),
  },
};

type PageProps = {
  params: { slug: string };
};

export default function SecretariaPage({ params }: PageProps) {
  const { slug } = params;
  const secretaria = secretariasContent[slug];

  if (!secretaria) {
    return <div>Secretaria não encontrada.</div>;
  }

  return (
    <ProtectedContent encryptedContent={secretaria.encryptedContent} title={secretaria.title}>
      {secretaria.content}
    </ProtectedContent>
  );
}
