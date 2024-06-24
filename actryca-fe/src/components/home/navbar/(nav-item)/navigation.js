
const navigation = [
    { name: 'Anasayfa', href: '/', current: true },
    {
      name: 'Sanatçılar',
      href: '#',
      current: false,
      children: [
        { name: 'Oyuncular', href: '/arts/actors' },
        { name: 'Senaristler', href: '/arts/writers' }
      ]
    },
    { name: 'Hizmetler', href: '/services', current: false },
    { name: 'Biz Kimiz?', href: '/about', current: false },
    { name: 'Bize Ulaşın', href: '/communication', current: false }
  ];
  
  export default navigation;
  