import Link from "next/link";

export default function Index() {
  return (
    <div
      style={{ padding: "12px", alignContent: "center", alignItems: "center" }}
    >
      <Link href="/api/info" style={{ padding: 6, margin: 2 }}>
        Get my info
      </Link>
      <hr />
      <Link href="/api/classify-number?number=90">
        Number Classification API
      </Link>
      <hr />
    </div>
  );
}
