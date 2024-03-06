import { Lato, Oleo_Script } from "next/font/google";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LatestPosts from "./LatestPosts/LatestPosts";
import Container from "./ui/Container";

export const Lato_400 = Lato({ subsets: ["latin"], weight: "400" });
export const Lato_700 = Lato({ subsets: ["latin"], weight: "700" });
export const Lato_900 = Lato({ subsets: ["latin"], weight: "900" });

export const Oleo_Script_700 = Oleo_Script({
  subsets: ["latin"],
  weight: "700",
});

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={`my-16 ${Lato_400.className}`}>
        <Container>
          <section className="mb-20">{children}</section>
          <section>
            <LatestPosts />
          </section>
        </Container>
      </main>
      <hr />
      <Footer />
    </>
  );
}
