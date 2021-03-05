import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { Feed } from 'feed'

const DOMAIN = 'https://thientran.me'

async function run() {
  const markdown = MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
  const files = await fg('pages/posts/*.md')

  const posts: any[] = (
    await Promise.all(
      files.filter(i => !i.includes('index'))
        .map(async(i) => {
          const raw = await fs.readFile(i, 'utf-8')
          const { data, content } = matter(raw)

          if (data.lang !== 'en')
            return

          const html = markdown.render(content)
            .replace('src="/', `src="${DOMAIN}/`)

          if (data.image?.startsWith('/'))
            data.image = DOMAIN + data.image

          return {
            ...data,
            content: html,
            author: [
              {
                name: 'Thien Tran',
                email: 'hi@thientran.me',
                link: DOMAIN,
              },
            ],
          }
        }),
    ))
    .filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  const feed = new Feed({
    title: 'Anthony Fu',
    description: 'Blog of Anthony Fu',
    id: 'https://thientran.me/',
    link: 'https://thientran.me/',
    image: 'https://thientran.me/avatar.png',
    favicon: 'https://thientran.me/logo.png',
    copyright: 'CC BY-NC 4.0 2021 © Thien Tran',
    feedLinks: {
      json: 'https://thientran.me/feed.json',
      atom: 'https://thientran.me/feed.atom',
      rss: 'https://thientran.me/feed.xml',
    },
    author: {
      name: 'Anthony Fu',
      email: 'hi@thientran.me',
      link: 'https://thientran.me',
    },
  })

  posts.forEach(i => feed.addItem(i))

  await fs.writeFile('./dist/feed.xml', feed.rss2(), 'utf-8')
  await fs.writeFile('./dist/feed.atom', feed.atom1(), 'utf-8')
  await fs.writeFile('./dist/feed.json', feed.json1(), 'utf-8')
}

run()
