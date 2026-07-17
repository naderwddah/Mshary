/* ════════════════════════════════════════════════════════════════
   equipment-data.js  —  بيانات أسطول المعدات بالكامل
   ════════════════════════════════════════════════════════════════ */

const EQUIPMENT_CATEGORIES = [
  {
    id: 'asphalt-plant',
    name: 'محطة الأسفلت',
    icon: 'fa-industry',
    description: 'محطة إنتاج الأسفلت الخاصة بالشركة — تحكّم كامل بالجودة والكميات',
    items: [
      {
        name: 'محطة خلط الأسفلت ماريني',
        model: 'MARINI 120',
        image: './images/equipment/plant-full.jpg',
        specs: { 'الطاقة الإنتاجية': '120 طن/ساعة', 'النوع': 'خلطة ساخنة', 'الموقع': 'رفحاء' },
        description: 'محطة خلط أسفلت ماريني تعمل بطاقة إنتاجية 120 طن/ساعة، تُستخدم لإنتاج الخلطات الإسفلتية الساخنة لمشاريع الطرق والرصف.'
      },
      {
        name: 'محطة خلط أسفلت موقعية',
        model: 'Asphalt Mixing Plant',
        image: './images/equipment/plant-1.jpg',
        specs: { 'النوع': 'محطة موقعية', 'الاستخدام': 'مشاريع ميدانية' },
        description: 'محطة خلط أسفلت متنقلة تُنشر في مواقع المشاريع لتأمين إمدادات الإسفلت الطازج.'
      },
      {
        name: 'وحدة فرز وتجهيز الركام',
        model: 'Crushing & Screening Unit',
        image: './images/equipment/plant-2.jpg',
        specs: { 'النوع': 'وحدة فرز', 'الاستخدام': 'تجهيز الركام' },
        description: 'وحدة فرز وتجهيز الركام لضمان جودة المواد الداخلة في خلطات الإسفلت.'
      }
    ]
  },
  {
    id: 'paving',
    name: 'معدات الرصف',
    icon: 'fa-road',
    description: 'آلات رصف وتسوية الإسفلت بسرعة عالية ودقة متناهية',
    items: [
      {
        name: 'آلة الرصف الآلي VÖGELE',
        model: 'VÖGELE SUPER 1900-3',
        image: './images/equipment/paving-1.jpg',
        specs: { 'العلامة': 'VÖGELE', 'الموديل': 'SUPER 1900-3', 'الاستخدام': 'رصف وتسوية الإسفلت' },
        description: 'آلة رصف آلي ألمانية الصنع، تضمن طبقة إسفلتية متجانسة بسماكة موحدة ودقة عالية.'
      },
      {
        name: 'آلة رصف إسفلت Wirtgen',
        model: 'Wirtgen Paver',
        image: './images/equipment/transport-2.jpg',
        specs: { 'العلامة': 'Wirtgen', 'الاستخدام': 'رصف الطرق' },
        description: 'آلة رصف إسفلت من شركة ويرتغين، تستخدم في رصف الطرق بمعدلات إنتاجية عالية.'
      }
    ]
  },
  {
    id: 'compaction',
    name: 'معدات التثبيت والدك',
    icon: 'fa-roller',
    description: 'أسطول متكامل من المكابس الهوائية وأحادية ومزدوجة الطبل',
    items: [
      {
        name: 'مكبس مزدوج الطبل HAMM',
        model: 'HAMM HD 90',
        image: './images/equipment/compaction-banner.jpg',
        specs: { 'العلامة': 'HAMM', 'الموديل': 'HD 90', 'النوع': 'Tandem Roller' },
        description: 'مكبس مزدوج الطبل من شركة هام، يستخدم في تثبيت الأسفلت وتحسين قوامه على الطرق.'
      },
      {
        name: 'مكبس مزدوج الطبل INGERSOLL-RAND',
        model: 'INGERSOLL-RAND',
        image: './images/equipment/paving-2.jpg',
        specs: { 'العلامة': 'INGERSOLL-RAND', 'النوع': 'Tandem Roller' },
        description: 'مكبس مزدوج الطبل من إنجرسول راند، يستخدم لتثبيت طبقات الإسفلت النهائية.'
      },
      {
        name: 'مكبس هوائي CAT',
        model: 'CAT Pneumatic Roller',
        image: './images/equipment/steel-roller.jpg',
        specs: { 'العلامة': 'CAT', 'النوع': 'Pneumatic Roller' },
        description: 'مكبس هوائي من كاتربيلر، يستخدم في تثبيت الأسفلت عبر ضغط متعدد الإطارات.'
      },
      {
        name: 'مكبس أحادي الطبل BOMAG',
        model: 'BOMAG BW 24R',
        image: './images/equipment/asphalt-plant.jpg',
        specs: { 'العلامة': 'BOMAG', 'الموديل': 'BW 24R', 'النوع': 'Single-Drum Soil Roller' },
        description: 'مكبس أحادي الطبل من بوماغ، مخصّص لتسوية التربة والأراضي قبل الرصف.'
      }
    ]
  },
  {
    id: 'earthworks',
    name: 'معدات الحفر والتحريك',
    icon: 'fa-tractor',
    description: 'حفارات هيدروليكية ولودرات لأعمال الحفر والتسوية',
    items: [
      {
        name: 'حفار هيدروليكي هيونداي',
        model: 'HYUNDAI 220LC-9',
        image: './images/equipment/excavator.jpg',
        specs: { 'العلامة': 'Hyundai', 'الموديل': '220LC-9', 'النوع': 'Hydraulic Excavator' },
        description: 'حفار هيدروليكي من هيونداي، يستخدم في أعمال الحفر الكبير وتركيب الأنابيب.'
      },
      {
        name: 'حفار متتبّع دووسان',
        model: 'DOOSAN Tracked Excavator',
        image: './images/equipment/excav-night.jpg',
        specs: { 'العلامة': 'Doosan', 'النوع': 'Tracked Excavator' },
        description: 'حفار متتبّع من دووسان بقوة حفر عالية للمناطق الصخرية، يعمل بكفاءة في المواقع الصعبة.'
      },
      {
        name: 'لودر خلفي JCB',
        model: 'JCB Backhoe Loader',
        image: './images/equipment/jcb.jpg',
        specs: { 'العلامة': 'JCB', 'النوع': 'Backhoe Loader' },
        description: 'لودر خلفي من JCB، متعدد الاستخدامات في أعمال الحفر والتحميل والنقل والتركيب.'
      },
      {
        name: 'لودر تحميل CAT',
        model: 'CAT Loader',
        image: './images/equipment/earth-left.jpg',
        specs: { 'العلامة': 'CAT', 'النوع': 'Wheel Loader' },
        description: 'لودر تحميل من كاتربيلر، يستخدم في تحميل ونقل المواد والردم في مواقع العمل.'
      },
      {
        name: 'حفار هيونداي مع كسّارة',
        model: 'Hyundai 220LC-9 + Breaker',
        image: './images/equipment/earth-right.jpg',
        specs: { 'العلامة': 'Hyundai', 'الموديل': '220LC-9', 'الإضافة': 'مع كسارة صخور' },
        description: 'حفار هيونداي مدمج بكسّارة صخور، يُستخدم في تكسير الصخور والتربة الصلبة قبل الحفر.'
      }
    ]
  },
  {
    id: 'milling',
    name: 'معدات الطحن البارد',
    icon: 'fa-gear',
    description: 'آلات إزالة طبقات الإسفلت القديمة من الطرق',
    items: [
      {
        name: 'آلة الطحن البارد WIRTGEN',
        model: 'WIRTGEN Cold Milling Machine',
        image: './images/equipment/milling.jpg',
        specs: { 'العلامة': 'WIRTGEN', 'النوع': 'Cold Milling' },
        description: 'آلة طحن بارد من ويرتغين، تستخدم في إزالة طبقات الإسفلت القديمة من الطرق لإعادة تدويرها.'
      }
    ]
  },
  {
    id: 'transport',
    name: 'معدات النقل والرفع',
    icon: 'fa-truck',
    description: 'شاحنات قلابة ورافعات لنقل المواد الثقيلة',
    items: [
      {
        name: 'شاحنة قلابة مع مقطورة',
        model: 'Tractor Head & Tipper Trailer',
        image: './images/equipment/trailer.jpg',
        specs: { 'النوع': 'Tipper Trailer', 'الاستخدام': 'نقل الرمل والحصى' },
        description: 'مقطورة قلابة تُستخدم لنقل الرمل والحصى والأسفلت بين المواقع، بسعة تحميل عالية.'
      },
      {
        name: 'شاحنة رافعة',
        model: 'Crane Truck',
        image: './images/equipment/transport-1.jpg',
        specs: { 'النوع': 'Crane Truck', 'الاستخدام': 'رفع المواد الثقيلة' },
        description: 'شاحنة رافعة تستخدم في نقل المواد الثقيلة ورفعها في مواقع المشاريع المختلفة.'
      },
      {
        name: 'شاحنة دعم المواقع',
        model: 'Service Truck',
        image: './images/equipment/transport-2.jpg',
        specs: { 'النوع': 'Service Truck', 'الاستخدام': 'دعم المواقع' },
        description: 'شاحنة خدمة لدعم مواقع العمل، مزوّدة بأجهزة رفع وأدوات صيانة.'
      }
    ]
  },
  {
    id: 'support',
    name: 'معدات الدعم',
    icon: 'fa-toolbox',
    description: 'معدات مساندة لأعمال التحضير والصيانة',
    items: [
      {
        name: 'معدّة تسوية (Grader)',
        model: 'Motor Grader',
        image: './images/equipment/grader.jpg',
        specs: { 'النوع': 'Motor Grader', 'الاستخدام': 'تحضير الأساس' },
        description: 'معدّة تسوية مخصّصة لتحضير الأساس وتسوية الأراضي قبل أعمال الرصف.'
      },
      {
        name: 'وحدة رش الإسفلت السائل',
        model: 'Tack Coat Distributor',
        image: './images/equipment/tack-2.png',
        specs: { 'النوع': 'Tack Coat', 'الاستخدام': 'طبقة التثبيت' },
        description: 'وحدة رش الإسفلت السائل لطبقة التثبيت التي تربط بين طبقات الإسفلت لتعزيز الالتصاق.'
      },
      {
        name: 'صهريج المياه',
        model: 'Water Tanker',
        image: './images/equipment/plant-side.jpg',
        specs: { 'النوع': 'صهريج', 'الاستخدام': 'ترطيب التربة' },
        description: 'صهريج مياه لترطيب التربة والطبقات الأساسية لضمان الكثافة المطلوبة قبل الدك.'
      }
    ]
  }
];

/* التصدير */
if (typeof window !== 'undefined') {
  window.EQUIPMENT_CATEGORIES = EQUIPMENT_CATEGORIES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EQUIPMENT_CATEGORIES;
}