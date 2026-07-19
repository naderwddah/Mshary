/* ════════════════════════════════════════════════════════════════
   team-data.js
   ──────────────────────────────────────────────────────────────────
   بيانات جميع الكوادر الإدارية والفنية للشركة (36 موظفاً)
   مستخرجة من ملف الكادر الإداري والفني بالشركة
   ════════════════════════════════════════════════════════════════ */

const TEAM_MEMBERS = [
  /* ═══ الإدارة العليا ═══ */
  {
    id: 1,
    name: 'حامد باتل العنزي',
    role: 'رئيس مجلس الإدارة',
    category: 'management',
    experience: '30+ سنة',
    nationality: 'سعودي',
    image: 'images/team/chairman.jpg',
    bio: 'مؤسس ورئيس مجلس إدارة شركة الإنشاء والتميز. يمتلك خبرة عميقة في مجال المقاولات والبنية التحتية، وقاد الشركة لتصبح شريكاً موثوقاً للأمانات والبلديات في منطقة الحدود الشمالية.'
  },
  {
    id: 2,
    name: 'تركي حامد العنزي',
    role: 'مدير الموارد البشرية',
    category: 'management',
    experience: '6 سنوات',
    nationality: 'سعودي',
    image: '',
    bio: 'يدير فريق العمل ويشرف على تطوير الكوادر الوطنية، ويعمل على بناء بيئة عمل محفزة وإيجابية.'
  },

  /* ═══ الهندسة والإشراف ═══ */
  {
    id: 3,
    name: 'م. مايكل ريك بقطر حلف',
    role: 'مدير المشروعات',
    category: 'engineering',
    experience: '19 سنة',
    nationality: 'مصري',
    image: '',
    bio: 'يشرف على تنفيذ جميع المشاريع من البداية إلى التسليم، ويضمن الالتزام بالجودة والمواصفات والجدول الزمني.'
  },
  {
    id: 4,
    name: 'م. محمد عوض الكامل',
    role: 'مهندس الموقع',
    category: 'engineering',
    experience: '6 سنوات',
    nationality: 'مصري',
    image: '',
    bio: 'يشرف على الأعمال الميدانية اليومية، ويتابع تنفيذ الرصف والدهانات والإنارة وفق أعلى معايير الجودة.'
  },

  /* ═══ الإدارة المالية والموارد البشرية ═══ */
  {
    id: 5,
    name: 'غادة العنزي',
    role: 'كاتبة أجور',
    category: 'admin',
    experience: 'سنتان',
    nationality: 'سعودية',
    image: ''
  },
  {
    id: 6,
    name: 'أماني العنزي',
    role: 'كاتبة أجور',
    category: 'admin',
    experience: 'سنة',
    nationality: 'سعودية',
    image: ''
  },
  {
    id: 7,
    name: 'سالم عبدالله الدوسري',
    role: 'كاتب أجور',
    category: 'admin',
    experience: 'سنتان',
    nationality: 'سعودي',
    image: ''
  },
  {
    id: 8,
    name: 'عمر طارق العطار',
    role: 'محاسب أول',
    category: 'admin',
    experience: '5 سنوات',
    nationality: 'مصري',
    image: ''
  },
  {
    id: 9,
    name: 'تغريد العنزي',
    role: 'فني جودة',
    category: 'admin',
    experience: 'سنتان',
    nationality: 'سعودية',
    image: ''
  },
  {
    id: 10,
    name: 'أحمد يحيى عزت',
    role: 'مساح (حاسب كميات)',
    category: 'admin',
    experience: '12 سنة',
    nationality: 'مصري',
    image: '',
    bio: 'يتولى تقدير الكميات وإعداد جداول الأعمال والتكاليف، ويضمن الدقة في حسابات المشاريع.'
  },

  /* ═══ المراقبة الميدانية ═══ */
  {
    id: 11,
    name: 'فهد حمد الدوسري',
    role: 'مراقب',
    category: 'supervision',
    experience: 'سنتان',
    nationality: 'سعودي',
    image: ''
  },
  {
    id: 12,
    name: 'وائل السر الأمين',
    role: 'مراقب',
    category: 'supervision',
    experience: '12 سنة',
    nationality: 'سوداني',
    image: ''
  },
  {
    id: 13,
    name: 'مصطفى محمود عطوه',
    role: 'مراقب',
    category: 'supervision',
    experience: 'سنتان',
    nationality: 'مصري',
    image: ''
  },
  {
    id: 14,
    name: 'محمد خالد محمود',
    role: 'مراقب',
    category: 'supervision',
    experience: '8 سنوات',
    nationality: 'مصري',
    image: ''
  },

  /* ═══ المهن الفنية ═══ */
  {
    id: 15,
    name: 'كرم مطاوع أحمد جعفر',
    role: 'فني مختبر',
    category: 'technical',
    experience: '8 سنوات',
    nationality: 'مصري',
    image: ''
  },
  {
    id: 16,
    name: 'تامر عبدالله محمد',
    role: 'مشرف بلاغات',
    category: 'technical',
    experience: '15 سنة',
    nationality: 'يمني',
    image: ''
  },
  {
    id: 17,
    name: 'علي سيف محمد عثمان',
    role: 'منسق بلاغات',
    category: 'technical',
    experience: '8 سنوات',
    nationality: 'يمني',
    image: ''
  },
  {
    id: 18,
    name: 'فواز يحي أحمد',
    role: 'منسق بلاغات',
    category: 'technical',
    experience: '15 سنة',
    nationality: 'يمني',
    image: ''
  },

  /* ═══ السائقون والمعدات ═══ */
  {
    id: 19,
    name: 'فريدون محمد خان',
    role: 'سائق شبول',
    category: 'drivers',
    experience: '10 سنوات',
    nationality: 'باكستاني',
    image: ''
  },
  {
    id: 20,
    name: 'أصف علي محمد',
    role: 'سائق بوبكات',
    category: 'drivers',
    experience: '10 سنوات',
    nationality: 'باكستاني',
    image: ''
  },
  {
    id: 21,
    name: 'سيترام برجي',
    role: 'سائق قالب',
    category: 'drivers',
    experience: '15 سنة',
    nationality: 'هندي',
    image: ''
  },
  {
    id: 22,
    name: 'راجا مورتزا رجاء',
    role: 'سائق حفار',
    category: 'drivers',
    experience: '8 سنوات',
    nationality: 'باكستاني',
    image: ''
  },
  {
    id: 23,
    name: 'أبرار علي أمير',
    role: 'سائق بوبكات',
    category: 'drivers',
    experience: '10 سنوات',
    nationality: 'باكستاني',
    image: ''
  },
  {
    id: 24,
    name: 'بهولا يثار براساد',
    role: 'سائق رصاصة',
    category: 'drivers',
    experience: '4 سنوات',
    nationality: 'هندي',
    image: ''
  },
  {
    id: 25,
    name: 'موهد أيوب خان',
    role: 'سائق قالب',
    category: 'drivers',
    experience: '3 سنوات',
    nationality: 'هندي',
    image: ''
  },
  {
    id: 26,
    name: 'سيل أنصاري',
    role: 'سائق جريدر',
    category: 'drivers',
    experience: '3 سنوات',
    nationality: 'هندي',
    image: ''
  },
  {
    id: 27,
    name: 'زين طارق',
    role: 'سائق قالب',
    category: 'drivers',
    experience: '3 سنوات',
    nationality: 'باكستاني',
    image: ''
  },
  {
    id: 28,
    name: 'إبراهيم الفي',
    role: 'ميكانيكي',
    category: 'drivers',
    experience: '3 سنوات',
    nationality: 'هندي',
    image: ''
  },

  /* ═══ العمالة الميدانية ═══ */
  {
    id: 29,
    name: 'محمد احمد سعيد',
    role: 'عامل',
    category: 'workers',
    experience: '5 سنوات',
    nationality: 'يمني',
    image: ''
  },
  {
    id: 30,
    name: 'غسان خان محمد',
    role: 'عامل',
    category: 'workers',
    experience: '8 سنوات',
    nationality: 'باكستاني',
    image: ''
  },
  {
    id: 31,
    name: 'المجير خان باشا',
    role: 'عامل',
    category: 'workers',
    experience: '12 سنة',
    nationality: 'باكستاني',
    image: ''
  },
  {
    id: 32,
    name: 'مد توهين شيكدر',
    role: 'عامل',
    category: 'workers',
    experience: '4 سنوات',
    nationality: 'بنجلاديشي',
    image: ''
  },
  {
    id: 33,
    name: 'سوب اكبر محمد',
    role: 'عامل',
    category: 'workers',
    experience: '5 سنوات',
    nationality: 'باكستاني',
    image: ''
  },
  {
    id: 34,
    name: 'محمد رحمت الله',
    role: 'عامل',
    category: 'workers',
    experience: '3 سنوات',
    nationality: 'بنجلاديشي',
    image: ''
  },
  {
    id: 35,
    name: 'سليمان صالح زيد',
    role: 'عامل',
    category: 'workers',
    experience: '7 سنوات',
    nationality: 'يمني',
    image: ''
  },
  {
    id: 36,
    name: 'عامل إضافي',
    role: 'عامل',
    category: 'workers',
    experience: '—',
    nationality: '—',
    image: ''
  }
];

/* التصدير */
if (typeof window !== 'undefined') {
  window.TEAM_MEMBERS = TEAM_MEMBERS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEAM_MEMBERS;
}