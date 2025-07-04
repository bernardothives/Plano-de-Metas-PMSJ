'use client';

import React from 'react';
import styles from './page.module.css';
import BackButton from '@/components/BackButton'; // Importe o BackButton

export default function DashboardPage() {
  // URLs de incorporação dos seus dois gráficos principais
  const chart1EmbedUrl = 'https://1drv.ms/x/c/e7d9cc0b8185d601/IQQCrDHVQOV2Q5-7-lh2yj9cAVS_VoAASN-3H9LVZxDO_yU?em=2&wdAllowInteractivity=False&Item=Chart%201&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True';
  const chart2EmbedUrl = 'https://1drv.ms/x/c/e7d9cc0b8185d601/IQQCrDHVQOV2Q5-7-lh2yj9cAVS_VoAASN-3H9LVZxDO_yU?em=2&wdAllowInteractivity=False&Item=Chart%202&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True';

  return (
    <main className={styles.mainContainer}>
      <BackButton />
      <h1 className={styles.title}>Dashboard dos Objetivos de Governo</h1>

      <div className={styles.chartsContainer}>
        {/* Gráfico 1 */}
        <div className={styles.chartWrapper}>
          <iframe
            src={chart1EmbedUrl}
            title="Dashboard Principal - Gráfico 1"
            className={styles.iframe}
            allowFullScreen
          />
        </div>

        {/* Gráfico 2 */}
        <div className={styles.chartWrapper}>
          <iframe
            src={chart2EmbedUrl}
            title="Dashboard Principal - Gráfico 2"
            className={styles.iframe}
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}