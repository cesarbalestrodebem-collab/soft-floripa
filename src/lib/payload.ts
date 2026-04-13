const PAYLOAD_URL = import.meta.env.PAYLOAD_URL || 'https://soft-floripa-cms.vercel.app'

export async function getProdutos() {
  const res = await fetch(`${PAYLOAD_URL}/api/produtos?limit=100&depth=1`)
  const data = await res.json()
  return data.docs || []
}

export async function getProduto(slug: string) {
  const res = await fetch(`${PAYLOAD_URL}/api/produtos?where[slug][equals]=${slug}&depth=2`)
  const data = await res.json()
  return data.docs?.[0] || null
}

export async function getPosts() {
  const res = await fetch(`${PAYLOAD_URL}/api/posts?limit=100&depth=1&sort=-dataPublicacao`)
  const data = await res.json()
  return data.docs || []
}

export async function getPost(slug: string) {
  const res = await fetch(`${PAYLOAD_URL}/api/posts?where[slug][equals]=${slug}&depth=2`)
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