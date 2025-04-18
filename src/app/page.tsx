"use client";
import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  // Refs para as seções que receberão scroll
  const visaoMissaoRef = useRef<HTMLDivElement | null>(null);
  const planoGovernoRef = useRef<HTMLDivElement | null>(null);

  // Função para rolar até a seção desejada
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.main}>
      {/* Header no fluxo normal */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo-programa-de-metas-colorido.png"
            alt="Logo do Programa"
            width={120}
            height={125}
          />
        </div>

        <nav className={styles.nav}>
          <button
            className={styles.navButton}
            onClick={() => scrollToSection(visaoMissaoRef)}
          >
            VISÃO E MISSÃO
          </button>

          <button
            className={styles.navButton}
            onClick={() => scrollToSection(planoGovernoRef)}
          >
            PLANO DE GOVERNO
          </button>

          <button
            className={styles.navButton}
            onClick={() => router.push("/secretarias")}
          >
            SECRETARIAS
          </button>
        </nav>

        <div className={styles.cityLogo}>
          <Image
            src="/logo-prefeitura-colorido.png"
            alt="Prefeitura Municipal de São José"
            width={160}
            height={100}
          />
        </div>
      </header>

      {/* Banner preenchendo a tela */}
      <section className={styles.bannerSection}>
        <Image
          src="/banner-sao-jose.png"
          alt="Banner de São José"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
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
      
      {/* Conteúdo Geral do Programa */}
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
          trabalhando para construir uma cidade mais moderna, sustentável e inclusiva.
        </p>
      </section>

      {/* Seção VISÃO E MISSÃO */}
      <section ref={visaoMissaoRef} className={styles.contentSection}>
        <h1 className={styles.title}>Visão e Missão</h1>
        <p className={styles.text}>
        ​A Prefeitura Municipal de São José, em Santa Catarina, 
        orienta sua atuação por princípios que visam promover uma gestão pública eficiente e 
        comprometida com o bem-estar da população.
        </p>
        <p className={styles.text}>
        Sua missão é realizar uma administração pautada pela transparência, respeito, compromisso e ética,
         buscando a humanização das ações e serviços oferecidos, bem como a responsabilidade social e ambiental .​
        </p>
        <p className={styles.text}>
        A visão da Prefeitura é prestar serviços de qualidade e 
        promover o desenvolvimento, cumprindo suas atribuições de forma inovadora, 
        com o objetivo de levar qualidade de vida e bem-estar social para todos os josefenses, 
        visando um futuro mais digno para as próximas gerações .​
        </p>
      </section>

      {/* Seção PLANO DE GOVERNO */}
      <section ref={planoGovernoRef} className={styles.contentSection}>
        <h1 className={styles.title}>Proposta do Plano de Governo</h1>
        <p className={styles.text}>
          Descreva aqui a proposta do plano de governo...
        </p>
        <p className={styles.text}>
          Mais detalhes, objetivos, metas e ações do governo...
        </p>
      </section>
    </main>
  );
}
