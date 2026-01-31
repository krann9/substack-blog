'use client'

import { useEffect, useState } from 'react'

async function fetchPosts() {
    try {
          const rssUrl = process.env.NEXT_PUBLIC_SUBSTACK_RSS_URL
          if (!rssUrl) return []
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
          const data = await response.json()
          if (data.items) {
                  return data.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
          }
          return []
    } catch (error) {
          console.error('Error fetching posts:', error)
          return []
    }
}

export default function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [subStatus, setSubStatus] = useState('idle')

  useEffect(() => {
        fetchPosts().then(data => {
                setPosts(data)
                setLoading(false)
        })
  }, [])

  const handleSubmit = async (e) => {
        e.preventDefault()
        setSubStatus('loading')
        try {
                await new Promise(resolve => setTimeout(resolve, 1000))
                setSubStatus('success')
                setEmail('')
                setTimeout(() => setSubStatus('idle'), 3000)
        } catch (error) {
                setSubStatus('error')
        }
  }

  if (loading) return <div className="text-center py-12">Loading posts...</div>

  if (!posts || posts.length === 0) {
        return (
                <div>
                  <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-blue-900">📝 No posts yet. Configure NEXT_PUBLIC_SUBSTACK_RSS_URL</p>
          </div>
            <EmailSignup email={email} setEmail={setEmail} status={subStatus} onSubmit={handleSubmit} />
          </div>
        )
  }

  return (
        <div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
          <div className="space-y-8">
  {posts.map((post, index) => (
                <article key={index} className="pb-8 border-b border-gray-200 last:border-b-0">
                  <h3 className="text-xl font-bold mb-2">
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
{post.title}
  </a>
  </h3>
              <p className="text-sm text-gray-500 mb-3">
{new Date(post.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
</p>
              <p className="text-gray-700 line-clamp-3">
{post.description?.replace(/<[^>]*>/g, '')}
</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 hover:underline">
                  Read more →
  </a>
  </article>
          ))}
            </div>
            </div>
      <EmailSignup email={email} setEmail={setEmail} status={subStatus} onSubmit={handleSubmit} />
            </div>
  )
}

function EmailSignup({ email, setEmail, status, onSubmit }) {
    return (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Subscribe for updates</h3>
        <form onSubmit={onSubmit} className="flex gap-2">
              <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
          />
                      <button
            type="submit"
            disabled={status === 'loading'}
                        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:bg-gray-400"
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Subscribe'}
              </button>
              </form>
  {status === 'success' && <p className="text-green-600 mt-2">Thanks for subscribing!</p>}
    </div>
     )
  }
