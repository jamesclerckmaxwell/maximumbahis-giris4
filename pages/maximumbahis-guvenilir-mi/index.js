import Button from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const MaximumbahisGuvenilirMiPage = ({ data }) => (
  <>
    <Head>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <title>Maximumbahis Güvenilir Mi? | Maximumbahis</title>
    </Head>

    <section className="mb-8">
      <h1 className="text-3xl font-bold mb-3">Maximumbahis Güvenilir mi?</h1>
      <p>
        Curaçao Bahis Komisyonu tarafından lisanslandırılan bet sitelerinin her
        zaman daha güvenli adresler olduğunu söylemek istiyoruz. Maximumbahis
        Güvenilir mi? Casino sitesi de Curaçao Bahis Komisyonunun verdiği
        lisansa göre hizmet vermektedir. Lisanslı bet sitesinin 8048/JAZ lisans
        numarasını kullanmakta olduğunu görmekteyiz. Bu lisans numarası
        üzerinden Türkiye’de hizmet vermektedir. Ancak Türkiye’deki giriş adresi
        ise BTK tarafından kapatılıyor. BTK kurumunun engellemeleri sebebi ile
        de giriş adresi değiştiriliyor.
      </p>
      <br />
      <p>
        Maximumbahis Güvenilir mi? Sorusunu yanıtlarken adres değişiminin
        sorunsuz şekilde değiştiğini belirtmek gerekiyor. Herhangi bir veri
        kaybı ve kesinti yaşamadan adres değişiyor. Bu durumda ne kadar güvenli
        bahis sitesi olduğunu kanıtlar niteliktedir..
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
        Maximumbahis Üye Olmak Güvenilir mi?
      </h1>
      <p>
        Güvenli bahis sitelerine üye olunması her zaman daha kazançlı olacaktır.
        Hem para yatırırken, hem bahis oynarken hem de para çekerken sorun
        yaşamazsınız. Maximumbahis güvenilir mi? En güvenli bahis siteleri
        arasında diyebiliriz. Üye olmakta aynı şekilde güvenlidir. Diğer bet
        siteleri tarafından üyelik bilgileri satılıyor. Hesap açarken vermiş
        olduğunuz kişisel bilgiler başka kişilere veriliyor. Maximumbahis üyelik
        açma işlemlerinde herhangi bir endişe duymanız gerekmez. Aksine
        üyeliğinizi güvenli şekilde açabilirsiniz. Şirkete kayıt olmak açısından
        bir problem bulunmuyor.
      </p>
      <br />
      <p>
        Casino sitesine üye olurken T.C kimlik numaranız, adresiniz, doğum
        tarihiniz, cep telefonu numaranız vb. bilgileriniz isteniyor. Bahsetmiş
        olduğumuz bilgileriniz şifreleniyor. Bu bilgilerin başka bir kişi
        tarafından öğrenilmesi mümkün değildir. Bunun için de güvenli şekilde
        hesap açabilirsiniz. Güvenli casino sitesi olduğundan üye olmak
        açısından bir endişeniz olmasın.
      </p>
      <br />

      <p>
        Poker sitesine sadece 1 defa üye olmanız gerektiğinizi unutmamalısınız.
        Ekstra hesap açılması halinde üyeliğiniz silinebilecektir. Bunun için de
        kayıt olduktan sonra bir daha hesap açmayınız. Giriş adresi değiştiğinde
        de yeni giriş adresine mevcut üyelik bilgilerinizden girmelisiniz.
        Kullanıcı adı ve şifre bilgileri kullanılarak üyelik girişi
        yapılacaktır.
      </p>
      <br />
      <Link href={"https://www.maximumbahis300.com/tr/"} target="_blank">
        <Image
          src={"/maximumbahis_footer.png"}
          width={1920}
          height={1080}
          className="rounded"
          alt="Maximum Bahis Web Page"
        />
      </Link>
    </section>

    <section className="mb-20">
      <h1 className="text-3xl font-bold mb-3">
        Maximumbahis Ödeme Yapıyor mu?
      </h1>
      <p>
        Bir bet sitesini en güvenli gösterecek unsurların başında sorunsuz para
        çekilebilmesi geliyor. Maximumbahis güvenilir mi? Banka Havalesi,
        Papara, Bitcoin vb. yöntemler üzerinden hızlı şekilde para
        çekebiliyorsunuz. Sorunsuz para çekilen bahis siteleri arasında
        bulunuyor. Bahisçilerin belirtilen para çekme yöntemlerini kullanıp
        ödemelerini kısa süre içerisinde hesaplarına transfer ettiklerini tespit
        ettik.
      </p>
      <br />
      <p>
        Para çekme işlemelerinde birtakım kontroller yapıldığını da es geçmemek
        istiyoruz. Ödemeler belirtildiği şekilde kurallara uygun şekilde
        yapılıyor. Siz de belirtilen kurallara göre hareket ederek ödemelerinizi
        alabilirsiniz. Bet sitesinde ödeme sorunları bulunmuyor. Sadece mevcut
        para çekme kurallarına uygun hareket etmeniz isteniyor.
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

export default MaximumbahisGuvenilirMiPage;
