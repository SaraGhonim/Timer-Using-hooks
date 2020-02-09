const trips = [
    {
      id: 1,
      date: 'Yesterday',
      score: 7.2,
      distance: '45.6 mi',
      from: 'Maha Mostafa El gendy',

      to: '2-2-2020',
    },
    {
      id: 2,
      date: 'Oct 12',
      score: 8.3,
      distance: '837.9 mi',
      from: 'Sara Tarek Ghonim',
      to: '2-2-2020',
    },
    {
      id: 3,
      date: 'Oct 1',
      score: 8.3,
      distance: '837.9 mi',
      from: 'Yomna Maher',
      to: '2-2-2020',
    },
    {
      id: 4,
      date: 'Oct 1',
      score: 8.3,
      distance: '837.9 mi',
      from: 'Salma Magdy',
      to: '2-2-2020',
    },
  ];
  
  const results = [
    {
      id: 1,
      score: 7.2,
      distance: '45.6 mi',
      Name: 'Maha Mostafa El gendy',
      date: 'Today',
      to: '2-2-2020',
    },
    {
      id: 2,
      date: 'Oct 12',
      score: 8.3,
      distance: '837.9 mi',
      from: 'Sara Tarek Ghonim',
      to: '2-2-2020',
    },
  ];
  
  const location = {
    latitude: 40.73978092263567,
    longitude: -73.87333547273988,
    latitudeDelta: 0.06,
    longitudeDelta: 0.06,
  }
  const selectColors = [
    'red',
    'green',
    'blue',
    'orange','purple'
  ]
 const backgroundColors = [
    'brown',
    'black',
    '#20b2aa',
    '#6495ed',
    '#ffd420',
    '#7a42f4',
    '#008000',
    '#4b0082',
    '#ff4500',
    '#9acd32',
    'darkorange',
    '#b22222',
    '#32cd32',
    '#008080',
    '#8b4513'
  ];
const colors1 = [
    '#7a42f4',
    '#32cd32',
    '#9acd32',
    '#ff4500',
    '#008000',
    'black',
    '#00ff7f',
    '#b22222',
    '#20b2aa',
    '#8b4513',
    '#4b0082',
    'darkorange',
    '#008080',
    'pink',
    '#6495ed',
    '#ffd420',
  ];
const statments = [
    'ان المحافظة على البيئة نظيفة ضرورة ملحة',
    'لقد رأيت هدهد جميل على الشجرة ليلة أمس',
    'إن فناء المدرسة ملى بالأشجار الرائعةستعجبك كثيرا',
    'أقبل التلميذ من المحاضرة حزينا ولا أعلم السبب ',
    'تسعى مصر للتقدم فى مجال الصناعة والزراعة والسياحة',
    'الصياد فى البحر أولاده يلعبون معه وهو يسعى للرزق',
    'سافر أبي وأمي وأخي  إلى الحج هذا العام',
    'هذا الولد متحمل للمسئولية اشترك الولد مع ابيه فى العمل',
    'يجب ان نحافظ على المياه ،تلوث المياة يؤدى إلى هلاك البشرية',
    'اشترى الأب العجلة ونبيل يلعب مع اخوة مصطفى بها ',
    'ممارسة الرياضة للجسم والقراءة للعقل مفيدة جدا',
    'القارب الجديد يهتز بشدة فى المياةانا خائف',
    'أسرة عمى أسرة متعاونة ومستقرة انا احبهم جدا',
    'تمشى الأم للبيت بسرعة ولهفة لترى أبناءها',
    'التماثيل فى الاقصر تجلب السياح لذا يجب المحافظة عليها',
    ' تقع الازهار فى فصل الخريف و تزدهر فى فصل الربيع',
    'تعتنى الأم بصغارها وتخاف عليهم وتوفر لهم كل ما تقدر عليه',
    'حضر الرئيس راكبا سيارته صباحا ومعه كثير من الحراس',
    'أسرة عمى أسرة متعاونة ومستقرة انا احبهم جدا',
    'يجب ان نحافظ على المياه ،تلوث المياة يؤدى إلى هلاك البشرية',
  ];
  const interedColorProbability =[1,1,1,1,2,3,1,1,1,1,2,3,1,1,1,1,2,3,1,1,1,1,2,3]
  export { results,trips, location, selectColors, backgroundColors, statments, colors1,interedColorProbability };