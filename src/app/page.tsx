"use client";
import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const textRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo-programa-de-metas-colorido.png"
            alt="Logo do Programa"
            width={120}
            height={125}
            onClick={() => router.push("/")}
          />
        </div>

        <nav className={styles.nav}>
          <button
            className={styles.navButton}
            onClick={() => scrollToSection(textRef)}
          >
            MISSÃO E VISÃO
          </button>

          <a
            href="https://drive.google.com/uc?export=download&id=1EV112Xs5QZ4hHtK6O-Ug9cWiFPnsF3w7"
            className={styles.navButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            PLANO DE METAS
          </a>

          <button
            className={styles.navButton}
            onClick={() => router.push("/secretarias")}
          >
            SECRETARIAS
          </button>

          <button
            className={styles.navButton}
            onClick={() => router.push("/dashboard")}
          >
            DASHBOARD
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
            2025 - 2028
          </h2>
        </div>
      </section>

      <section ref={textRef} className={styles.contentSection}>
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
        <h1 className={styles.title}>Missão</h1>
        <p className={styles.text}>
         Realizar uma administração pautada pela transparência, respeito, compromisso e ética,
         buscando a humanização das ações e serviços oferecidos, bem como a responsabilidade social e ambiental .​
        </p>
        <h1 className={styles.title}>Visão</h1>
        <p className={styles.text}>
        Prestar serviços de qualidade e 
        promover o desenvolvimento, cumprindo suas atribuições de forma inovadora, 
        com o objetivo de levar qualidade de vida e bem-estar social para todos os josefenses, 
        visando um futuro mais digno para as próximas gerações .​
        </p>
      </section>
    </main>
  );
}