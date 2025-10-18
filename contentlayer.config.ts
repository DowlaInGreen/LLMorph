import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `pillars/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    pillar: { type: 'string', required: true },
    schema_type: { type: 'string', required: true },
    noindex: { type: 'boolean', default: false }
  },
  computedFields: {
    url: { type: 'string', resolve: (doc) => doc.slug }
  }
}))

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    // Keep rehype only (safe)
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
  }
})
