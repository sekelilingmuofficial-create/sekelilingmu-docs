import CopyButton from "./CopyButton";

export default function CodeBlock() {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex justify-between p-2 border-b">
        <span>bash</span>

        <CopyButton />
      </div>

      <pre className="p-4">
        <code>flutter doctor</code>
      </pre>
    </div>
  );
}