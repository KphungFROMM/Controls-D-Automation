import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="site-wrap max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl">Page not found</h1>
        <p className="lede mx-auto mt-4">
          The page you requested is not available. Head back to the home page or contact us for help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
