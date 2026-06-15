import { getAllPosts } from '@/sanity/queries'
import Link from 'next/link'

export const revalidate = 60

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      {posts.length === 0 && (
        <p className="text-gray-400">No posts published yet.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <article className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <p className="text-sm text-gray-400 mb-2">
                {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              {post.excerpt && (
                <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
              )}
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}