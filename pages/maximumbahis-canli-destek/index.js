import Button from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const MaximumbahisCanliDesktekPage = ({ data }) => (
  <>
    <Head>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <title>Maximumbahis Canlı Destek | Maximumbahis</title>
    </Head>

    <section className="mb-8">
      <h1 className="text-3xl font-bold mb-3">Maximumbahis Canlı Destek</h1>
      <p>
        Kaçak bahis sitesi hakkında yaptığımız incelemeler sonucunda canlı
        destek hattına bağlanmanın son derece avantajlı olduğunu tespit ettik.
        Maximumbahis canlı destek hattının kısa süre içerisinde geri dönüş
        sağladığını belirtelim. Sağ alt kısımdan “Destek” butonuna tıklanarak
        müşteri hizmetleri ile görüşmeye başlayabiliyorsunuz. Canlı destek
        hattına bağlanmak için adınız, soyadınız, kullanıcı adınız ve mail
        adresiniz isteniyor. Bu bilgiler doğru doldurulunca da görüşmelere
        başlarsınız. Maximumbahis canlı destek hattına bağlanınca aklınızdaki
        tüm soruları sorabilirsiniz. Sizlere birkaç dakika içerisinde geri dönüş
        sağlanarak yardımcı olunacaktır. Bu kapsamda müşteri hizmetlerinin son
        derece yardım sever olduğundan söz etmek istiyoruz.
      </p>
      <br />
      <p>
        Maximumbahis canlı destek hattına nasıl bağlanırım? Güncel giriş
        adresine girmeniz ve sağ alt kısımdaki butondan bağlantı oluşturmanız
        yeterlidir.
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
        Maximumbahis Canlı Destek Yardım Ediyor mu?
      </h1>
      <p>
        TR’deki bahis sitelerinin canlı destek departmanlarını incelediğimiz
        zaman her departmanın yardım sever olmadığını tespit ettik. Maximumbahis
        hattının aklınıza gelebilecek her türlü konu ve işlem için destek
        sağlamakta olduğundan bahsetmek isteriz. Şirketin canlı destek hattına
        belirtilen bilgiler üzerinden doğru şekilde bağlanabilirsiniz.
      </p>
      <br />
      <p>
        Maximumbahis giriş adresi üzerinden bağlanınca para yatırma, para çekme
        ve bonuslar hakkında sorularınızı iletmenizi öneriyoruz. Bu sorular için
        yardımcı olunacaktır. Affiliate, reklam ve kampanyalar vb. konular ise
        diğer departmanlar üzerinden işlemektedir. Aynı zamanda belge kontrolünü
        da mail adresinden tamamlarsınız. Bahsetmiş olduğumuz konulara ilişkin
        canlı destek hattının kısa süre içerisinde geri dönüş sağlamakta
        olduğundan söz etmek doğru olacaktır.
      </p>
    </section>

    <section className="mb-20">
      <h1 className="text-3xl font-bold mb-3">
        Maximumbahis Canlı Destek Kuralları
      </h1>
      <p>
        Maximumbahis kaçak bahis sitesine kayıt olurken birtakım kuralları kabul
        edersiniz. Bu kuralları kabul ettikten sonra kuralları ihmal etmeden
        bahis oynamanız ve para çekmeniz gerekecektir. Bununla birlikte
        belirtilen kurallar içerisinde iletişim kuralları da vardır.
        Maximumbahis hattına bağlandığınız zaman herhangi bir küfür, argo ve
        hakaret içeren kelime kullanmaktan kaçınmalısınız. Bahse konu ihmallerin
        sonuçları da ağır oluyor. Online bahis sitesinin canlı destek hattına
        bağlanıp küfür eden oyuncuların hesaplarının silindiklerini tespit
        ettik. Bu hesap silme işlemleri sonucunda bakiyeniz, bonuslarınız,
        ödemeleriniz ve bütün işlemleriniz de iptal edilmiş oluyor.
      </p>
      <br />
      <p>
        Casino sitesinin canlı destek hattı tarafından her türlü konuya ilişkin
        geri dönüş yapılıyor. Kullanıcıların soru, sorun ve önerileri
        dinleniyor. Siz de belirtildiği şekilde işlemlerinizi tamamlamak ister
        misiniz? Para yatırma ve diğer konularda canlı destek hattına soru
        sorabilir ve sorunsuz işlemlerinizi tamamlayabilirsiniz.
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

export default MaximumbahisCanliDesktekPage;
