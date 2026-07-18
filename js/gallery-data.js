/* ════════════════════════════════════════════════════════════════
   gallery-data.js
   ──────────────────────────────────────────────────────────────────
   بيانات معرض الصور الخاصة بسابقة أعمال الشركة.
   يحتوي على 8 فئات رئيسية، مع تحديد عدد الصور في كل فئة.
   ════════════════════════════════════════════════════════════════ */

const GALLERY_CATEGORIES = [
  {
    id: 1,
    name: 'الأعمال الترابية',
    folder: '1-earthworks',        // ✅ تم التغيير
    count: 35,
    extension: 'jpeg',
    cover: '1 (1).jpeg',
    description: 'أعمال الحفر والتسوية وتمهيد المواقع'
  },
  {
    id: 2,
    name: 'أعمال الأسفلت',
    folder: '2-asphalt-works',     // ✅ تم التغيير
    count: 25,
    extension: 'jpeg',
    cover: '1 (1).jpeg',
    description: 'رصف الطرق وطبقات الأسفلت'
  },
  {
    id: 3,
    name: 'البردورة والانترلوك',
    folder: '3-pavers-interlock',  // ✅ تم التغيير
    count: 18,
    extension: 'jpeg',
    cover: '1 (1).jpeg',
    description: 'تركيب البردورة والانترلوك للمشاريع'
  },
  {
    id: 4,
    name: 'دهان الشوارع',
    folder: '4-road-painting',     // ✅ تم التغيير
    count: 8,
    extension: 'jpeg',
    cover: '1 (1).jpeg',
    description: 'دهان خطوط الطرق والتقاطعات'
  },
  {
    id: 5,
    name: 'دهان الأرصفة',
    folder: '5-sidewalk-painting', // ✅ تم التغيير
    count: 14,
    extension: 'jpeg',
    cover: '1 (1).jpeg',
    description: 'دهان وتأهيل الأرصفة والممرات'
  },
  {
    id: 6,
    name: 'تركيب لوحات إرشادية وعيون قطط',
    folder: '6-signs-cat-eyes',    // ✅ تم التغيير
    count: 8,
    extension: 'jpeg',
    cover: '1 (1).jpeg',
    description: 'تركيب اللوحات الإرشادية والعيون العاكسة'
  },
  {
    id: 7,
    name: 'تركيب أعمدة ديكورية',
    folder: '7-decorative-poles',  // ✅ تم التغيير
    count: 6,
    extension: 'jpeg',
    cover: '1 (1).jpeg',
    description: 'تركيب أعمدة الإنارة الديكورية'
  },
  {
    id: 8,
    name: 'أعمال أخرى',
    folder: '8-other-works',       // ✅ تم التغيير
    count: 14,
    extension: 'jpeg',
    cover: '1 (1).jpeg',
    description: 'مشاريع متنوعة (حدائق، خرسانة مطبوعة، تجميل)'
  }
];

if (typeof window !== 'undefined') {
  window.GALLERY_CATEGORIES = GALLERY_CATEGORIES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GALLERY_CATEGORIES;
}

