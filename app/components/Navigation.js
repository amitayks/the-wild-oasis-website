import Link from "next/link";

export default function Navigaion() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>home</Link>
        </li>
        <li>
          <Link href='/account'>account</Link>
        </li>
        <li>
          <Link href='/cabins'>cabins</Link>
        </li>
        <li>
          <Link href='/about'>about</Link>
        </li>
      </ul>
    </nav>
  );
}
