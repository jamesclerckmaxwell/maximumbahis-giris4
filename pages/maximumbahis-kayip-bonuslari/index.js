import Button from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const MaximumbahisKayipBonuslariPage = ({ data }) => (
  <>
    <Head>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <title>Maximumbahis Kayıp Bonusları | Maximumbahis</title>
    </Head>

    <section className="mb-8">
      <h1 className="text-3xl font-bold mb-3">Maximumbahis Kayıp Bonusları</h1>
      <p>
        Bahis sitesinin bonusları hakkında konuşmuşken kayıp bonusları hakkında
        da bilgi vermek doğru olacaktır. Maximumbahis bahis sitesi tarafından
        verilen kayıp bonusları son derece avantajlıdır. Kullanıcıların güncel
        giriş adresine girip para yatırdıktan sonra bahis oynadıklarını
        belirtmiştik. Daha sonra bahislerde oluşan kayıplarınızı telafi etmek
        için kayıp bonusu alabileceksiniz. Maximumbahis kayıp bonusları nedir?
        Bu bonuslar nasıl alınır? Maximumbahis kayıp bonusları için de canlı
        destek hattına bağlanmanız isteniyor. Kayıplar yaşandıktan sonra
        hesabınızda bakiye sıfırlanmalıdır. Daha sonra canlı destek hattından
        bonusu alabilirsiniz. Ancak bonusu talep etmeden para yatırır veya bahis
        oynarsanız bonusu alamazsınız. Bunun için de bonusu alma kurallarına
        göre hareket etmeniz gerektiğinizi de unutmadan hatırlatalım..
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
        Maximumbahis Kayıp Bonusları Nelerdir?
      </h1>
      <p>
        Son BTK engellemesinin ardından verilen kayıp bonuslarını araştırdık.
        Maximumbahis giriş adresleri güncellenmiş olup aşağıdaki bonusları yeni
        link üzerinden alabileceksiniz.
      </p>
      <br />
      <ul className="list-disc ps-6">
        <li>%30 Casino Discount Promosyonu</li>
        <li>%20 Spor Kayıp Discount Promosyonu</li>
      </ul>
      <br />
      <p>
        Bu iki discount promosyonu için belirlenen şartların dışına
        çıkmamalısınız. Aksi takdirde promosyon şartlarının dışına çıkmanız
        sebebi ile bonus iptal edilecektir.
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
        Maximumbahis %30 Casino Discount Promosyonu
      </h1>
      <p>
        Bu bonusun çevrimsiz olarak verildiği belirtilmiştir. Maximumbahis %30
        Casino Discount Promosyonunu canlı destek hattından alırsınız.
        Maximumbahis içerisinde en çok alınan bonus türüdür. Bonus tutarının 1
        katı kadar bahis aldıktan sonra çekim yapmanıza izin veriliyor. Son
        olarak 24 saat içerisindeki herhangi bir bonus almamanız halinde
        yatırımlarınızın kaybı çekimlerinizden en az 100 TL Tutarında daha fazla
        olması halinde fark üzerinden ilgili kayıp bonusu oranında bonus
        alırsınız.
      </p>
      <br />
      <ul className="list-disc ps-6">
        <li>
          100 TL – 500 TL arasındaki kayıplara %15 oranında kayıp bonusu
          veriliyor.
        </li>
        <li>
          501 TL – 5000 TL arasındaki kayıplara %20 oranında kayıp bonusu
          veriliyor.
        </li>
        <li>
          5001 TL üzerindeki kayıp bonusu oranı ise %25 oran olarak karşımıza
          çıkıyor.
        </li>
      </ul>
      <br />
      <p>
        Bu bonus oranları değişmiş olduğunda açıklamalar yapılacaktır.
        Kullanıcıların kayıp bonusu oranlarına ilişkin bilgilendirmeleri takip
        etmelerini öneriyoruz.
      </p>
      <br />
      <p>
        Maximumbahis Spor Kayıp Bonusu da kayıp bonusları arasındadır.
        Maximumbahis bölümünden bonusun özelliklerine baktık. Casino Kayıp
        Bonusu ile arasında bir fark bulunmuyor. Aynı şekilde spor bahisleri
        bölümünde bonus kullanılıyor. Bu bonusun şartları değişmiş olduğunda
        bonusun kuralları hakkında da bilgilendirmeler yapılacaktır. Sitemizi
        takip ederek bonusun kurallarını ve şartlarını takip edebilirsiniz.
        Casino Discount Promosyonu olarak verilen bonusun temel şartları
        açıktır. Yeni bir kayıp bonusu eklenince anında duyurusu olur.
      </p>
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

export default MaximumbahisKayipBonuslariPage;
