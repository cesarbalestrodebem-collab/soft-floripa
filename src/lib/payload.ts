const PAYLOAD_URL = import.meta.env.PAYLOAD_URL || 'https://cms-magnivio.vercel.app'

// Nome do Tenant exato como será cadastrado no CMS Magnivio
const TENANT_NAME = 'Soft Floripa'

let cachedTenantId: string | null = null;
async function getTenantId() {
  if (cachedTenantId) return cachedTenantId;
  try {
    const res = await fetch(`${PAYLOAD_URL}/api/tenants?where[nome][equals]=${TENANT_NAME}&limit=1`);
    const data = await res.json();
    if (data.docs && data.docs.length > 0) {
      cachedTenantId = data.docs[0].id;
      return cachedTenantId;
    }
  } catch (e) {
    console.error("Erro ao buscar o Tenant no CMS", e);
  }
  return null;
}

export async function getProdutos() {
  const tenantId = await getTenantId();
  if (!tenantId) return [];
  const res = await fetch(`${PAYLOAD_URL}/api/produtos?where[tenant][equals]=${tenantId}&limit=100&depth=1`)
  const data = await res.json()
  return data.docs || []
}

export async function getProduto(slug: string) {
  const tenantId = await getTenantId();
  if (!tenantId) return null;
  const res = await fetch(`${PAYLOAD_URL}/api/produtos?where[slug][equals]=${slug}&where[tenant][equals]=${tenantId}&depth=2`)
  const data = await res.json()
  return data.docs?.[0] || null
}

export async function getPosts() {
  const tenantId = await getTenantId();
  if (!tenantId) return [];
  const res = await fetch(`${PAYLOAD_URL}/api/blog?where[tenant][equals]=${tenantId}&limit=100&depth=1&sort=-updatedAt`)
  const data = await res.json()
  return data.docs || []
}

export async function getPost(slug: string) {
  const tenantId = await getTenantId();
  if (!tenantId) return null;
  const res = await fetch(`${PAYLOAD_URL}/api/blog?where[slug][equals]=${slug}&where[tenant][equals]=${tenantId}&depth=2`)
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