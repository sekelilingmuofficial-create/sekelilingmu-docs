import Sidebar from "@/components/Sidebar";
import Article from "@/components/Article";
import TOC from "@/components/TableOfContents";

export default function DocsPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-8">
        <Article />
      </div>

      <div className="col-span-2">
        <TOC />
      </div>
    </div>
  );
}