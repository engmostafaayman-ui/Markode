
  document.addEventListener("DOMContentLoaded", function () {
    const translations = {
      ar: {
        dir: "rtl",
        lang: "ar",
        welcome: "مرحباً بك في <span>Markode</span>",
        intro1: "وجهتك الذكية للتسويق الرقمي وتطوير البرمجيات.",
        intro2: "نبتكر الحلول، وندعم نموك الرقمي، ونحوّل أفكارك إلى واقع.",
        menu: ["الرئيسية", "من نحن", "خدماتنا", "الباقات", "تواصل معنا"],
        offersTitle: "عروضنا",
        offers: [
          {
            title: "باقة الشركات",
            desc: "حلول متكاملة للتسويق وتطوير المواقع للشركات.",
            btn: "اطلب الآن"
          },
          {
            title: "باقة الناشئين",
            desc: "تصميم هوية + موقع تعريفي + حملة انطلاقية.",
            btn: "اطلب الآن"
          },
          {
            title: "باقة التطوير",
            desc: "خدمة تطوير تطبيق أو نظام مخصص حسب الطلب.",
            btn: "تواصل معنا"
          }
        ]
      },
      en: {
        dir: "ltr",
        lang: "en",
        welcome: "Welcome to <span>Markode</span>",
        intro1: "Your smart destination for digital marketing and software development.",
        intro2: "We create solutions, support your growth, and turn ideas into reality.",
        menu: ["Home", "About", "Services", "Plans", "Contact"],
        offersTitle: "Our Offers",
        offers: [
          {
            title: "Corporate Package",
            desc: "Integrated solutions for company websites and marketing.",
            btn: "Order Now"
          },
          {
            title: "Starter Package",
            desc: "Branding + Intro Website + Launch Campaign.",
            btn: "Order Now"
          },
          {
            title: "Custom Development",
            desc: "Custom system or application tailored to your needs.",
            btn: "Contact Us"
          }
        ]
      }
    };

    function switchLanguage(lang) {
      const t = translations[lang];

      // تحديث خصائص الصفحة
      document.documentElement.lang = t.lang;
      document.documentElement.dir = t.dir;

      // تحديث العنوان والفقرات
      document.querySelector(".intro h1").innerHTML = `<strong>${t.welcome}</strong>`;
      document.querySelectorAll(".intro p")[0].textContent = t.intro1;
      document.querySelectorAll(".intro p")[1].textContent = t.intro2;

      // تحديث روابط شريط التنقل
      const navLinks = document.querySelectorAll(".nav-links li a");
      navLinks.forEach((link, i) => {
        if (t.menu[i]) link.textContent = t.menu[i];
      });

      // عنوان العروض
      const offersHeader = document.querySelector(".offers h2");
      if (offersHeader) offersHeader.textContent = t.offersTitle;

      // تحديث محتوى بطاقات العروض
      const offerCards = document.querySelectorAll(".offer-card");
      offerCards.forEach((card, i) => {
        const h3 = card.querySelector("h3");
        const p = card.querySelector("p");
        const btn = card.querySelector("button");

        if (t.offers[i]) {
          h3.textContent = t.offers[i].title;
          p.textContent = t.offers[i].desc;
          btn.textContent = t.offers[i].btn;
        }
      });

      // تحديث زر اللغة النشط
      document.querySelectorAll(".lang-switch .lang").forEach(btn => {
        btn.classList.remove("active");
        if (btn.textContent.trim().toLowerCase() === lang) {
          btn.classList.add("active");
        }
      });
    }

    // ربط أزرار تغيير اللغة
    const langButtons = document.querySelectorAll(".lang-switch .lang");
    langButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedLang = btn.textContent.trim().toLowerCase();
        switchLanguage(selectedLang);
      });
    });
  });
