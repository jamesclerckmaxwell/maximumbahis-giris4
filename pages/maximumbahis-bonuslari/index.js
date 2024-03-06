import Button from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const MaximumbahisBonuslariPage = ({ data }) => (
  <>
    <Head>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <title>Maximumbahis Bonuslar | Maximumbahis</title>
    </Head>

    <section className="mb-8">
      <h1 className="text-3xl font-bold mb-3">Maximumbahis Bonusları</h1>
      <p>
        Online casino siteleri tarafından bonuslar verilerek oyuncuların kazanma
        şanslarının üst noktalara çıkması sağlanıyor. Maximumbahis bonusları da
        son derece dikkat çekici bonuslar olarak dikkat çekiyor. Kullanıcıların
        alabilecekleri özel bonuslar bulunduğu gözlemleniyor. Siz kullanıcılar
        da verilen bonusları alıp kazançlarınızı üst noktalara
        çıkartabilirsiniz. Güncel bonuslar nelerdir? Maximumbahis bonusları
        aşağıda bulunuyor.
      </p>
      <br />
      <ul className="list-disc ps-6">
        <li>%100 Spor Bahisleri Özel Hoş geldin Bonusu</li>
        <li>%100 Casino Bahisleri Özel Hoş geldin Bonusu</li>
        <li>%30 Kripto Özel Bonusu</li>
        <li>Arkadaşını Getir Özel Bonusu</li>
        <li>%20 Canlı Casino Özel Yatırım Bonusu</li>
        <li>%20 Çevrimsiz Özel Yatırım Bonusu</li>
        <li>%10 Çevrimsiz Özel Bonus + 20 Free Spin</li>
      </ul>
      <br />
      <p>
        Yukarıda bulunan bonuslar dikkate alındığında bonusların her birinin
        özel şartları olduğunun da altını çizmek istiyoruz. En çok tercih edilen
        2 bonus hakkında bilmeniz gerekenleri ise açıklayacağız..
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
        Maximumbahis %100 Spor Bahisleri Özel Hoş geldin Promosyonu
      </h1>
      <p>
        Bu bonusu alabilmek adına en az 100 TL yatırım yapmalısınız.
        Maximumbahis hoş geldin promosyonu spor bonusları içerisinde en çok
        tercih edilen bonuslar arasında bulunuyor. Bonusun çekilebilir duruma
        gelmesi adına bonus + yatırım tutarının 5 katı kadar spor bahislerinde
        tekli kuponlarda en az 2.00 orandan ve kombine bahislerde ise her maçın
        oranı en az 1.55 olacak şekilde çevrim yapmalısınız.
      </p>
      <br />
      <ul className="list-disc ps-6">
        <li>
          Spor Bahislerine özel bonusun 5 katı kadar spor bahislerinde tekli
          kuponlarda en az 2.00 orandan ve kombine kuponlarda ise her maçın
          oranı en az 1.55 olacak şekilde çevrim isteniyor.
        </li>
        <li>
          Bu bonus ile yatırımınızın 30 katı kadar kazanç sağlanabilecektir.
        </li>
        <li>E-Spor, sanal spor ve masa tenisi çevrime dahil edilmez.</li>
      </ul>
      <br />
      <Link href={"https://www.maximumbahis300.com/tr/promotions/all"}>
        <Image
          src={"/maximumbahis_promasyonlar.png"}
          width={1920}
          height={1080}
          className="rounded"
          alt="Maximumbahis Promasyonlar"
        />
      </Link>
    </section>

    <section className="mb-20">
      <h1 className="text-3xl font-bold mb-3">
        Maximumbahis %100 Casino Bahisleri Özel Hoş geldin Promosyonu
      </h1>
      <p>
        Casino bahisleri oynamak ister misiniz? Maximumbahis %100 Casino Hoş
        geldin Bonusunu alıp değerlendirebilirsiniz. En çok tercih edilen casino
        bonusları içerisindedir. Maksimum 1.000 TL tutarına kadar bonusu
        alabileceksiniz. En az da 100 TL yatırım yapıp talep edebilirsiniz.
        Bonusu almak için yatırımın ardından canlı destek hattına bağlanıp talep
        oluşturmalısınız. Bonusa ilişkin bilmeniz gereken diğer detaylar ise
        aşağıdadır.
      </p>
      <br />
      <ul className="list-disc ps-6">
        <li>
          Maximumbahis bonusları içerisinde en çok ilgi gören bu bonusun 1 katı
          kadar canlı casino bölümünde çevrimi isteniyor.
        </li>
        <li>
          Çevrimin tamamlanması adına bahislerin en az 1 TL olması isteniyor.
        </li>
        <li>Aldığınız bonus çekim işleminde hesabınızdan düşüyor.</li>
        <li>
          Promosyonun güncel bonus kurallarının dışına çıkmamalısınız. Bonus
          ihmali sonucunda hesabınız kapatılacaktır.
        </li>
        <li>
          Casino Bahisleri Özel Bonusu sadece ilk para yatırma işleminiz için
          alırsınız. Bonusu kullanınca bir daha alma hakkınız yoktur.
        </li>
      </ul>
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

export default MaximumbahisBonuslariPage;
