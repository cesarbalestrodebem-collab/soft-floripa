const PAYLOAD_URL = import.meta.env.PAYLOAD_URL || 'https://cms-magnivio.vercel.app'

// Nome do Tenant exato como será cadastrado no CMS Magnivio
const TENANT_NAME = 'Soft Floripa'

export async function getProdutos() {
  const res = await fetch(`${PAYLOAD_URL}/api/produtos?where[tenant.nome][equals]=${TENANT_NAME}&limit=100&depth=1`)
  const data = await res.json()
  return data.docs || []
}

export async function getProduto(slug: string) {
  const res = await fetch(`${PAYLOAD_URL}/api/produtos?where[slug][equals]=${slug}&where[tenant.nome][equals]=${TENANT_NAME}&depth=2`)
  const data = await res.json()
  return data.docs?.[0] || null
}

export async function getPosts() {
  // O endpoint agora é "blog" no CMS Magnivio, e não mais "posts"
  const res = await fetch(`${PAYLOAD_URL}/api/blog?where[tenant.nome][equals]=${TENANT_NAME}&limit=100&depth=1&sort=-updatedAt`)
  const data = await res.json()
  return data.docs || []
}

export async function getPost(slug: string) {
  const res = await fetch(`${PAYLOAD_URL}/api/blog?where[slug][equals]=${slug}&where[tenant.nome][equals]=${TENANT_NAME}&depth=2`)
  const data = await res.json()
  return data.docs?.[0] || null
}

export async function getConfiguracoes() {
  const res = await fetch(`${PAYLOAD_URL}/api/globals/configuracoes`)
  const data = await res.json()
  return data || {}
}

export function getImageUrl(image: any) {
  if (!image) return '/placeholder.webp'
  if (typeof image === 'string') return `${PAYLOAD_URL}${image}`
  return `${PAYLOAD_URL}${image.url}`
}