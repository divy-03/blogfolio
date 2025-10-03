import { MDXComponents } from "../components/MDXComponents";
import Introduction from "./introduction.mdx";

export default function DocsPage() {
  return <Introduction components={MDXComponents} />;
}
