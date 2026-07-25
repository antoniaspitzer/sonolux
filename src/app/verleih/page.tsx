import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
    <div>
        <Link href="/vorschau">Vorschau</Link>
        <Link href="/verleih">Verleih</Link>
      </div>
    </>
  );
};