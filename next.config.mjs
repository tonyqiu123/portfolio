import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
          onVisitLine(node) {
            // empty lines need something so they still show up
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word"];
          },
        },
      ],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };

export default withMDX(nextConfig);
