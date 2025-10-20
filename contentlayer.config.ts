import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: false },
    pillar: { type: "string", required: false },
    schema_type: { type: "string", required: false },
    noindex: { type: "boolean", required: false }
  }
}))

export default makeSource({
  contentDirPath: "content",
  contentDirExclude: ["manifest.json"],
  documentTypes: [Post],
  mdx: {
    // remarkPlugins: []  // removed remark-gfm (source of crashes)
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]
  }
})
