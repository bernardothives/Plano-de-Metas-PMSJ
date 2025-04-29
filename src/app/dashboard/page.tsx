'use client';

import React from 'react';
import styles from './page.module.css';

export default function DashboardPage() {
  // URL do seu relatório Power BI embutido
  const embedUrl = '<YOUR_POWER_BI_EMBED_URL>'; // substitua pela URL real

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Dashboard dos Objetivos de Governo</h1>

      <div className={styles.dashboardContainer}>
        <iframe
          title="Power BI Dashboard"
          src={embedUrl}
          className={styles.iframe}
          allowFullScreen
        />
      </div>

      <div className={styles.buttonContainer}>
        <a
          href={embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Abrir Dashboard em Nova Aba
        </a>
      </div>

      <div className={styles.additionalContent}>
        {/* Adicione aqui conteúdo adicional abaixo do dashboard, se necessário */}
      </div>
    </main>
  );
}