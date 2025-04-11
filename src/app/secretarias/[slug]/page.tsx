import ProtectedContent from '@/components/ProtectedContent';
import { secretariasContent } from '@/app/secretarias/secretariasData';
import styles from './page.module.css';

// Declaramos o tipo manualmente
interface SecretariaData {
  title: string;
  encryptedContent: string;
  powerBIEmbedUrl: string;
  sheetUrl: string;
  content?: string;
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default function SecretariaPage({ params }: PageProps) {
  const { slug } = params;

  // "Forçamos" o TS a tratar secretariasContent como Record<string, SecretariaData>
  const typedSecretarias = secretariasContent as Record<string, SecretariaData>;

  // Agora typedSecretarias[slug] é SecretariaData | undefined
  const secretaria = typedSecretarias[slug];

  if (!secretaria) {
    return <div>Secretaria não encontrada.</div>;
  }

  return (
    <ProtectedContent
      encryptedContent={secretaria.encryptedContent}
      title={secretaria.title}
    >
      <h1 className={styles.title}>{secretaria.title}</h1>

      <div className={styles.dashboardContainer}>
        <iframe
          src={secretaria.powerBIEmbedUrl}
          title={`Dashboard da ${secretaria.title}`}
          className={styles.iframe}
          allowFullScreen
        />
      </div>

      <div className={styles.buttonContainer}>
        <a
          href={secretaria.sheetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Preencher Planilha
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
