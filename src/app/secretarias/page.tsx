'use client';

import Link from 'next/link'
import styles from './page.module.css'
import BackButton from '@/components/BackButton'; // Importe o BackButton

export default function SecretariaPage() {
  const secretarias = [
    "Secretaria de Administração",
    "Secretaria de Assistência Social",
    "Secretaria de Cultura e Turismo",
    "Secretaria Integrada de Comunicação",
    "Secretaria de Desenvolvimento Econômico e Inovação",
    "Secretaria de Educação",
    "Secretaria de Esportes e Lazer",
    "Secretaria de Finanças",
    "Secretaria de Governo",
    "Secretaria de Infraestrutura",
    "Secretaria de Planejamento e Assuntos Estratégicos",
    "Secretaria da Receita",
    "Secretaria de Regularização Fundiária",
    "Secretaria de Saúde",
    "Secretaria de Segurança, Defesa Social e Trânsito",
    "Secretaria Executiva de Transparência",
    "Secretaria de Urbanismo e Serviços Públicos",
    "Fundação Educacional Municipal",
    "Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável",
    "Procuradoria Geral do Município",
    "Autarquia São José Previdência"
  ]

  // Função para gerar uma URL amigável (slug) para cada secretaria.
  function getSlug(name: string): string {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
      .replace(/,/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
  }

  return (
    <main className={styles.main}>
      <BackButton />
      <h1 className={styles.title}>Secretarias e Fundações</h1>
      <div className={styles.grid}>
        {secretarias.map((nome) => (
          <Link key={nome} href={`/secretarias/${getSlug(nome)}`} className={styles.card}>
            {nome}
          </Link>
        ))}
      </div>
    </main>
  )
}