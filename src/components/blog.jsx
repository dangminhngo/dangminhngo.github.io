import { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://blog-dangminhngo.vercel.app/api/blog')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 4))
      })
  }, [])

  return (
    <section
      id="blog"
      className="container mt-32 flex scroll-mt-24 flex-col items-stretch justify-center gap-16 sm:mt-64 sm:scroll-mt-4"
    >
      <h3 className="text-md uppercase text-violet-400 sm:text-lg md:text-xl">
        Chaos is a ladder, but knowledge is power.
      </h3>
      <div className="flex flex-col divide-y-2 divide-primary-800">
        {posts.map((post) => (
          <article key={post.slug} className="py-8">
            <time dateTime={post.date} className="text-primary-500">
              {format(parseISO(post.date), 'LLL MM, yyyy')}
            </time>
            <a
              href={`https://blog-dangminhngo.vercel.app${post.slug}`}
              target="_blank"
              rel="noreferrer"
              className="block text-md delay-100 duration-300 hover:text-sky-300 hover:underline sm:text-lg md:text-xl"
            >
              {post.title}
            </a>
            <p className="text-primary-300">{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
