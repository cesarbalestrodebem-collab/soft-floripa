const PAYLOAD_URL = 'https://soft-floripa-cms.vercel.app'
const EMAIL = 'cesarbalestrodebem@gmail.com'
const PASSWORD = 'MboTTdIjbqfBxLos'

const produtos = [
  {
    nome: 'Purificador de Água Everest Star',
    slug: 'everest-star',
    descricao: 'O mais robusto da linha Everest. Com refrigeração por compressor e reservatório de 2 litros, ideal para famílias grandes, escritórios e comércios em Florianópolis.',
    destaque: true,
    especificacoes: [
      { item: 'Refrigeração', valor: 'Por compressor' },
      { item: 'Reservatório', valor: '2,0 litros de água gelada' },
      { item: 'Temperatura da água', valor: 'Gelada, natural ou misturada' },
      { item: 'Instalação', valor: 'Bancada ou parede' },
      { item: 'Voltagem', valor: '127V ou 220V' },
      { item: 'Vida útil do refil', valor: '4.000 litros (9 a 12 meses)' },
      { item: 'Cores disponíveis', valor: 'Branco, Preto, Prata, Cereja' },
      { item: 'Filtragem', valor: 'Dupla filtragem' },
    ],
  },
  {
    nome: 'Purificador de Água Everest Slim',
    slug: 'everest-slim',
    descricao: 'Design slim e eficiente. Com refrigeração por compressor, perfeito para cozinhas modernas, pequenos comércios e escritórios em Florianópolis que valorizam estilo e praticidade.',
    destaque: true,
    especificacoes: [
      { item: 'Refrigeração', valor: 'Por compressor' },
      { item: 'Reservatório', valor: '1,8 litros de água gelada' },
      { item: 'Temperatura da água', valor: 'Gelada, natural ou misturada' },
      { item: 'Instalação', valor: 'Bancada ou parede' },
      { item: 'Voltagem', valor: '127V ou 220V' },
      { item: 'Vida útil do refil', valor: '4.000 litros (9 a 12 meses)' },
      { item: 'Cores disponíveis', valor: 'Branco, Preto, Prata' },
      { item: 'Filtragem', valor: 'Dupla filtragem' },
    ],
  },
  {
    nome: 'Purificador de Água Everest Fit',
    slug: 'everest-fit',
    descricao: 'O menor da linha Everest, gigante no que importa. Com refrigeração por compressor, ideal para apartamentos compactos e rotinas agitadas em Florianópolis.',
    destaque: true,
    especificacoes: [
      { item: 'Refrigeração', valor: 'Por compressor' },
      { item: 'Reservatório', valor: '1,2 litros de água gelada' },
      { item: 'Temperatura da água', valor: 'Gelada, natural ou misturada' },
      { item: 'Instalação', valor: 'Bancada ou parede' },
      { item: 'Voltagem', valor: '127V ou 220V' },
      { item: 'Vida útil do refil', valor: '4.000 litros (9 a 12 meses)' },
      { item: 'Cores disponíveis', valor: 'Branco, Preto, Prata' },
      { item: 'Filtragem', valor: 'Dupla filtragem' },
    ],
  },
  {
    nome: 'Purificador de Água Everest Baby',
    slug: 'everest-baby',
    descricao: 'O mais econômico da linha Everest. Sem refrigeração, fornece água natural em temperatura ambiente. Perfeito para quem prefere praticidade e economia em Florianópolis.',
    destaque: false,
    especificacoes: [
      { item: 'Refrigeração', valor: 'Sem refrigeração' },
      { item: 'Temperatura da água', valor: 'Natural (temperatura ambiente)' },
      { item: 'Instalação', valor: 'Bancada ou parede' },
      { item: 'Voltagem', valor: '127V ou 220V' },
      { item: 'Vida útil do refil', valor: '4.000 litros (9 a 12 meses)' },
      { item: 'Cores disponíveis', valor: 'Branco' },
      { item: 'Filtragem', valor: 'Dupla filtragem' },
    ],
  },
  {
    nome: 'Purificador de Água Everest Plus',
    slug: 'everest-plus',
    descricao: 'O ideal para ambientes corporativos. Alta capacidade e refrigeração por compressor, perfeito para escritórios, clínicas e empresas em Florianópolis que atendem muitas pessoas.',
    destaque: false,
    especificacoes: [
      { item: 'Refrigeração', valor: 'Por compressor' },
      { item: 'Reservatório', valor: '2,0 litros de água gelada' },
      { item: 'Capacidade', valor: 'Alta demanda — mais de 15 pessoas' },
      { item: 'Temperatura da água', valor: 'Gelada, natural ou misturada' },
      { item: 'Instalação', valor: 'Bancada ou parede' },
      { item: 'Voltagem', valor: '127V ou 220V' },
      { item: 'Vida útil do refil', valor: '4.000 litros (9 a 12 meses)' },
      { item: 'Filtragem', valor: 'Dupla filtragem' },
    ],
  },
  {
    nome: 'Refil Original Everest 2 em 1',
    slug: 'refil-everest',
    descricao: 'O único refil feito sob medida para purificadores Everest. Com carvão ativado e prata coloidal, garante água pura e segura por até 4.000 litros. Disponível na Soft Floripa em Florianópolis.',
    destaque: false,
    especificacoes: [
      { item: 'Tipo', valor: '2 em 1 (dupla filtragem)' },
      { item: 'Vida útil', valor: '4.000 litros (9 a 12 meses)' },
      { item: 'Material filtrante', valor: 'Carvão ativado com prata coloidal' },
      { item: 'Filtragem', valor: 'Partículas acima de 5 micra' },
      { item: 'Compatibilidade', valor: 'Todos os modelos Everest' },
    ],
  },
]

async function cadastrar() {
  console.log('Fazendo login no Payload CMS...')
  
  const loginRes = await fetch(`${PAYLOAD_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  })
  
  const loginData = await loginRes.json()
  const token = loginData.token
  
  if (!token) {
    console.error('Erro no login:', loginData)
    return
  }
  
  console.log('Login OK! Cadastrando produtos...')
  
  for (const produto of produtos) {
    const res = await fetch(`${PAYLOAD_URL}/api/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`,
      },
      body: JSON.stringify(produto),
    })
    
    const data = await res.json()
    if (data.doc) {
      console.log(`✅ Cadastrado: ${produto.nome}`)
    } else {
      console.log(`❌ Erro em ${produto.nome}:`, data.errors || data.message)
    }
  }
  
  console.log('Concluido!')
}

cadastrar()