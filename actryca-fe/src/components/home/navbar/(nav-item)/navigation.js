const navigation = [
  { name: "Anasayfa", href: "/", current: true },
  {
    name: "Sanatçılar",
    href: "#actors",
    current: false,
    children: [
      { name: "Oyuncular", href: "/actors" },
      { name: "Senaristler", href: "#writers" },
    ],
  },
  { name: "Hizmetler", href: "#services", current: false },
  { name: "Biz Kimiz?", href: "#about", current: false },
  { name: "Bize Ulaşın", href: "#footer", current: false },
];

export default navigation;
