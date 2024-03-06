import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./Container";
import { Oleo_Script_700 } from "../layout";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Brand from "./Brand";
import Offcanvas from "./Offcanvas";
import { useState } from "react";
import Footer from "./Footer";

const LINKS = [
  {
    href: "/",
    text: "Maximum Bahis",
  },
  {
    href: "/uyelik",
    text: "Maximum Bahis Üyelik",
  },
  {
    href: "/maximumbahis-casino",
    text: "Maximumbahis Casino",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [offcanvas, setOffcanvas] = useState(false);

  const handleOffcanvas = () => setOffcanvas(!offcanvas);

  const { pathname } = router;

  return (
    <>
      <nav>
        <Container className={"flex items-center"}>
          <section>
            <Brand />
          </section>
          <ul className="flex items-center ms-auto gap-6">
            {LINKS.map((link) => (
              <li className="hidden lg:block" key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "font-semibold text-primary hover:text-primary-darker transition-all"
                      : "font-semibold text-gray-500 hover:text-primary transition-all"
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="block lg:hidden">
              <Button type={"button"} onClick={handleOffcanvas}>
                <FontAwesomeIcon
                  icon={faBars}
                  size="lg"
                  className="text-primary"
                />
              </Button>
            </li>
          </ul>
        </Container>
      </nav>
      <Offcanvas show={offcanvas} handleOffcanvas={handleOffcanvas}>
        <Offcanvas.Header handleOffcanvas={handleOffcanvas}></Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {LINKS.map((link) => (
              <li className="border-b py-4 last:border-0" key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "font-semibold text-primary hover:text-primary-darker transition-all"
                      : "font-semibold text-gray-500 hover:text-dark transition-all"
                  }`}
                  onClick={handleOffcanvas}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
        <Offcanvas.Footer>
          <Footer />
        </Offcanvas.Footer>
      </Offcanvas>
    </>
  );
};

export default Navbar;
