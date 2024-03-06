import Button from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const MaximumbahisParaCekmePage = ({ data }) => (
  <>
    <Head>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <title>Maximumbahis Para Çekme | Maximumbahis</title>
    </Head>

    <section className="mb-8">
      <h1 className="text-3xl font-bold mb-3">Maximumbahis Para Çekme</h1>
      <p>
        Maximumbahis bahis sitesi ile gerçek bahis deneyimini yaşayabilecek ve
        kazançlarınızı üst noktalara çıkartabileceksiniz. Şirketin
        kullanıcılarının tek yapmaları gereken ise para çekme yöntemlerini
        kullanmaktır. Spor bahisleri, canlı bahisleri, canlı casino, casino,
        sanal bahisleri vb. bahis metotlarını değerlendirip ciddi kazanç elde
        edebilirsiniz. Daha sonra da bu kazançlarınızı para çekme yöntemlerini
        kullanarak hesabınıza gönderirsiniz. Maximumbahis para çekme
        işlemlerinde hiçbir problem bulunmuyor. Aksine para çekme işlemlerine
        yönelik ciddi kolaylıklar sağlandığını söylemek istiyoruz.
        Kullanıcıların aşağıdaki para çekme yöntemleri ve limitleri üzerinden
        çekim yapmaları mümkündür..
      </p>
    </section>

    <section className="mb-20">
      <Link
        href={"https://www.maximumbahis300.com/tr/"}
        target="_blank"
        className="block text-center"
      >
        <Button type={"button"} variant={"primary"}>
          Siteye Giriş İçin Tıkla
        </Button>
      </Link>
    </section>

    <section className="mb-20">
      <h1 className="text-3xl font-bold mb-3">
        Maximumbahis Para Çekme Yöntemleri ve Limitleri
      </h1>
      <p>
        Bahis sitelerinin belirlemiş oldukları para çekme yöntemlerini kullanmak
        zorundasınız. Güncel yöntemler ve limitler aşağıda yer almaktadır.
      </p>
      <br />
      <ul className="list-disc ps-6">
        <li>
          Banka Havalesi ile para çekme: En az 100 TL para çekme talebi
          vermelisiniz.
        </li>
        <li>
          Payfix ile para çekme: Minimum 100 TL para çekme talebi vermelisiniz.
        </li>
        <li>
          Paycell ile para çekme: En düşük 100 TL para çekme talebi
          vermelisiniz.
        </li>
        <li>
          PeP ile para çekme: En az 100 TL para çekme talebi vermelisiniz.
        </li>
        <li>
          Papara ile para çekme: En minimum 100 TL para çekme talebi
          vermelisiniz.
        </li>
        <li>
          Cepbank ile para çekme: En düşük 100 TL para çekme yapılabilecektir.
        </li>
        <li>
          FixTurka ile para çekme: En az 100 TL para çekme talebine izin
          veriliyor.
        </li>
      </ul>
      <br />
      <p>
        Yukarıdaki para çekme yöntemleri ve limitleri üzerinden çekimler
        tamamlanıyor. Para çekme yöntemleri değişmekte oluyor. Kullanılabilen
        para çekme yöntemleri değişebiliyor. Yeni para çekme yöntemi
        eklendiğinde sitemizden haberdar sağlıyoruz. Maximumbahis para çekme
        yöntemleri değişince telefonunuza da mesaj atılıyor. Para çekme limiti
        de değişebilecektir. Yani para çekme yöntemleri ve limitleri
        değiştiğinde sorun yaşamazsınız.
      </p>
      <br />
      <Link href={"https://maximumbahis300.com/tr/"} target="_blank">
        <Image
          src={"/maximumbahis_slot.png"}
          width={1920}
          height={1080}
          className="rounded"
          alt="Maximumbahis Web Page"
        />
      </Link>
    </section>

    <section className="mb-20">
      <Link
        href={"https://www.maximumbahis300.com/tr/"}
        target="_blank"
        className="block text-center"
      >
        <Button type={"button"} variant={"primary"}>
          Siteye Giriş İçin Tıkla
        </Button>
      </Link>
    </section>

    <section className="mb-20">
      <h1 className="text-3xl font-bold mb-3">
        Maximumbahis Banka Havalesi ile Para Çekme
      </h1>
      <p>
        Banka Havalesi ile para çekme yöntemi en çok kullanılan yöntemler
        arasındadır. Maximumbahis Havale ile çekim için 100 TL limit uygundur.
        Diğer sitelerde Havale üzerinden bu kadar düşük çekim yapamazsınız.
        Maximumbahis oyunculara her zaman kolaylık sağlıyor. Sizler de
        belirtilen para çekme yöntemlerini ve limitlerini kullanıp çekim
        yaparsınız.
      </p>
      <br />
      <p>
        Banka Havalesinden para çekmek adına Garanti Bankası, Ziraat Bankası,
        Vakıf Bankası vb. birçok bankayı kullanabilirsiniz. Her bir bankanın
        farklı işlevleri vardır. Bahse konu bankalara göre limitler
        değişebiliyor. Müşteri hizmetlerine bağlanıp güncel banka limitlerini de
        sorabilirsiniz. Size 1-2 dakika içerisinde dönüş yapılarak güncel
        yöntemler ve limitler hakkında da bilgi verilecektir.
      </p>
      <br />
    </section>

    <section>
      <Link
        href={"https://www.maximumbahis300.com/tr/"}
        target="_blank"
        className="block text-center"
      >
        <Button type={"button"} variant={"primary"}>
          Siteye Giriş İçin Tıkla
        </Button>
      </Link>
    </section>
  </>
);

export async function getServerSideProps() {
  const response = await fetch(
    "https://maximumbahis-giris.vercel.app/api/hello"
  );

  const data = await response.json();

  return {
    props: { data },
  };
}

export default MaximumbahisParaCekmePage;
