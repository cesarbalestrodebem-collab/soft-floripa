const PAYLOAD_URL = import.meta.env.PAYLOAD_URL || 'https://cms-magnivio.vercel.app'

// Chassi de Identificação Único do Cliente (Tenant) na Plataforma
const TENANT_ID = '69e6dfb4147e5b45e60cbbbf'

export async function getProdutos() {
  const res = await fetch(`${PAYLOAD_URL}/api/produtos?where[tenant][equals]=${TENANT_ID}&limit=100&depth=1`)
  const data = await res.json()
  return data.docs || []
}

export async function getProduto(slug: string) {
  const res = await fetch(`${PAYLOAD_URL}/api/produtos?where[slug][equals]=${slug}&where[tenant][equals]=${TENANT_ID}&depth=2`)
  const data = await res.json()
  return data.docs?.[0] || null
}

export async function getPosts() {
  const res = await fetch(`${PAYLOAD_URL}/api/blog?where[tenant][equals]=${TENANT_ID}&limit=100&depth=1&sort=-updatedAt`)
  const data = await res.json()
  return data.docs || []
}

export async function getPost(slug: string) {
  const res = await fetch(`${PAYLOAD_URL}/api/blog?where[slug][equals]=${slug}&where[tenant][equals]=${TENANT_ID}&depth=2`)
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