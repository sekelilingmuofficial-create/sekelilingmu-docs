import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Article() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/flutter">
              Flutter
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>
              Install
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1>Install Flutter</h1>

      <h2>Download Flutter</h2>
      <p>Download Flutter SDK dari website resmi.</p>

      <h2>Extract Flutter</h2>
      <p>Extract ke folder C:\Flutter.</p>

      <h2>Add PATH</h2>
      <p>Tambahkan Flutter ke Environment Variables.</p>

      <h2>Verify</h2>
      <p>Jalankan flutter doctor.</p>
    </article>
  );
}