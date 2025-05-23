import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`URL lists`}
      </p>
      <p className="mb-4">
        <a href="https://scholar.google.com/">Google Scholar</a>
        <a href="https://indexes.nikkei.co.jp/nkave">日経平均</a>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
