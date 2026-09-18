import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow"><span className="status-dot" /> 404 / Not found</p>
      <h1>This page wandered off.</h1>
      <p>The link does not point to a page in Atharv&apos;s portfolio.</p>
      <Link className="button button-dark" href="#top">Back to the portfolio <span>↗</span></Link>
    </main>
  );
}
