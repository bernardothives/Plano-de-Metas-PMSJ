"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  // Guarda qual dropdown está aberto (ou null se nenhum)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Alterna o dropdown: se o mesmo botão for clicado, fecha; caso contrário, abre o selecionado
  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Opções de exemplo para cada menu
  const dropdownOptions = {
    visaoMissao: ["Visão", "Missão", "Valores"],
    planoGoverno: ["Eixos", "Projetos", "Investimentos"],
    avaliacaoExterna: ["Relatórios", "Resultados", "Feedback"],
  };

  return (
    <main className={styles.main}>
      {/* Barra Superior */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          {/* Logo do Programa */}
          <Image
            src="/logo-programa-de-metas-colorido.png"
            alt="Logo do Programa"
            width={140}
            height={140}
          />
        </div>

        {/* Botões com dropdown */}
        <nav className={styles.nav}>
          <div className={styles.dropdownContainer}>
            <button
              className={styles.navButton}
              onClick={() => toggleDropdown("visaoMissao")}
            >
              VISÃO E MISSÃO
            </button>
            {openDropdown === "visaoMissao" && (
              <ul className={styles.dropdownMenu}>
                {dropdownOptions.visaoMissao.map((item) => (
                  <li key={item} className={styles.dropdownItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.dropdownContainer}>
            <button
              className={styles.navButton}
              onClick={() => toggleDropdown("planoGoverno")}
            >
              PLANO DE GOVERNO
            </button>
            {openDropdown === "planoGoverno" && (
              <ul className={styles.dropdownMenu}>
                {dropdownOptions.planoGoverno.map((item) => (
                  <li key={item} className={styles.dropdownItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.dropdownContainer}>
            <button
              className={styles.navButton}
              onClick={() => toggleDropdown("avaliacaoExterna")}
            >
              PLANO DE METAS
            </button>
            {openDropdown === "avaliacaoExterna" && (
              <ul className={styles.dropdownMenu}>
                {dropdownOptions.avaliacaoExterna.map((item) => (
                  <li key={item} className={styles.dropdownItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <div className={styles.cityLogo}>
          <Image
            src="/logo-prefeitura-colorido.png"
            alt="Prefeitura Municipal de São José"
            width={130}
            height={70}
          />
        </div>
      </header>

      {/* Banner */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerContent}>
          <Image
            src="/logo-programa-de-metas-branco.png"
            alt="Logo Programa de Metas"
            width={400}
            height={400}
            className={styles.bannerLogo}
          />
          <h2 className={styles.bannerTitle}>
            PROGRAMA DE METAS
            <br />
            2025 / 2028
          </h2>
        </div>
      </section>

      {/* Conteúdo sobre o programa */}
      <section className={styles.contentSection}>
        <h1 className={styles.title}>Programa de Metas</h1>
        <p className={styles.text}>
          Bem-vindo ao Programa de Metas da Prefeitura Municipal de São José!
          Aqui você encontra informações sobre os projetos, objetivos e resultados
          que visam melhorar a qualidade de vida na nossa cidade.
        </p>
        <p className={styles.text}>
          Nesta plataforma, você poderá acompanhar o andamento das metas
          estabelecidas, conhecer detalhes de cada ação e entender como estamos
          trabalhando para construir uma cidade mais moderna, sustentável e
          inclusiva.
        </p>
      </section>
    </main>
  );
}
