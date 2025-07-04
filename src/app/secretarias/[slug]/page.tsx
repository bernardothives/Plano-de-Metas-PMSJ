import ProtectedContent from '@/components/ProtectedContent';
import { secretariasContent } from '@/app/secretarias/secretariasData';
import styles from './page.module.css';
import BackButton from '@/components/BackButton'; // Importe o BackButton

// A interface para os dados da secretaria
interface SecretariaData {
  title: string;
  encryptedContent: string;
  sheetUrl: string;
  chart1EmbedUrl?: string;
  chart2EmbedUrl?: string;
  content?: string;
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SecretariaPage({ params }: PageProps) {
  const { slug } = await params;
  const typedSecretarias = secretariasContent as Record<string, SecretariaData>;
  const secretaria = typedSecretarias[slug];

  if (!secretaria) {
    return <div>Secretaria não encontrada.</div>;
  }

  // Determina se temos um ou dois gráficos para aplicar um estilo específico
  const singleChart = secretaria.chart1EmbedUrl && !secretaria.chart2EmbedUrl;

  return (
    // O componente ProtectedContent já cria um container principal
    <ProtectedContent
      encryptedContent={secretaria.encryptedContent}
      title={secretaria.title}
    >
      <BackButton />
      <h1 className={styles.title}>{secretaria.title}</h1>

      {/* ESTRUTURA CORRETA ABAIXO: 
        O container 'chartsContainer' precisa de um filho direto para cada gráfico.
      */}
      <div className={`${styles.chartsContainer} ${singleChart ? styles.singleChartLayout : ''}`}>
        
        {/* Gráfico 1, sempre envolvido por sua própria div */}
        {secretaria.chart1EmbedUrl && (
          <div className={styles.chartWrapper}>
            <iframe
              src={secretaria.chart1EmbedUrl}
              title={`Gráfico 1 - ${secretaria.title}`}
              className={styles.iframe}
              allowFullScreen
            />
          </div>
        )}

        {/* Gráfico 2, sempre envolvido por sua própria div */}
        {secretaria.chart2EmbedUrl && (
          <div className={styles.chartWrapper}>
            <iframe
              src={secretaria.chart2EmbedUrl}
              title={`Gráfico 2 - ${secretaria.title}`}
              className={styles.iframe}
              allowFullScreen
            />
          </div>
        )}
      </div>

      <div className={styles.buttonContainer}>
        <a
          href={secretaria.sheetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Acessar Planilha Completa
        </a>
      </div>

      {secretaria.content && (
        <div className={styles.additionalContent}>
          <p>{secretaria.content}</p>
        </div>
      )}
    </ProtectedContent>
  );
}