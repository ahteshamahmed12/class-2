import Image from "next/image";
import Navbar from "./component/Navbar";
import Link from "next/link";
import contactno from "./contactno/page";

export default function Home() {
  return (
  <div>
    <title>my hotel website</title>
<h1>HOTEL MENU </h1>
<Navbar></Navbar>

<Link href="about/">about link</Link>
<br />

<Link href="contactno/">contactno link</Link>

</div>
  
  );
}
