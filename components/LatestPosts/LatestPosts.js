import Link from "next/link";
import Container from "../ui/Container";

const LatestPosts = () => (
  <section>
    <h1 className="text-3xl font-bold mb-3">Son Yazılar</h1>
    <ul>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-iletisim"
        >
          Maximumbahis İletişim
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-yorumlari"
        >
          Maximumbahis Yorumları
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-yatirim-bonuslari"
        >
          Maximumbahis Yatırım Bonusları
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-uygulama"
        >
          Maximumbahis Uygulama
        </Link>
      </li>
      {/* <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-sorunsuz-giris"
        >
          Maximumbahis Sorunsuz Giriş
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-son-giris"
        >
          Maximumbahis Son Giriş
        </Link>
      </li> */}
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-para-yatirma"
        >
          Maximumbahis Para Yatırma
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-para-cekme"
        >
          Maximumbahis Para Çekme
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-kayip-bonuslari"
        >
          Maximumbahis Kayıp Bonusları
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-hesap-silme"
        >
          Maximumbahis Hesap Silme
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-guvenilir-mi"
        >
          Maximumbahis Güvenilir mi?
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-casino"
        >
          Maximumbahis Casino
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-canli-destek"
        >
          Maximumbahis Canlı Destek
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-canli-casino"
        >
          Maximumbahis Canlı Casino
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:text-primary-darker"
          href="/maximumbahis-bonuslari"
        >
          Maximumbahis Bonusları
        </Link>
      </li>
    </ul>
  </section>
);

export default LatestPosts;
