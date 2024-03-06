import Link from "next/link";
import { Oleo_Script_700 } from "../layout";
import Navbar from "./Navbar";
import Container from "./Container";

export const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 py-4 lg:py-6">
    <Navbar />
  </header>
);

export default Header;
