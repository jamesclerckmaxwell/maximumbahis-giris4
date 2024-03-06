// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const DESCRIPTION =
    "Maximumbahis, Maximum bahis geniş bahis seçenekleri, yüksek oranlar ve güvenilir ödeme yöntemleri ile online bahis ve casino oyunları sunan bir platformdur. Üye olun ve cazip bonuslarla kazanmaya başlayın.";

  const KEYWORDS = [
    "maximum bahis giris",
    "maximum bahis giriş",
    "maximumbahis giris",
    "maximumbahis",
    "maximum bahis",
    "maximumbahis twitter",
    "maximumbet",
    "maximum bet",
    "maximum bahis oyna",
    "maximumbahis oyna",
    "maximum bet oyna",
    "maximumbet oyna",
    "bahis oyna",
    "bet oyna",
    "online bet",
    "online bahis",
    "bahisxxx",
  ];

  res.status(200).json({ description: DESCRIPTION, keywords: KEYWORDS });
}
