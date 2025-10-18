// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `pillars/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    // must start with /blog/...
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    pillar: { type: "string", required: true },
    schema_type: { type: "string", required: true },
    // FAQPage | HowTo
    noindex: { type: "boolean", default: false }
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => doc.slug }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  remark: { plugins: [remarkGfm] },
  rehype: { plugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]] }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KSGF5H74.mjs.map
