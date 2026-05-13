import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <div className="page-kicker">404</div>
        <h1 className="page-title">This page slipped out of the layout.</h1>
        <p className="lede" style={{ marginLeft: "auto", marginRight: "auto" }}>
          The page you are looking for does not exist or has moved.
        </p>
        <div className="button-row" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn-primary">
            <ArrowLeft size={17} /> Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
