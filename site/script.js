/* =========================================================
   شركة الإنشاء والتميز — script.js
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic',
    });
  }

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('siteHeader');
  const onScrollHeader = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });

  /* ---------- Road progress spine (signature element) ---------- */
  const roadFill = document.getElementById('roadFill');
  const roadMarker = document.getElementById('roadMarker');
  const updateRoadSpine = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    if (roadFill) roadFill.style.height = pct + '%';
    if (roadMarker) roadMarker.style.top = pct + '%';
  };
  updateRoadSpine();
  window.addEventListener('scroll', updateRoadSpine, { passive: true });
  window.addEventListener('resize', updateRoadSpine);

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const isDecimal = String(target).includes('.');
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = (isDecimal ? value.toFixed(1) : Math.round(value)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Workforce bar chart reveal ---------- */
  const bars = document.querySelectorAll('.bar-fill');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const maxVal = 8; // max nationality count in dataset
        const val = parseFloat(getComputedStyle(entry.target).getPropertyValue('--val'));
        entry.target.style.width = (val / maxVal * 100) + '%';
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => barObserver.observe(b));

  /* ---------- Projects table data (20 highlighted projects) ---------- */
  const projects = [
    ["صيانة الشوارع والأرصفة والإنارة بمركز الشعبة", "بلدية الشعبة", 4066667],
    ["توريد دهانات وبردورات ومستلزمات", "أمانة محافظة حفر الباطن", 4061142],
    ["درء أخطار السيول وتصريف مياه الأمطار — المرحلة الأولى بشعبة نصاب", "بلدية الشعبة", 2100000],
    ["تأهيل الشوارع والطرق والإنارة بطلعة التميار والقرى التابعة", "بلدية طلعة التميار", 2099992],
    ["حدائق وممرات مشاة وساحات بشعبة نصاب", "بلدية الشعبة", 1685974],
    ["درء أخطار السيول وتصريف مياه الأمطار — المرحلة الرابعة بشعبة نصاب", "بلدية الشعبة", 1510350],
    ["درء أخطار السيول وتصريف مياه الأمطار بشعبة نصاب", "بلدية الشعبة", 1301000],
    ["صيانة وإعادة تأهيل الشوارع الداخلية للمخططات السكنية", "بلدية الشعبة", 998525],
    ["صيانة وتأهيل الشوارع بقرية العجرمية", "بلدية طلعة التميار", 799998],
    ["إنارة للأمانة والبلديات والقرى التابعة لها بشعبة نصاب", "بلدية الشعبة", 779000],
    ["درء أخطار السيول وتصريف مياه الأمطار", "بلدية الشعبة", 726000],
    ["صيانة تقاطع الطريق الدولي مع طريق الملك عبدالله بمدخل طلعة التميار", "بلدية طلعة التميار", 659525],
    ["تحسين وتجميل مداخل الأمانة والبلديات التابعة (روضة الهباس)", "بلدية روضة هباس", 621520],
    ["صيانة وإعادة تأهيل أرصفة المركز التاريخي بالحي القديم", "بلدية الشعبة", 499100],
    ["صيانة وتأهيل أرصفة وممرات مشاة الطرق الرئيسية", "بلدية الشعبة", 498939],
    ["صيانة حفر الشوارع والأرصفة المتهالكة بحيرة بمحدها وانس بكر", "أمانة الحدود الشمالية", 483000],
    ["تنظيف وترحيل البناء والأنقاض داخل الأحياء السكنية", "بلدية روضة هباس", 481850],
    ["صيانة الحدائق العامة وممرات المشاة والساحات", "بلدية الشعبة", 466785],
    ["صيانة وتأهيل الأرصفة أمام منازل المواطنين بالمخططات السكنية", "بلدية الشعبة", 458850],
    ["تنفيذ الأرصفة والممرات لتكملة طلبات المواطنين بأحياء شعبية نصاب", "بلدية الشعبة", 371864],
  ];

  const tbody = document.getElementById('projectsBody');
  if (tbody) {
    tbody.innerHTML = projects.map((p, i) => `
      <tr>
        <td class="idx">${String(i + 1).padStart(2, '0')}</td>
        <td>${p[0]}</td>
        <td class="text-ink-700">${p[1]}</td>
        <td class="num">${p[2].toLocaleString('en-US')}</td>
      </tr>
    `).join('');
  }

  /* ---------- Gallery ---------- */
  const galleryItems = [
    // earthworks
    { src: 'assets/images/gal-earth-1.jpg', cat: 'earth', label: 'تجهيز الطبقة الترابية' },
    { src: 'assets/images/gal-earth-2.jpg', cat: 'earth', label: 'التسوية بالمسوّية (الجريدر)' },
    { src: 'assets/images/gal-earth-3.jpg', cat: 'earth', label: 'الحفر والتحميل' },
    { src: 'assets/images/gal-earth-5.jpg', cat: 'earth', label: 'الحفر وتكسير الصخور' },
    { src: 'assets/images/gal-earth-6.jpg', cat: 'earth', label: 'ترطيب التربة بصهريج المياه' },
    { src: 'assets/images/gal-earth-7.jpg', cat: 'earth', label: 'دك طبقات الأساس' },
    // asphalt
    { src: 'assets/images/gal-asphalt-1.jpg', cat: 'asphalt', label: 'الفرّادة أثناء العمل' },
    { src: 'assets/images/gal-asphalt-2.jpg', cat: 'asphalt', label: 'فرش ودك الإسفلت' },
    { src: 'assets/images/gal-asphalt-3.jpg', cat: 'asphalt', label: 'دك الطبقة النهائية' },
    { src: 'assets/images/gal-asphalt-4.jpg', cat: 'asphalt', label: 'الدك بالإطارات المطاطية' },
    { src: 'assets/images/gal-asphalt-5.jpg', cat: 'asphalt', label: 'فرش الخلطة من الشاحنة' },
    { src: 'assets/images/gal-asphalt-6.jpg', cat: 'asphalt', label: 'قياس حرارة الخلطة الإسفلتية' },
    // paint / marking
    { src: 'assets/images/gal-paint-1.jpg', cat: 'paint', label: 'تخطيط التقاطعات' },
    { src: 'assets/images/gal-paint-2.jpg', cat: 'paint', label: 'دهان خطوط الطريق' },
    { src: 'assets/images/gal-paint-3.jpg', cat: 'paint', label: 'آلة الدهان الحراري' },
    { src: 'assets/images/gal-paint-4.jpg', cat: 'paint', label: 'تنفيذ التخطيط الأرضي' },
    { src: 'assets/images/gal-paint-5.jpg', cat: 'paint', label: 'دهان الجزيرة والبردورة' },
    { src: 'assets/images/gal-paint-6.jpg', cat: 'paint', label: 'دهان البردورات' },
    // lighting
    { src: 'assets/images/gal-light-1.jpg', cat: 'light', label: 'تركيب أعمدة الميدان' },
    { src: 'assets/images/gal-light-2.jpg', cat: 'light', label: 'تركيب الأعمدة بالرافعة' },
    { src: 'assets/images/gal-light-3.jpg', cat: 'light', label: 'عمود إنارة LED' },
    { src: 'assets/images/gal-light-4.jpg', cat: 'light', label: 'إنارة الميدان ليلاً' },
    { src: 'assets/images/gal-light-5.jpg', cat: 'light', label: 'الإنارة الزخرفية' },
    { src: 'assets/images/gal-light-6.jpg', cat: 'light', label: 'الميدان بعد الإنارة' },
    // curbs & interlock
    { src: 'assets/images/gal-curb-1.jpg', cat: 'curb', label: 'تنفيذ ممرات المشاة' },
    { src: 'assets/images/gal-curb-2.jpg', cat: 'curb', label: 'رصف الانترلوك' },
    { src: 'assets/images/gal-curb-3.jpg', cat: 'curb', label: 'انترلوك الأرصفة' },
    { src: 'assets/images/gal-curb-4.jpg', cat: 'curb', label: 'تركيب البردورات' },
    { src: 'assets/images/gal-curb-5.jpg', cat: 'curb', label: 'فريق تركيب البردورة' },
    { src: 'assets/images/gal-curb-6.jpg', cat: 'curb', label: 'صب البردورة الخرسانية' },
    { src: 'assets/images/gal-curb-7.jpg', cat: 'curb', label: 'بردورة وانترلوك أمام المنازل' },
    { src: 'assets/images/gal-curb-8.jpg', cat: 'curb', label: 'رصف الانترلوك للأرصفة' },
    { src: 'assets/images/gal-curb-9.jpg', cat: 'curb', label: 'تركيب البردورة وقنوات التصريف' },
    // other
    { src: 'assets/images/gal-other-1.jpg', cat: 'other', label: 'طريق مكتمل التنفيذ' },
    { src: 'assets/images/gal-other-2.jpg', cat: 'other', label: 'تجميل الميادين والحدائق' },
    { src: 'assets/images/gal-other-3.jpg', cat: 'other', label: 'الخرسانة المطبوعة' },
    { src: 'assets/images/gal-other-4.jpg', cat: 'other', label: 'تركيب العيون العاكسة' },
    { src: 'assets/images/gal-other-5.jpg', cat: 'other', label: 'تركيب اللوحات الإرشادية' },
    { src: 'assets/images/gal-other-6.jpg', cat: 'other', label: 'تنفيذ الملاعب' },
  ];

  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryGrid.innerHTML = galleryItems.map(item => `
      <div class="gallery-item" data-cat="${item.cat}" data-label="${item.label}" data-aos="fade-up">
        <img src="${item.src}" alt="${item.label}" loading="lazy">
      </div>
    `).join('');

    // re-init AOS for injected nodes
    if (window.AOS) AOS.refreshHard();

    /* filters */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = galleryGrid.querySelectorAll('.gallery-item');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const filter = btn.getAttribute('data-filter');
        items.forEach(it => {
          const match = filter === 'all' || it.getAttribute('data-cat') === filter;
          it.classList.toggle('hide', !match);
        });
      });
    });

    /* lightbox */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    galleryGrid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      const img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('is-open');
    });
    const closeLightbox = () => lightbox.classList.remove('is-open');
    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ---------- Smooth active nav highlight (optional enhancement) ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('!bg-white/10', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => navObserver.observe(s));

});
