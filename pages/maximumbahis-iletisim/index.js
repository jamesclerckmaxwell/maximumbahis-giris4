import Button from "@/components/ui/Button";
import Head from "next/head";
import Link from "next/link";

const MaximumbahisIletisimPage = ({ data }) => (
  <>
    <Head>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <title>Maximumbahis İletişim | Maximumbahis</title>
    </Head>

    <section className="mb-20">
      <h1 className="text-3xl font-bold mb-3">Maximumbahis İletişim</h1>
      <p>
        Maximumbahis müşteri hizmetleri ile görüşebilmeniz adına destek
        departmanları üzerinden iletişim kurmalısınız. Bu iletişim
        departmanlarının her birinin işlevleri ve sorumlulukları farklıdır.
        Örnek olarak; Canlı destek hattı üzerinden para yatırma, para çekme ve
        bonuslar konularına ilişkin görüşmeler yapabilirsiniz. Diğer taraftan
        WhatsApp hattından ise acil konularla ilgili görüşme yapmanız öneriyor.
        Bir diğer seçenek ise mail adresidir. Maximumbahis iletişim
        seçeneklerinden mail adresini sadece affiliate ve belge kontrolü için
        kullanmalısınız. Şirketin para çekme taleplerinizi değerlendirip belge
        isteme hakkı vardır. Sizlerden istenilen belgelerin de mail adresinden
        gönderilmesi gerekiyor. Diğer taraftan affiliate başvuruları için de
        mail adresini kullanmalısınız..
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
        Maximumbahis İletişim Sorunları
      </h1>
      <p>
        Bahisçilerin müşteri hizmetleri ile iletişim kurarken yaşamakta olduğu
        sorunlar vardır. Kaliteli online bahis siteleri ise iletişim sorunları
        yaşanmasına izin vermez. Maximumbahis güncel adresi iletişim
        sorunlarının yaşanmaksızın müşteri desteğinin sağlandığı adresler
        arasındadır. Sizler de müşteri temsilcisine bağlanarak iletişim
        kurallarına dikkat ederek görüşmeler yapabilirsiniz. Eğer iletişim
        kurallarını ihmal ederseniz ise hesabınızın kapatılması ile
        karşılaşabilirsiniz.
      </p>
      <br />
      <p>
        Maximumbahis iletişim sorunları kapsamında yaşanabilecek birçok sorun
        vardır. Oyuncuların iletişim sorunları olarak küfür, argo ve hareket
        içeren kelimeler kullanmaları sebebiyet verir. Bu iletişim kuralları
        ihmali durumunda ciddi sorunlar yaşanır. En nihayetinde ise hesabın
        silinmesine karar verilebilecektir. Üyelik silinmesi ise kazançların,
        ödemelerin, bahislerin ve tüm işlemlerin iptal edilmesine karar
        verilecektir.
      </p>
    </section>

    <section className="mb-20">
      <h1 className="text-3xl font-bold mb-3">
        Maximumbahis Canlı Destek İletişim
      </h1>
      <p>
        Kaçak bahis siteleri üzerinden birçok fırsat değerlendirilebilir. Örnek
        olarak; Bonuslar alınıp daha çok kazanç elde edebilirsiniz. Maximumbahis
        iletişim departmanına bağlanarak bonus talep edebilirsiniz. Canlı destek
        hattından bonus talep etmeniz halinde bonus hesabınıza tanımlanacaktır.
        Daha sonra bonusu kullanabileceksiniz. Bonus çevrimi ve diğer konular
        için gerekli destek sağlanacaktır. Kuralları ihmal etmemeniz
        gerekmektedir. Aksi takdirde üyeliğinizin silinmesinden kurtulamazsınız.
      </p>
      <br />
      <p>
        Maximumbahis canlı destek iletişim kurulması en kolay seçenektir. Canlı
        destek hattına bağlanarak bütün sorularınıza yanıt bulabilirsiniz.
        Sizlere en hızlı şekilde destek sağlanacak olup sorularınızın
        cevaplarını alırsınız. Şirketin iletişim departmanı problemsiz olmakta
        olup anında da geri dönüş sağlar.
      </p>
      <br />
      <p>
        Canlı destek hattına nasıl bağlanır? Kullanıcı adı, ad, mail adresi vb.
        bilgilerinizi isterler. Bu bilgileri doldurup canlı destek bağlantısı
        oluşturulur. Sadece bonus almak için değil, para yatırma ve çekme
        konularında da destek almak adına bağlanabilirsiniz.
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

export default MaximumbahisIletisimPage;
