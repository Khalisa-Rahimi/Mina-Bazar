var products = [
  {
    id: "1",
    image: "images/socks.jfif",
    name: "جوراب نخی مردانه",
    specs: "✓ بسته ۸ جفت ✓ رنگ‌بندی متنوع ✓ نخی و تنفس‌پذیر",
    rating: { stars: 4.5, count: 87 },
    priceCents: 250,
    keywords: ["جوراب", "نخی", "مردانه", "ورزشی"],
    options: [{ label: "تعداد جفت", values: ["۴", "۸", "۱۲"] }]
  },
  {
    id: "2",
    image: "images/glod.jfif",
    name: "گردنبند ها طلا",
    specs: "✓ وزن ۵ گرم ✓ خلوص ۱۸ عیار ✓ ضمانت اصالت",
    rating: { stars: 4, count: 127 },
    priceCents: 50000,
    keywords: ["طلا", "زیورآلات", "زنانه"],
    options: [
      { label: "عیار", values: ["۱۸", "۲۱", "۲۴"] },
      { label: "وزن (گرم)", values: ["۲", "۵", "۱۰"] }
    ]
  },
  {
    id: "3",
    image: "images/لباس محفلی.jpg",
    name: "لباس محفلی زنانه",
    specs: "✓ سایز متوسط ✓ پارچه کرپ ✓ طرح گل برجسته",
    rating: { stars: 4.5, count: 56 },
    priceCents: 4500,
    keywords: ["لباس", "زنانه", "محفل"],
    options: [{ label: "سایز", values: ["S", "M", "L", "XL"] }]
  },
  {
    id: "4",
    image: "images/قالین.jfif",
    name: "قالین دستباف افغانی",
    specs: "✓ طرح اصیل ولایتی ✓ ابعاد ۲۰۰×۳۰۰ ✓ نخ پشمی",
    rating: { stars: 5, count: 2197 },
    priceCents: 34500,
    keywords: ["قالین", "دستباف", "افغانی", "خانه"],
    options: [{ label: "ابعاد", values: ["۲۰۰×۳۰۰", "۲۵۰×۳۵۰", "۳۰۰×۴۰۰"] }]
  },
  {
    id: "5",
    image: "images/ظروف خانگی ۲.jfif",
    name: "ظروف خانگی",
    specs: "✓ ست ۶ نفره ✓ قابل استفاده در مایکروویو",
    rating: { stars: 4, count: 37 },
    priceCents: 2000,
    keywords: ["ظروف", "آشپزخانه", "خانگی"],
    options: [{ label: "تعداد", values: ["۶", "۱۲", "۲۴"] }]
  },
  {
    id: "6",
    image: "images/دریشی مردانه.jfif",
    name: "دریشی مردانه",
    specs: "✓ مدل جدید ✓ پارچه نخی ✓ دوخت سنتی",
    rating: { stars: 4.5, count: 175 },
    priceCents: 3500,
    keywords: ["دراع", "گند", "مردانه", "لباس افغانی"],
    options: [{ label: "سایز", values: ["S", "M", "L", "XL", "XXL"] }]
  },
  {
    id: "7",
    image: "images/توشک افغانی.jfif",
    name: "توشک افغانی",
    specs: "✓ سایز بزرگ ✓ فنر مستقل ✓ رویه نخی",
    rating: { stars: 4.5, count: 317 },
    priceCents: 2400,
    keywords: ["توشک", "خواب", "خانه"],
    options: [{ label: "سایز", values: ["۹۰×۱۹۰", "۱۲۰×۲۰۰", "۱۵۰×۲۰۰", "۱۸۰×۲۰۰"] }]
  },
  {
    id: "8",
    image: "images/زیورات الماس.jpeg",
    name: "زیورآلات الماس",
    specs: "✓ ست گردنبند و گوشواره ✓ خلوص بالا ✓ ضمانت",
    rating: { stars: 4.5, count: 144 },
    priceCents: 80000,
    keywords: ["الماس", "زیورآلات", "زنانه"],
    options: [{ label: "نوع", values: ["ست کامل", "فقط گردنبند", "فقط گوشواره"] }]
  },
  {
    id: "9",
    image: "images/فرنیچیر خانه.jfif",
    name: "فرنیچر خانگی",
    specs: "✓ ۷ قطعه ✓ چوب روسی ✓ پارچه کتان",
    rating: { stars: 4.5, count: 305 },
    priceCents: 7500,
    keywords: ["فرنیچر", "مبلمان", "خانه"],
    options: [{ label: "رنگ", values: ["کرم", "خاکستری", "قهوه‌ای"] }]
  },
  {
    id: "10",
    image: "images/پرینتر.jfif",
    name: "پرینتر لیزری رنگی",
    specs: "✓ سرعت بالا ✓ وای‌فای ✓ دو رو چاپ",
    rating: { stars: 4, count: 89 },
    priceCents: 10000,
    keywords: ["پرینتر", "الکترونیک", "دفتر کار"],
    options: [{ label: "برند", values: ["HP", "Canon", "Epson"] }]
  },
  {
    id: "11",
    image: "images/تلویزیون.jfif",
    name: "تلویزیون ۴K اسمارت",
    specs: "✓ ۵۵ اینچ ✓ اندروید TV ✓ رزولوشن ۴K",
    rating: { stars: 4.5, count: 235 },
    priceCents: 25000,
    keywords: ["تلویزیون", "الکترونیک", "خانه"],
    options: [{ label: "سایز", values: ["۵۰", "۵۵", "۶۵", "۷۵"] }]
  },
  {
    id: "12",
    image: "images/بوت مردانه.jfif",
    name: "بوت مردانه چرم",
    specs: "✓ چرم طبیعی ✓ زیره مقاوم",
    rating: { stars: 4.5, count: 30 },
    priceCents: 600,
    keywords: ["بوت", "مردانه", "کفش"],
    options: [{ label: "سایز", values: ["۴۰", "۴۱", "۴۲", "۴۳", "۴۴"] }]
  },
  {
    id: "13",
    image: "images/بوت چرمی دخترانه.jfif",
    name: "بوت چرمی دخترانه",
    specs: "✓ پاشنه ۵ سانتی ✓ چرم نرم",
    rating: { stars: 4.5, count: 562 },
    priceCents: 850,
    keywords: ["بوت", "دخترانه", "کفش"],
    options: [{ label: "سایز", values: ["۳۶", "۳۷", "۳۸", "۳۹", "۴۰"] }]
  },
  {
    id: "14",
    image: "images/پرده خانه.jpg",
    name: "پرده خانه",
    specs: "✓ ست ۴ تایی ✓ کرم رنگ",
    rating: { stars: 4.5, count: 232 },
    priceCents: 4599,
    keywords: ["پرده", "ضد نور", "خانه", "اتاق خواب"],
    options: [{ label: "تعداد لایه", values: ["۲ لایه", "۳ لایه"] }]
  },
  {
    id: "15",
    image: "images/چپلی زنانه.jfif",
    name: "چپلی زنانه",
    specs: "✓ طرح دار ✓ راحت",
    rating: { stars: 4, count: 160 },
    priceCents: 350,
    keywords: ["چپلی", "زنانه", "کفش"],
    options: [{ label: "سایز", values: ["۳۶", "۳۷", "۳۸", "۳۹", "۴۰"] }]
  },
  {
    id: "16",
    image: "images/پیراهن تنبان مردانه.jfif",
    name: "پیراهن تنبان مردانه",
    specs: "✓ آستین کوتاه ✓ نخ پنبه",
    rating: { stars: 5, count: 846 },
    priceCents: 1000,
    keywords: ["پیراهن", "مردانه", "لباس"],
    options: [{ label: "سایز", values: ["M", "L", "XL", "XXL"] }]
  },
  {
    id: "17",
    image: "images/دستمال کاغذی.jfif",
    name: "دستمال کاغذی",
    specs: "✓ ۲ لایه ✓ ۱۸ عددی",
    rating: { stars: 4, count: 99 },
    priceCents: 2374,
    keywords: ["دستمال", "کاغذی", "آشپزخانه", "نرم"],
    options: [{ label: "تعداد بسته", values: ["۶", "۱۲", "۱۸"] }]
  },
  {
    id: "18",
    image: "images/کلاه حصیری افتابی.jfif",
    name: "کلاه حصیری آفتابی",
    specs: "✓ بند دار ✓ سبک",
    rating: { stars: 4, count: 215 },
    priceCents: 2200,
    keywords: ["کلاه", "حصیری", "تابستانی", "زنانه"],
    options: [{ label: "سایز", values: ["فر سایز", "کودک", "بزرگسال"] }]
  },
  {
    id: "19",
    image: "images/گوشواره نگین دار.webp",
    name: "گوشواره نگین‌دار",
    specs: "✓ طرح گل آسمانی ✓ نقره",
    rating: { stars: 4.5, count: 52 },
    priceCents: 1799,
    keywords: ["گوشواره", "زیورآلات", "زنانه"],
    options: [{ label: "رنگ", values: ["طلایی", "نقره‌ای", "رزگلد"] }]
  },
  {
    id: "20",
    image: "images/لباس تاجکی زنانه.jfif",
    name: "لباس تاجکی زنانه",
    specs: " ✓کلاه گلدوزی ✓چپن سرخ",
    rating: { stars: 4.5, count: 2465 },
    priceCents: 1374,
    keywords: ["هودی", "زنانه", "لباس", "کاپشن"],
    options: [{ label: "سایز", values: ["S", "M", "L", "XL"] }]
  },
  {
    id: "21",
    image: "images/حوله حمام.jfif",
    name: "حوله حمام",
    specs: "✓ ۵۰×۸۰ ✓ طوسی",
    rating: { stars: 4.5, count: 119 },
    priceCents: 150,
    keywords: ["قالیچه", "حمام", "خانه"],
    options: [{ label: "رنگ", values: ["سرخ", "آبی", "کرم"] }]
  },
  {
    id: "22",
    image: "images/کفش باله زنانه.jfif",
    name: "کفش باله زنانه",
    specs: "✓ مشکی ✓ تخت",
    rating: { stars: 4, count: 326 },
    priceCents: 640,
    keywords: ["کفش", "باله", "زنانه", "راحتی"],
    options: [{ label: "سایز", values: ["۳۶", "۳۷", "۳۸", "۳۹", "۴۰"] }]
  },
  {
    id: "23",
    image: "images/کرتی زمستانی مردانه.jfif",
    name: "کرتی زمستانی مردانه",
    specs: "✓ آبی ✓ سریع‌خشک",
    rating: { stars: 4.5, count: 2556 },
    priceCents: 1599,
    keywords: ["پیراهن", "گلف", "مردانه", "ورزشی"],
    options: [{ label: "سایز", values: ["M", "L", "XL", "XXL"] }]
  },
  {
    id: "24",
    image: "images/سطل زباله.jfif",
    name: "سطل زباله",
    specs: "✓ ۵۰ لیتری ✓ استیل",
    rating: { stars: 4.5, count: 2286 },
    priceCents: 530,
    keywords: ["سطل زباله", "آشپزخانه"],
    options: [{ label: "رنگ", values: ["نقره‌ای", "سفید", "مشکی"," سرخ"] }]
  },
  {
    id: "25",
    image: "images/تخت.jfif",
    name: "تخت و روتختی",
    specs: "✓ سایز دوقلو ✓ آبی",
    rating: { stars: 4, count: 456 },
    priceCents: 2399,
    keywords: ["روتختی", "ملحفه", "اتاق خواب", "خانه"],
    options: [{ label: "سایز", values: ["تک", "دوقلو", "کینگ"] }]
  },
  {
    id: "26",
    image: "images/کلاه بافتنی زنانه.jfif",
    name: "کلاه بافتنی زنانه",
    specs: "✓ مدل چیندار ✓ طوسی",
    rating: { stars: 5, count: 83 },
    priceCents: 250,
    keywords: ["کلاه", "بافتنی", "زمستانی", "زنانه"],
    options: [{ label: "رنگ", values: ["سرخ", "مشکی", "کرم"] }]
  },
  {
    id: "27",
    image: "images/شلوار کتان مردانه.jfif",
    name: "شلوار کتان مردانه",
    specs: "✓ بژ ✓ کلاسیک",
    rating: { stars: 4.5, count: 9017 },
    priceCents: 2290,
    keywords: ["شلوار", "کتان", "مردانه", "لباس"],
    options: [{ label: "سایز", values: ["۳۰", "۳۲", "۳۴", "۳۶", "۳۸"] }]
  },
  {
    id: "28",
    image: "images/کفش ورزشی مردانه.jfif",
    name: "کفش ورزشی مردانه",
    specs: "✓ سبز ✓ ضد آب",
    rating: { stars: 4, count: 229 },
    priceCents: 3890,
    keywords: ["کفش", "ورزشی", "مردانه", "راحتی"],
    options: [{ label: "سایز", values: ["۴۰", "۴۱", "۴۲", "۴۳", "۴۴"] }]
  },
  {
    id: "29",
    image: "images/عینک افتابی مردانه.jfif",
    name: "عینک آفتابی مردانه",
    specs: "✓ قهوه‌ای ✓ پلاریزه",
    rating: { stars: 3.5, count: 42 },
    priceCents: 690,
    keywords: ["عینک", "آفتابی", "مردانه", "اکسسوری"],
    options: [{ label: "رنگ فریم", values: ["طلایی", "نقره‌ای", "مشکی"] }]
  },
  {
    id: "30",
    image: "images/ظروف ناسوز.jpg",
    name: "ست ۱۵ تایی قابلمه",
    specs: "✓ نچسب ✓ چدن",
    rating: { stars: 4.5, count: 511 },
    priceCents: 6797,
    keywords: ["ظروف", "نچسب", "آشپزخانه", "قابلمه"],
    options: [{ label: "تعداد", values: ["۱۵", "۲۱", "۲۷"] }]
  },
  {
    id: "31",
    image: "images/اینه ارایشی.jfif",
    name: "آینه آرایشی",
    specs: "✓ نقره‌ای ✓ چرخش ۳۶۰",
    rating: { stars: 4.5, count: 130 },
    priceCents: 1649,
    keywords: ["آینه", "آرایشی", "حمام", "خانه"],
    options: [{ label: "نور", values: ["ساده", "LED دار"] }]
  },
  {
    id: "32",
    image: "images/شلوار ورزشی زنانه.jfif",
    name: "شلوار ورزشی زنانه",
    specs: "✓ طرح استتار ✓ کشی",
    rating: { stars: 4.5, count: 248 },
    priceCents: 2400,
    keywords: ["شلوار", "ورزشی", "زنانه", "راحتی"],
    options: [{ label: "سایز", values: ["S", "M", "L", "XL"] }]
  },
  {
    id: "33",
    image: "images/گوشواره طلا.webp",
    name: "گوشواره طلایی",
    specs: "✓ طرح دو بیضی",
    rating: { stars: 4.5, count: 117 },
    priceCents: 5400,
    keywords: ["گوشواره", "طلایی", "زنانه", "اکسسوری"],
    options: [{ label: "رنگ", values: ["طلایی", "رزگلد"] }]
  },
  {
    id: "34",
    image: "images/ست ظرف غذاخوری.jfif",
    name: "ست ظرف غذاخوری",
    specs: "✓ ۵ تایی ✓ مایع‌بند",
    rating: { stars: 4, count: 126 },
    priceCents: 2899,
    keywords: ["ظروف", "درپوش", "آشپزخانه", "نگهداری"],
    options: [{ label: "حجم (لیتر)", values: ["۰.۵", "۱", "۱.۵", "۲"] }]
  },
  {
    id: "35",
    image: "images/قهوه ساز.jfif",
    name: "قهوه‌ساز",
    specs: "✓ ۲۵ اونس ✓ فیلتر دائمی",
    rating: { stars: 4.5, count: 1211 },
    priceCents: 4500,
    keywords: ["قهوه‌ساز", "آشپزخانه", "لوازم برقی"],
    options: [{ label: "ظرفیت", values: ["۲۵", "۳۲", "۴۰"] }]
  },
  {
    id: "36",
    image: "images/پرده اتاق خواب کودک.jfif",
    name: "پرده اتاق خواب کودک",
    specs: "✓ طرح دار ✓ حریر",
    rating: { stars: 4.5, count: 363 },
    priceCents: 5000,
    keywords: ["پرده", "خانه", "اتاق"],
    options: [{ label: "رنگ", values: ["سفید", "کرم", "آبی ملایم"] }]
  },
  {
    id: "37",
    image: "images/چادر زنانه.jfif",
    name: "چادر زنانه",
    specs: "✓ ۱۰۰٪ نخ ✓ ۲ عددی",
    rating: { stars: 4.5, count: 93 },
    priceCents: 2110,
    keywords: ["حوله", "حمام", "نخی", "خانه"],
    options: [{ label: "تعداد", values: ["۲", "۴", "۶"] }]
  },
  {
    id: "38",
    image: "images/کفش ورزشی زنانه.jfif",
    name: "کفش ورزشی زنانه صورتی",
    specs: "✓ ضد آب ✓ زیره فومی",
    rating: { stars: 4, count: 89 },
    priceCents: 3390,
    keywords: ["کفش", "ورزشی", "زنانه", "ضد آب"],
    options: [{ label: "سایز", values: ["۳۶", "۳۷", "۳۸", "۳۹", "۴۰"] }]
  },
  {
    id: "39",
    image: "images/مخلوط کن.jfif",
    name: "مخلوط‌کن",
    specs: "✓ ۱۴۰۰ وات ✓ تیغه تیتانیوم",
    rating: { stars: 4, count: 3 },
    priceCents: 8000,
    keywords: ["مخلوط‌کن", "آشپزخانه", "لوازم برقی"],
    options: [{ label: "رنگ", values: ["مشکی", "نقره‌ای", "سفید"] }]
  },
  {
    id: "40",
    image: "images/کاسه ها گلدار.jfif",
    name: "کاسه ها گلدار",
    specs: "✓ ۱۰ تایی ✓ طرح گل",
    rating: { stars: 5, count: 679 },
    priceCents: 3899,
    keywords: ["کاسه", "آشپزخانه",  "گلدار"],
    options: [{ label: "تعداد", values: ["۱۰", "۱۵", "۲۰"] }]
  },
  {
    id: "41",
    image: "images/دریشی زنانه.jfif",
    name: "دریشی زنانه",
    specs: "✓ ساده ✓ پارچه اعلا",
    rating: { stars: 4.5, count: 1045 },
    priceCents: 900,
    keywords: ["دریشی", "زنانه", "لباس افغانی"],
    options: [{ label: "سایز", values: ["M", "L", "XL", "XXL"] }]
  },
  {
    id: "42",
    image: "images/ست لوازم ارایشی.jfif",
    name: "ست لوازم آرایشی",
    specs: "✓ کامل ✓ کیف دار",
    rating: { stars: 4.5, count: 3157 },
    priceCents: 1400,
    keywords: ["آرایشی", "زنانه", "زیبایی"],
    options: [{ label: "تعداد قطعه", values: ["۱۲", "۱۸", "۲۴"] }]
  }
];