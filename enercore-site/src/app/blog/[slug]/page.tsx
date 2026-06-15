import { getPostBySlug, getAllPosts } from '@/sanity/queries'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post: any) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) return notFound()

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/blog" className="text-sm text-gray-400 hover:text-white mb-8 inline-block">
        ← Back to Blog
      </Link>
      <p className="text-sm text-gray-400 mb-3">
        {new Date(post.publishedAt).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <h1 className="text-4xl font-bold mb-10">{post.title}</h1>
      <div className="prose prose-invert max-w-none">
        {post.body && <PortableText value={post.body} />}
      </div>
    </main>
  )
}