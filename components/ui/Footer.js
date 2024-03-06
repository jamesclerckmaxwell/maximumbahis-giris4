import Link from "next/link";
import Container from "./Container";

const Footer = () => (
  <footer className="my-4">
    <Container>
      <p className="text-gray-600">
        © {new Date().getFullYear()}{" "}
        <Link
          target="_blank"
          href={"https://maximumbahis300.com/tr/"}
          className="text-black"
        >
          maximumbahis
        </Link>
        &nbsp; Tüm hakları saklıdır.
      </p>
    </Container>
  </footer>
);

export default Footer;
