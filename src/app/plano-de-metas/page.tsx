'use client';

import dynamic from 'next/dynamic';
import BackButton from '@/components/BackButton';
import styles from './page.module.css';

// Carrega o componente PdfViewer dinamicamente e APENAS no lado do cliente (ssr: false)
const PdfViewer = dynamic(() => import('@/components/PdfViewer'), { 
  ssr: false,
  loading: () => <p>Carregando visualizador...</p>
});

export default function PlanoDeMetasPage() {
  const pdfFile = '/plano-de-metas.pdf';

  return (
    <main className={styles.mainContainer}>
      <div className={styles.header}>
        <BackButton />
      </div>

      <div className={styles.pdfViewer}>
        <PdfViewer file={pdfFile} />
      </div>
    </main>
  );
}