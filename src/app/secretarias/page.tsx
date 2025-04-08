import Link from 'next/link'
import styles from './page.module.css'

export default function SecretariaPage() {
  const secretarias = [
    "Secretária de Administração",
    "Secretária de Assistência Social",
    "Secretária de Cultura e Turismo",
    "Secretária Integrada de Comunicação",
    "Secretária de Desenvolvimento Econômico e Inovação",
    "Secretária de Educação",
    "Secretária de Esportes e Lazer",
    "Secretária de Finanças",
    "Secretária de Governo",
    "Secretária de Infraestrutura",
    "Secretária de Planejamento e Assuntos Estratégicos",
    "Secretária da Receita",
    "Secretária de Regularização Fundiária",
    "Secretária de Saúde",
    "Secretária de Segurança, Defesa Social e Trânsito",
    "Secretária de Transparência",
    "Secretária de Urbanismo e Serviços Públicos",
    "Fundação Educacional Municipal",
    "Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável"
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
