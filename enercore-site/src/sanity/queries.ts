import { client } from './client'

export async function getAllPosts() {
  return await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      coverImage
    }`
  )
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      coverImage,
      body
    }`,
    { slug }
  )
}