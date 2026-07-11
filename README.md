# موقع شركة الإنشاء والتميز — السورس كود الكامل

## 📁 محتويات المشروع

```
Mshary/
├── index.html              الصفحة الرئيسية (مع كاروسيل المشاريع السينمائي + قسم الأسطول)
├── project.html            صفحة تفاصيل المشروع (بأسلوب المجلات الفاخرة)
├── README.md               هذا الملف
│
├── js/
│   ├── projects-data.js    مصفوفة بيانات المشاريع (12 مشروعاً)
│   ├── equipment-data.js   مصفوفة بيانات المعدات (21 معدة في 7 فئات)
│   └── [مكتبات JS أخرى]   jQuery, Bootstrap, Swiper, Owl, etc.
│
├── css/
│   └── [مكتبات CSS]        Bootstrap, Swiper, Owl, Font Awesome, etc.
│
├── images/
│   ├── logo.png            شعار الشركة
│   ├── about.png           صورة قسم "من نحن"
│   ├── asphalt-plant.jpg   صورة محطة الأسفلت
│   ├── projact/            صور المشاريع (22 صورة)
│   ├── n/                  صور إضافية (46 صورة)
│   └── equipment/          صور المعدات (19 صورة)
│
├── fonts/                  ملفات الخطوط (Font Awesome, Flaticon, Glyphicons)
├── video/
│   └── video.mp4           فيديو الخلفية في الـ Hero
│
├── inc/                    سكربتات PHP للنماذج (PHPMailer)
└── site/                   نسخة قديمة من القالب (غير مستخدمة)
```

## 🎯 الميزات المنفّذة

### 1. قسم المشاريع (كاروسيل سينمائي 3D)
- 3 سلايدات × 4 مشاريع = 12 مشروعاً على الديسكتوب
- responsive ديناميكياً: 1 مشروع/سلايد على الجوال، 2 على التابلت، 4 على الديسكتوب
- autoplay مع شريط تقدّم ذهبي كل 7 ثوانٍ
- تنقل بالأسهم، السحب، أو لوحة المفاتيح
- تأثير parallax يتبع الفأرة
- بنية 3D عميقة (rotateX/rotateY على الـ hover)

### 2. صفحة تفاصيل المشروع (project.html)
تُبنى ديناميكياً من `?id=X` وتحتوي 10 أقسام:
1. شريط تقدّم القراءة
2. Hero سينمائي بتأثير Ken Burns
3. جسم المقالة بأسلوب المجلات (drop cap + pullquote)
4. عمود جانبي Sticky بالمواصفات
5. بطاقات الإحصائيات بـ hover 3D
6. نطاق العمل (checklist متحرك)
7. الخط الزمني (timeline بخلفية داكنة)
8. معرض صور بتخطيط ماغازين + 3D Tilt
9. Lightbox للصور بحجم كامل
10. شهادة العميل + التنقل بين المشاريع

### 3. قسم الأسطول (المعدات)
- 21 معدة في 7 فئات (محطة أسفلت، رصف، تثبيت، حفر، طحن، نقل، دعم)
- فلاتر تفاعلية لفلترة المعدات حسب الفئة
- كل معدة بصورتها واسمها وموديلها ومواصفاتها
- hover 3D وظهور تدريجي

## 🚀 طريقة التشغيل

### الطريقة 1: فتح مباشر
افتح ملف `index.html` مباشرة في المتصفح.

### الطريقة 2: خادم محلي (مُستحسن لتجنب مشاكل CORS)
```bash
cd Mshary
python3 -m http.server 8000
# ثم افتح: http://localhost:8000
```

### الطريقة 3: رفع على استضافة
ارفع كامل محتويات المجلد إلى أي استضافة ثابتة:
- GitHub Pages
- Netlify
- Vercel
- أي خادم Apache/Nginx

## 📝 لإضافة مشروع جديد
افتح `js/projects-data.js` وأضف عنصراً جديداً في مصفوفة `PROJECTS`:
```javascript
{
  id: 13,
  name: 'اسم المشروع الكامل',
  shortName: 'اسم مختصر',
  client: 'اسم الجهة المتعاقدة',
  location: 'الموقع',
  type: 'نوع المشروع',
  typeIcon: 'fa-road', // أيقونة Font Awesome
  value: '1,500,000',
  year: '2024',
  duration: '6 أشهر',
  cover: './images/projact/3.jpg',
  gallery: [...],
  summary: 'ملخص قصير',
  description: ['فقرة 1', 'فقرة 2', 'فقرة 3'],
  highlights: [...],
  scope: [...],
  milestones: [...],
  testimonial: { text, author, role }
}
```

## 📝 لإضافة معدة جديدة
افتح `js/equipment-data.js` وأضف العنصر للفئة المناسبة في `EQUIPMENT_CATEGORIES`.

## 🛠️ التقنيات المستخدمة
- HTML5 + CSS3 + JavaScript (Vanilla)
- Tailwind CSS (via CDN)
- AOS (Animate On Scroll)
- Font Awesome 6
- خط Cairo (Google Fonts)
- jQuery + Bootstrap (موجودة لكن غير مستخدمة في الأقسام الجديدة)

## 👨‍💻 المطور
تصميم وتطوير المهندس / **نادر وضاح**
