import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        contact: "Contact Us",
        services: "Services",
        learnMore: "Learn More",
        getQuote: "Get a Quote",
        servicesInfo: {
          moving: {
            title: "Moving Services",
            desc: "Experience a seamless relocation with our expert movers. We handle everything from packing to transportation, ensuring your move is stress-free and efficient.",
          },
          cleaning: {
            title: "Cleaning Services",
            desc: "Enjoy a pristine environment with our comprehensive cleaning services. Our team provides thorough and efficient cleaning for both residential and commercial spaces.",
          },
          handyman: {
            title: "Handyman Services",
            desc: "Keep your property in top condition with our reliable handyman services. From minor repairs to furniture assembly, our skilled professionals are here to help.",
          },
        },
      },
      main: {
        mainTitle: "Make your moving easy with us",
        mainDescription:
          "It is a long established fact that the readable content of a page when. Many desktop publishing packages and web page editors now use",
      },
      servicesComponent: {
        services: "Services",
        title: "Get the best services from our company",
        moving: {
          title: "Moving services",
          description:
            "Relocating? We make it easy! Our professional movers handle everything from packing to transportation, ensuring a smooth and stress-free move to your new location.",
        },
        handyman: {
          title: "Handyman services",
          description:
            "Need quick fixes? From minor repairs to furniture assembly, our skilled handymen handle it all, ensuring your home or workspace stays in top shape.",
        },
        cleaning: {
          title: "Cleaning services",
          description:
            "A spotless space is just a call away! Whether it's your home or office, our expert cleaners provide deep and efficient cleaning for a fresh and healthy environment.",
        },
      },
      testimonials: {
        title: "See how our clients review about our services.",
        review1: {
          text: "Super smooth move! The team was fast, careful, and very professional.",
          name: "- Lee Sims",
        },
        review2: {
          text: "Excellent service! They handled everything with care, and the whole process was stress-free.",
          name: "- Jane Doe",
        },
        review3: {
          text: "Highly recommend! The movers were friendly, efficient, and very organized.",
          name: "- John Smith",
        },
        review4: {
          text: "Everything arrived safely, and the team was a pleasure to work with!",
          name: "- Emily Johnson",
        },
      },
      infoComponent: {
        reliableService: "Reliable Service, Exceptional Results",
        whyChooseUs: "Why Choose Us?",
        trustedProfessionals: {
          title: "Trusted Professionals",
          description:
            "Our experienced and friendly team is committed to delivering top-quality service with care and reliability.",
        },
        effortlessMoving: {
          title: "Effortless Moving",
          description:
            "We handle your belongings with precision and care, ensuring a smooth and hassle-free relocation.",
        },
        customerSatisfaction: {
          title: "Customer Satisfaction",
          description:
            "Your happiness is our priority! We go the extra mile to provide top-notch service you can rely on.",
        },
      },
      faq: {
        title: "Have Questions? We Have Answers!",
        subtitle: "Frequently Asked Questions",
        question1: {
          question: "How can I book a moving service?",
          answer:
            "You can easily book our service online or by phone. Choose a convenient time, and we’ll schedule it for you!",
        },
        question2: {
          question: "Which areas do you serve?",
          answer:
            "We provide services in all major cities and surrounding areas. Contact us to confirm coverage in your location.",
        },
        question3: {
          question: "Do you offer packing services?",
          answer:
            "Yes, we offer professional packing services to ensure your belongings are safely packed and transported.",
        },
        question4: {
          question: "What items do you not transport?",
          answer:
            "We do not transport hazardous materials, perishable goods, or items prohibited by law. Contact us for a full list of restricted items.",
        },
        question5: {
          question: "How should I prepare for the move?",
          answer:
            "We recommend making an inventory of your belongings, labeling boxes, and ensuring everything is securely packed. Our team can provide additional tips and assistance.",
        },
      },
      contactComponent: {
        title: "Reach out to us Today!",
        button: "Quote & Book Online",
      },
      servicesPage: {
        title: "Our Services",
        moving: {
          title: "Professional Cleaning Services!",
        },
        cleaning: {
          title: "Stress-Free Moving",
        },
        handyman: {
          title: "Reliable Handyman Services!",
        },
      },
      footer: {
        description:
          "We provide reliable, stress-free moving with care and professionalism.",
        bookMove: "Book a move",
        helpAndServices: "Help and services",
        toExplore: "To explore",
        aboutUs: "About us",
        links: {
          howDoesItWork: "How does it work",
          faqs: "FAQS",
          contact: "Contact",
          moving: "Moving",
          cleaning: "Cleaning",
          handyman: "Handyman",
          info: "Info",
          timeline: "Timeline",
        },
      },
      about: {
        title: "About Us",
        subtitle: "Know Us Better",
        mainTitle: "We're hyper-focused on what we do best",
        paragraph1:
          "At Our Company, we specialize in seamless, stress-free moving experiences. With a deep understanding of what makes a move successful, we bring efficiency, care, and reliability to every job—whether it's a local move, long-distance relocation, or commercial transition.",
        paragraph2:
          "Our team is committed to handling your belongings with the utmost care, ensuring they arrive safely and on time. From packing and loading to transportation and unpacking, we streamline the process so you can focus on settling into your new space.",
        contactButton: "Contact Us",
        missionTitle: "Our Mission",
        missionDescription:
          "We ensure stress-free moves with professionalism and care, making every transition smooth and secure.",
        visionTitle: "Our Vision",
        visionDescription:
          "We aim to make moving effortless and accessible for all through innovation and reliability.",
        evolutionTitle: "A Company Evolution",
        evolution2015: "Company Founded",
        evolution2017: "First Major Project",
        evolution2019: "Expansion to New Markets",
        evolution2021: "Awarded Best Startup",
      },
      movingService: {
        services: "Services",
        title: "Professional Moving Services",
        description1:
          "Moving can be a daunting task, but with our professional team, you can enjoy a smooth and hassle-free experience. Whether you're relocating your home or office, we provide efficient, safe, and affordable moving solutions tailored to your needs. From packing to transportation, we handle every step with care and precision.",
        subtitle: "Reliable and Hassle-Free Moving Services",
        description2:
          "Our team of experienced movers is dedicated to making your move as seamless as possible. We offer a range of services to meet your specific needs, including full-service packing, furniture disassembly, and transportation. We work around your schedule to ensure a smooth transition to your new location.",
        description3:
          "Every move is unique, which is why we offer flexible and customizable moving plans. Whether you need comprehensive packing services or just transportation, we are here to assist you. Our goal is to make your move as stress-free as possible.",
        description4:
          "Getting started is simple! Fill out our quick and easy form to receive a free, no-obligation quote for your move. Our friendly team will assess your needs and provide a personalized estimate. Let us handle the heavy lifting while you focus on settling into your new space.",
        description5:
          "Moving is more than just transporting boxes—it’s about transitioning to a new chapter in your life. That’s why we go above and beyond to make your move as seamless as possible. With years of experience, a highly trained team, and a commitment to customer satisfaction, we ensure that your belongings are handled with the utmost care.",
        description6:
          "Our services cover both local and long-distance moves, and we offer additional support such as packing, unpacking, and secure storage solutions. Whether you’re moving to a new home, apartment, or office, we tailor our services to fit your unique needs. We also provide transparent pricing, so you know exactly what to expect—no hidden fees, just reliable service you can trust.",
      },
      cleaningService: {
        services: "Services",
        title: "Professional Cleaning Services",
        description1:
          "Maintaining a clean and healthy environment is essential, whether it's your home or office. Our professional cleaning services ensure that your space is spotless and hygienic. We offer comprehensive cleaning solutions tailored to your specific needs, providing you with peace of mind and a pristine environment.",
        subtitle: "Comprehensive and Reliable Cleaning Services",
        description2:
          "Our team of experienced cleaners is dedicated to delivering top-notch cleaning services. We use high-quality cleaning products and equipment to ensure that every corner of your space is thoroughly cleaned. From regular maintenance to deep cleaning, we offer a range of services to meet your needs.",
        description3:
          "We understand that every space is unique, which is why we offer customizable cleaning plans. Whether you need daily, weekly, or monthly cleaning, we can create a schedule that works for you. Our goal is to provide you with a clean and comfortable environment without any hassle.",
        description4:
          "Getting started is easy! Fill out our quick and simple form to receive a free, no-obligation quote for your cleaning needs. Our friendly team will assess your requirements and provide a personalized estimate. Let us take care of the cleaning while you focus on what matters most.",
        description5:
          "Cleaning is more than just removing dirt—it’s about creating a healthy and inviting space. That’s why we go above and beyond to ensure that your space is not only clean but also safe and welcoming. With years of experience, a highly trained team, and a commitment to customer satisfaction, we guarantee exceptional results.",
        description6:
          "Our services cover both residential and commercial cleaning, and we offer additional support such as window cleaning, carpet cleaning, and upholstery cleaning. Whether you need a one-time deep clean or ongoing maintenance, we tailor our services to fit your unique needs. We also provide transparent pricing, so you know exactly what to expect—no hidden fees, just reliable service you can trust.",
      },
      handymanService: {
        services: "Services",
        title: "Professional Handyman Services",
        description1:
          "Keeping your property in top condition is essential, whether it's your home or office. Our professional handyman services ensure that all your repair and maintenance needs are met with precision and care. We offer a wide range of handyman solutions tailored to your specific requirements, providing you with peace of mind and a well-maintained environment.",
        subtitle: "Comprehensive and Reliable Handyman Services",
        description2:
          "Our team of experienced handymen is dedicated to delivering top-notch services. We use high-quality tools and materials to ensure that every job is completed to the highest standards. From minor repairs to major installations, we offer a range of services to meet your needs.",
        description3:
          "We understand that every property is unique, which is why we offer customizable handyman plans. Whether you need regular maintenance or a one-time repair, we can create a schedule that works for you. Our goal is to provide you with a well-maintained and comfortable environment without any hassle.",
        description4:
          "Getting started is easy! Fill out our quick and simple form to receive a free, no-obligation quote for your handyman needs. Our friendly team will assess your requirements and provide a personalized estimate. Let us take care of the repairs while you focus on what matters most.",
        description5:
          "Handyman services are more than just fixing things—it’s about maintaining a safe and functional space. That’s why we go above and beyond to ensure that your property is not only well-maintained but also safe and welcoming. With years of experience, a highly trained team, and a commitment to customer satisfaction, we guarantee exceptional results.",
        description6:
          "Our services cover both residential and commercial properties, and we offer additional support such as furniture assembly, painting, and electrical work. Whether you need a small repair or a major renovation, we tailor our services to fit your unique needs. We also provide transparent pricing, so you know exactly what to expect—no hidden fees, just reliable service you can trust.",
      },
      contactPage: {
        title: "Contact Us",
        subtitle: "Get in Touch",
        mainTitle: "We're here to help you",
        paragraph1:
          "If you have any questions or need further information, please feel free to contact us. Our team is always ready to assist you with your moving needs.",
        paragraph2:
          "You can reach us via phone, email, or by filling out the contact form. We look forward to hearing from you and making your move as smooth as possible.",
      },
    },
  },
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        about: "Biz haqimizda",
        contact: "Bog‘lanish",
        services: "Xizmatlar",
        learnMore: "Ma'lumot olish",
        getQuote: "Narxni bilish",
        servicesInfo: {
          moving: {
            title: "Ko‘chirish Xizmatlari",
            desc: "Bizning tajribali ko‘chirish xizmatimiz bilan silliq va muammosiz ko‘chib o‘ting. Qadoqlashdan tortib, transportgacha hamma narsani hal qilamiz.",
          },
          cleaning: {
            title: "Tozalash Xizmatlari",
            desc: "Uyingiz yoki ofisingiz uchun to‘liq va samarali tozalash xizmatlarimizdan bahramand bo‘ling.",
          },
          handyman: {
            title: "Usta Xizmatlari",
            desc: "Kichik ta’mirlashlardan tortib, mebel yig‘ishgacha ishonchli usta xizmatlarimizni taklif qilamiz.",
          },
        },
      },
      main: {
        mainTitle: "Ko‘chishni biz bilan oson bajaring",
        mainDescription:
          "Uzoq yillik tajribamiz bilan sizning ko‘chish jarayoningizni oson va samarali amalga oshiramiz.",
      },
      servicesComponent: {
        services: "Xizmatlar",
        title: "Kompaniyamizning eng yaxshi xizmatlaridan foydalaning",
        moving: {
          title: "Ko‘chirish xizmatlari",
          description:
            "Ko‘chayapsizmi? Biz barchasini osonlashtiramiz! Professional jamoamiz qadoqlashdan tortib, transportgacha barchasini bajaradi.",
        },
        handyman: {
          title: "Usta xizmatlari",
          description:
            "Uyingiz yoki ofisingizda kichik ta’mirlash ishlari kerakmi? Bizning ustalarimiz har qanday mayda ta’mirlash ishlarini bajarishadi.",
        },
        cleaning: {
          title: "Tozalash xizmatlari",
          description:
            "Sizga toza va sog‘lom muhit kerakmi? Bizning tozalash xizmatlarimiz sizga eng yaxshi natijalarni taqdim etadi.",
        },
      },
      testimonials: {
        title:
          "Mijozlarimiz biz haqimizda.",
        review1: {
          text: "Juda silliq ko‘chish! Jamoa tez, ehtiyotkor va juda professional edi.",
          name: "- Lee Sims",
        },
        review2: {
          text: "Ajoyib xizmat! Ular hamma narsani ehtiyotkorlik bilan bajardilar, butun jarayon hech qanday stresssiz o‘tdi.",
          name: "- Jane Doe",
        },
        review3: {
          text: "Tavsiya qilaman! Ko‘chirish jamoasi samimiy, tezkor va juda tartibli edi.",
          name: "- John Smith",
        },
        review4: {
          text: "Hamma narsa xavfsiz yetib keldi va jamoa bilan ishlash juda yoqimli bo‘ldi!",
          name: "- Emily Johnson",
        },
      },
      infoComponent: {
        reliableService: "Ishonchli xizmat, ajoyib natijalar",
        whyChooseUs: "Nega bizni tanlaysiz?",
        trustedProfessionals: {
          title: "Ishonchli mutaxassislar",
          description:
            "Bizning tajribali jamoamiz sizga yuqori sifatli xizmatni taqdim etish uchun harakat qiladi.",
        },
        effortlessMoving: {
          title: "Oson Ko‘chirish",
          description:
            "Biz sizning buyumlaringizni aniqlik va ehtiyotkorlik bilan tashiymiz, ko‘chish jarayonini silliq va muammosiz o‘tishini ta’minlaymiz.",
        },

        customerSatisfaction: {
          title: "Mijozlar Qoniqishi",
          description:
            "Sizning baxtingiz biz uchun muhim! Ishonchli va yuqori sifatli xizmat ko‘rsatish uchun qo‘shimcha harakat qilamiz.",
        },
      },
      faq: {
        title: "Savollaringiz bormi? Bizda javoblar bor!",
        subtitle: "Ko‘p beriladigan savollar",
        question1: {
          question: "Ko‘chirish xizmatini qanday buyurtma qilishim mumkin?",
          answer:
            "Xizmatimizni onlayn yoki telefon orqali osongina buyurtma qilishingiz mumkin. Sizga qulay vaqtni tanlab, jadvalga kiritamiz!",
        },
        question2: {
          question: "Qaysi hududlarga xizmat ko‘rsatasiz?",
          answer:
            "Biz barcha yirik shaharlarga va ularning atrofidagi hududlarga xizmat ko‘rsatamiz. Hududingiz qamrab olinganligini tasdiqlash uchun biz bilan bog‘laning.",
        },
        question3: {
          question: "Siz qadoqlash xizmatlarini taklif qilasizmi?",
          answer:
            "Ha, biz sizning buyumlaringiz xavfsiz qadoqlanishi va tashilishi uchun professional qadoqlash xizmatlarini taklif qilamiz.",
        },
        question4: {
          question: "Qaysi buyumlarni tashimaysiz?",
          answer:
            "Biz xavfli materiallar, tez buziladigan mahsulotlar yoki noqonuniy tashish taqiqlangan narsalarni tashimaymiz. Cheklangan buyumlarning to‘liq ro‘yxati uchun biz bilan bog‘laning.",
        },
        question5: {
          question: "Ko‘chishga qanday tayyorgarlik ko‘rishim kerak?",
          answer:
            "Buyumlaringiz ro‘yxatini tuzishni, qutilarni belgilashni va barcha narsalarni xavfsiz joylashtirishni tavsiya qilamiz. Bizning jamoamiz qo‘shimcha maslahatlar va yordam berishi mumkin.",
        },
      },
      contactComponent: {
        title: "Bugunoq biz bilan bog'laning!",
        button: "Bron qilish",
      },
      servicesPage: {
        title: "Bizning Xizmatlarimiz",
        moving: {
          title: "Professional Ko‘chirish Xizmatlari!",
        },
        cleaning: {
          title: "Xavotirsiz Tozalash Xizmatlari",
        },
        handyman: {
          title: "Ishonchli Usta Xizmatlari!",
        },
      },
      footer: {
        description:
          "Biz ishonchli, stresssiz ko‘chirish xizmatini e'tibor va professionallik bilan taqdim etamiz.",
        bookMove: "Ko‘chirishni bron qiling",
        helpAndServices: "Yordam va xizmatlar",
        toExplore: "Ko‘rib chiqish",
        aboutUs: "Biz haqimizda",
        links: {
          howDoesItWork: "Bu qanday ishlaydi",
          faqs: "Ko‘p so‘raladigan savollar",
          contact: "Aloqa",
          moving: "Ko‘chirish",
          cleaning: "Tozalash",
          handyman: "Usta",
          info: "Ma'lumot",
          timeline: "Vaqt jadvali",
        },
      },
      about: {
        title: "Biz Haqimizda",
        subtitle: "Bizni Yaxshiroq Bilib Oling",
        mainTitle: "Biz o‘z ishimizga diqqat bilan yondashamiz",
        paragraph1:
          "Bizning kompaniyamiz muammosiz va stresssiz ko‘chirish xizmatlariga ixtisoslashgan. Ko‘chish muvaffaqiyatli bo‘lishi uchun zarur bo‘lgan barcha jihatlarni chuqur tushunib, har bir ishda samaradorlik, e’tibor va ishonchlilikni ta’minlaymiz—mahalliy ko‘chish, uzoq masofali ko‘chish yoki tijorat ko‘chish bo‘lishidan qat'i nazar.",
        paragraph2:
          "Jamoamiz sizning buyumlaringizni katta ehtiyotkorlik bilan tashish, ularning xavfsiz va o‘z vaqtida yetib borishini ta’minlashga sodiqdir. Qadoqlash va yuklashdan tortib, tashish va joyiga qo‘yishgacha bo‘lgan jarayonni soddalashtiramiz, shunda siz yangi joyga moslashishga e’tibor qaratishingiz mumkin.",
        contactButton: "Biz bilan bog‘laning",
        missionTitle: "Bizning Missiyamiz",
        missionDescription:
          "Biz professionallik va g‘amxo‘rlik bilan stresssiz ko‘chishni ta’minlaymiz.",
        visionTitle: "Bizning Vizyonimiz",
        visionDescription:
          "Biz ko‘chishni oson va hammaga qulay qilishga intilamiz.",
        evolutionTitle: "Kompaniyaning Rivojlanishi",
        evolution2015: "Kompaniya Tashkil Etildi",
        evolution2017: "Birinchi Katta Loyiha",
        evolution2019: "Yangi Bozorlarga Chiqish",
        evolution2021: "Eng Yaxshi Startap Mukofoti",
      },
      movingService: {
        services: "Xizmatlar",
        title: "Professional Ko‘chirish Xizmatlari",
        description1:
          "Ko‘chish mashaqqatli jarayon bo‘lishi mumkin, lekin bizning professional jamoamiz bilan siz muammosiz va oson ko‘chishni ta’minlaysiz. Uy yoki ofisingizni ko‘chirishdan qat’i nazar, biz sizning ehtiyojlaringizga moslashgan samarali, xavfsiz va arzon ko‘chirish echimlarini taqdim etamiz. O‘rashdan tashishga qadar har bir bosqichni e’tibor bilan bajarib beramiz.",
        subtitle: "Ishonchli va Muammosiz Ko‘chirish Xizmatlari",
        description2:
          "Bizning tajribali jamoamiz sizning ko‘chishingizni imkon qadar oson va samarali qilishga bag‘ishlangan. To‘liq o‘rash, mebelni qismlarga ajratish va tashish kabi xizmatlarni taklif qilamiz. Biz sizning jadvalingizga mos ravishda ishlaymiz va yangi joyingizga ko‘chishingizni silliq ta’minlaymiz.",
        description3:
          "Har bir ko‘chish o‘ziga xosdir, shuning uchun biz moslashuvchan va shaxsiylashtirilgan ko‘chirish rejalari taklif qilamiz. To‘liq xizmat yoki faqat transport kerak bo‘lsa ham, biz sizga yordam beramiz. Bizning maqsadimiz – sizga stresssiz ko‘chish jarayonini ta’minlash.",
        description4:
          "Boshlash juda oson! Tez va sodda shaklni to‘ldiring va ko‘chish bo‘yicha bepul, majburiyatsiz narx taklifini oling. Bizning jamoamiz sizning ehtiyojlaringizni baholaydi va shaxsiylashtirilgan taklif beradi. Og‘ir yuklarni biz ko‘taramiz, siz esa yangi joyga joylashishni boshlaysiz.",
        description5:
          "Ko‘chish faqat qutilarni tashish emas – bu sizning hayotingizdagi yangi bosqichga o‘tishdir. Shuning uchun biz bu jarayonni imkon qadar osonlashtirishga harakat qilamiz. Ko‘p yillik tajribamiz, malakali jamoamiz va mijozlarimiz qoniqishiga bo‘lgan sadoqatimiz bilan sizning buyumlaringiz xavfsiz qo‘llarda ekanligiga kafolat beramiz.",
        description6:
          "Bizning xizmatlarimiz mahalliy va uzoq masofali ko‘chishlarni qamrab oladi, shuningdek, o‘rash, o‘rashdan chiqarish va xavfsiz saqlash echimlarini taklif qilamiz. Siz uy, kvartira yoki ofisga ko‘chayotgan bo‘lsangiz ham, xizmatlarimizni sizning ehtiyojlaringizga moslashtiramiz. Shuningdek, bizda shaffof narxlash tizimi mavjud – hech qanday yashirin to‘lovlar yo‘q, faqat ishonchli xizmat.",
      },
      cleaningService: {
        services: "Xizmatlar",
        title: "Professional Tozalash Xizmatlari",
        description1:
          "Toza va sog‘lom muhitni saqlash juda muhim, xoh u uy bo‘lsin, xoh ofis. Bizning professional tozalash xizmatlarimiz sizning joyingizni beg‘ubor va gigiyenik holatda saqlashni ta’minlaydi. Biz sizning ehtiyojlaringizga moslashtirilgan keng qamrovli tozalash yechimlarini taklif qilamiz, sizga esa xotirjamlik va pokizalik baxsh etamiz.",
        subtitle: "Keng Qamrovli va Ishonchli Tozalash Xizmatlari",
        description2:
          "Bizning tajribali tozalash jamoamiz yuqori sifatli xizmat ko‘rsatishga bag‘ishlangan. Har bir burchakni puxta tozalash uchun biz yuqori sifatli tozalash vositalari va uskunalaridan foydalanamiz. Doimiy parvarishdan tortib chuqur tozalashgacha bo‘lgan xizmatlarni taklif qilamiz.",
        description3:
          "Har bir joy o‘ziga xos bo‘lgani uchun biz moslashtirilgan tozalash rejalari taklif qilamiz. Kunlik, haftalik yoki oylik tozalash kerak bo‘lsa, biz sizga mos jadvalni tuzamiz. Bizning maqsadimiz – sizga hech qanday muammosiz toza va qulay muhit yaratish.",
        description4:
          "Boshlash juda oson! Tez va sodda shaklni to‘ldiring va tozalash bo‘yicha bepul, majburiyatsiz narx taklifini oling. Bizning jamoamiz sizning ehtiyojlaringizni baholaydi va shaxsiylashtirilgan taklif beradi. Biz tozalash ishlarini o‘z zimmamizga olamiz, siz esa muhim narsalarga e’tibor qaratasiz.",
        description5:
          "Tozalash shunchaki kirni yo‘qotish emas – bu sog‘lom va yoqimli muhit yaratishdir. Shuning uchun biz sizning joyingiz nafaqat toza, balki xavfsiz va mehmondo‘st bo‘lishi uchun qo‘shimcha harakat qilamiz. Ko‘p yillik tajriba, yuqori malakali jamoa va mijozlar ehtiyojiga sodiqlik orqali biz a’lo natijalarga kafolat beramiz.",
        description6:
          "Bizning xizmatlarimiz turar-joy va tijorat binolarini tozalashni qamrab oladi. Shuningdek, derazalarni yuvish, gilam tozalash va yumshoq mebel tozalash kabi qo‘shimcha xizmatlarni taklif qilamiz. Agar sizga bir martalik chuqur tozalash yoki muntazam parvarish kerak bo‘lsa, biz xizmatlarimizni sizning ehtiyojlaringizga moslashtiramiz. Bundan tashqari, biz shaffof narxlash tizimini ta’minlaymiz – hech qanday yashirin to‘lovlar yo‘q, faqat ishonchli xizmat.",
      },
      handymanService: {
        services: "Xizmatlar",
        title: "Professional Usta Xizmatlari",
        description1:
          "Mulkni yaxshi holatda saqlash juda muhim, xoh u uy bo‘lsin, xoh ofis. Bizning professional usta xizmatlarimiz barcha ta’mirlash va texnik xizmat ehtiyojlaringizni aniqlik va ehtiyotkorlik bilan bajarilishini ta’minlaydi. Biz sizning talablaringizga moslashtirilgan keng qamrovli usta xizmatlarini taklif qilamiz, bu esa sizga xotirjamlik va yaxshi parvarish qilingan muhitni ta’minlaydi.",
        subtitle: "Keng Qamrovli va Ishonchli Usta Xizmatlari",
        description2:
          "Bizning tajribali ustalar jamoamiz yuqori sifatli xizmat ko‘rsatishga bag‘ishlangan. Biz har bir ishni eng yuqori standartlarda bajarish uchun sifatli asbob-uskunalar va materiallardan foydalanamiz. Kichik ta’mirlashdan tortib katta o‘rnatishgacha bo‘lgan xizmatlarni taqdim etamiz.",
        description3:
          "Har bir mulk o‘ziga xos bo‘lgani uchun biz moslashtirilgan usta xizmat rejalari taklif qilamiz. Agar sizga muntazam texnik xizmat yoki faqat bir martalik ta’mirlash kerak bo‘lsa, biz sizga mos jadvalni tuzamiz. Bizning maqsadimiz – sizga qulay va yaxshi parvarish qilingan muhit yaratish.",
        description4:
          "Boshlash juda oson! Tez va sodda shaklni to‘ldiring va usta xizmatlari bo‘yicha bepul, majburiyatsiz narx taklifini oling. Bizning jamoamiz sizning ehtiyojlaringizni baholaydi va shaxsiylashtirilgan taklif beradi. Biz ta’mirlash ishlarini o‘z zimmamizga olamiz, siz esa muhim narsalarga e’tibor qaratasiz.",
        description5:
          "Usta xizmatlari shunchaki narsalarni ta’mirlash emas – bu xavfsiz va funksional muhitni ta’minlashdir. Shuning uchun biz sizning mulkingiz nafaqat yaxshi holatda, balki xavfsiz va qulay bo‘lishi uchun qo‘shimcha harakat qilamiz. Ko‘p yillik tajriba, yuqori malakali jamoa va mijozlar ehtiyojiga sodiqlik orqali biz a’lo natijalarga kafolat beramiz.",
        description6:
          "Bizning xizmatlarimiz turar-joy va tijorat binolarini ta’mirlashni qamrab oladi. Bundan tashqari, mebel yig‘ish, bo‘yoq ishlari va elektr ishlar kabi qo‘shimcha xizmatlarni ham taklif qilamiz. Agar sizga kichik ta’mirlash yoki katta ta’mir ishlari kerak bo‘lsa, biz xizmatlarimizni sizning ehtiyojlaringizga moslashtiramiz. Bundan tashqari, biz shaffof narxlash tizimini ta’minlaymiz – hech qanday yashirin to‘lovlar yo‘q, faqat ishonchli xizmat.",
      },
      contactPage: {
        title: "Biz bilan bog‘laning",
        subtitle: "Aloqa",
        mainTitle: "Sizga yordam berish uchun shu yerdamiz",
        paragraph1:
          "Agar sizda savollar bo‘lsa yoki qo‘shimcha ma’lumot kerak bo‘lsa, biz bilan bemalol bog‘laning. Bizning jamoamiz sizning ko‘chish ehtiyojlaringiz bo‘yicha har doim yordam berishga tayyor.",
        paragraph2:
          "Biz bilan telefon, elektron pochta yoki bog‘lanish shakli orqali aloqaga chiqishingiz mumkin. Sizdan xabar olishdan xursand bo‘lamiz va ko‘chishingizni iloji boricha silliq o‘tishini ta’minlaymiz.",
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "О нас",
        contact: "Контакты",
        services: "Услуги",
        learnMore: "Узнать больше",
        getQuote: "Получить цену",
        servicesInfo: {
          moving: {
            title: "Услуги по переезду",
            desc: "Переезжайте без стресса с нашей профессиональной командой. Мы занимаемся упаковкой, транспортировкой и гарантируем надежность.",
          },
          cleaning: {
            title: "Услуги уборки",
            desc: "Наслаждайтесь чистотой с нашими профессиональными клининговыми услугами.",
          },
          handyman: {
            title: "Муж на час",
            desc: "Мы поможем вам с мелким ремонтом, сборкой мебели и другими бытовыми задачами.",
          },
        },
      },
      main: {
        mainTitle: "Сделайте переезд легким с нами",
        mainDescription:
          "Мы профессионально подходим к каждому этапу переезда, делая его удобным и простым для вас.",
      },
      servicesComponent: {
        services: "Услуги",
        title: "Получите лучшие услуги от нашей компании",
        moving: {
          title: "Услуги по переезду",
          description:
            "Планируете переезд? Мы сделаем его удобным! Наши специалисты обеспечат упаковку и безопасную транспортировку ваших вещей.",
        },
        handyman: {
          title: "Муж на час",
          description:
            "Нужно починить мебель или провести мелкий ремонт? Наши мастера готовы помочь.",
        },
        cleaning: {
          title: "Услуги уборки",
          description:
            "Чистота – это залог здоровья! Мы обеспечим профессиональную уборку вашего дома или офиса.",
        },
      },
      testimonials: {
        title: "Посмотрите, что наши клиенты говорят о наших услугах.",
        review1: {
          text: "Переезд прошел гладко! Команда работала быстро, аккуратно и профессионально.",
          name: "- Lee Sims",
        },
        review2: {
          text: "Отличный сервис! Они с заботой отнеслись ко всему, и весь процесс прошел без стресса.",
          name: "- Jane Doe",
        },
        review3: {
          text: "Очень рекомендую! Грузчики были дружелюбными, оперативными и хорошо организованными.",
          name: "- John Smith",
        },
        review4: {
          text: "Все прибыло в целости, и работать с командой было приятно!",
          name: "- Emily Johnson",
        },
      },
      infoComponent: {
        reliableService: "Надежный сервис, отличные результаты",
        whyChooseUs: "Почему выбирают нас?",
        trustedProfessionals: {
          title: "Проверенные профессионалы",
          description:
            "Наша команда имеет большой опыт и предлагает только качественные услуги.",
        },
        effortlessMoving: {
          title: "Легкий Переезд",
          description:
            "Мы перевозим ваши вещи с точностью и заботой, обеспечивая плавный и беспроблемный процесс переезда.",
        },

        customerSatisfaction: {
          title: "Удовлетворенность Клиентов",
          description:
            "Ваше счастье – наш приоритет! Мы прилагаем дополнительные усилия, чтобы предоставить вам надежный и первоклассный сервис.",
        },
      },
      faq: {
        title: "Есть вопросы? У нас есть ответы!",
        subtitle: "Часто задаваемые вопросы",
        question1: {
          question: "Как заказать услугу переезда?",
          answer:
            "Вы можете легко заказать наши услуги онлайн или по телефону. Мы подберем удобное для вас время!",
        },
        question2: {
          question: "Какие районы вы обслуживаете?",
          answer:
            "Мы работаем в крупных городах и прилегающих районах. Свяжитесь с нами, чтобы уточнить, обслуживаем ли мы ваш район.",
        },
        question3: {
          question: "Вы предоставляете услуги упаковки?",
          answer:
            "Да, мы предлагаем профессиональные услуги упаковки, чтобы обеспечить безопасную транспортировку ваших вещей.",
        },
        question4: {
          question: "Есть ли вещи, которые вы не перевозите?",
          answer:
            "Мы не перевозим опасные материалы, скоропортящиеся товары и предметы, запрещенные к транспортировке. Свяжитесь с нами, чтобы получить полный список ограниченных предметов.",
        },
        question5: {
          question: "Как подготовиться к переезду?",
          answer:
            "Мы рекомендуем составить список вещей, маркировать коробки и убедиться, что все надежно упаковано. Наша команда может дать дополнительные советы и помочь вам.",
        },
      },

      contactComponent: {
        title: "Свяжитесь с нами сегодня!",
        button: "забронировать",
      },
      servicesPage: {
        title: "Наши Услуги",
        moving: {
          title: "Профессиональные Услуги по Переезду!",
        },
        cleaning: {
          title: "Беспроблемные Услуги по Уборке",
        },
        handyman: {
          title: "Надежные Услуги Мастера!",
        },
      },
      footer: {
        description:
          "Мы предоставляем надежный и безстрессовый переезд с заботой и профессионализмом.",
        bookMove: "Забронировать переезд",
        helpAndServices: "Помощь и услуги",
        toExplore: "Исследовать",
        aboutUs: "О нас",
        links: {
          howDoesItWork: "Как это работает",
          faqs: "Частые вопросы",
          contact: "Контакты",
          moving: "Переезд",
          cleaning: "Уборка",
          handyman: "Мастер",
          info: "Информация",
          timeline: "График",
        },
      },
      about: {
        title: "О Нас",
        subtitle: "Узнайте о нас больше",
        mainTitle: "Мы полностью сосредоточены на том, что делаем лучше всего",
        paragraph1:
          "В нашей компании мы специализируемся на плавных и безстрессовых переездах. Глубоко понимая, что делает переезд успешным, мы обеспечиваем эффективность, заботу и надежность в каждом заказе — будь то местный переезд, междугородний или коммерческий.",
        paragraph2:
          "Наша команда стремится обращаться с вашими вещами максимально бережно, гарантируя их безопасную и своевременную доставку. От упаковки и погрузки до перевозки и распаковки — мы упрощаем процесс, чтобы вы могли сосредоточиться на обустройстве в новом месте.",
        contactButton: "Свяжитесь с нами",
        missionTitle: "Наша миссия",
        missionDescription:
          "Мы обеспечиваем безстрессовый переезд с заботой и профессионализмом.",
        visionTitle: "Наше видение",
        visionDescription:
          "Мы стремимся сделать переезд легким и доступным для всех.",
        evolutionTitle: "Развитие Компании",
        evolution2015: "Основание Компании",
        evolution2017: "Первый Крупный Проект",
        evolution2019: "Выход на Новые Рынки",
        evolution2021: "Признание Лучшим Стартапом",
      },
      movingService: {
        services: "Услуги",
        title: "Профессиональные Услуги по Переезду",
        description1:
          "Переезд может быть сложным, но с нашей профессиональной командой он пройдет легко и без проблем. Независимо от того, переезжаете ли вы в новый дом или офис, мы предоставляем эффективные, безопасные и доступные решения для переезда, адаптированные под ваши потребности. Мы бережно относимся ко всем этапам, от упаковки до транспортировки.",
        subtitle: "Надежные и Беспроблемные Услуги по Переезду",
        description2:
          "Наша опытная команда делает все возможное, чтобы ваш переезд прошел максимально гладко. Мы предлагаем широкий спектр услуг, включая полную упаковку, разборку мебели и транспортировку. Мы подстраиваемся под ваш график, чтобы сделать ваш переход в новый дом или офис легким и комфортным.",
        description3:
          "Каждый переезд уникален, поэтому мы предлагаем гибкие и индивидуальные планы. Нужны ли вам полные услуги по упаковке или просто транспортировка, мы готовы помочь. Наша цель – сделать ваш переезд максимально беззаботным.",
        description4:
          "Начать просто! Заполните нашу быструю и удобную форму, чтобы получить бесплатную оценку стоимости переезда без обязательств. Наша дружелюбная команда оценит ваши потребности и предложит персонализированную смету. Доверьте тяжелую работу нам, а сами наслаждайтесь переездом.",
        description5:
          "Переезд – это не просто перевозка коробок, это начало нового этапа в жизни. Именно поэтому мы стараемся сделать этот процесс максимально удобным. Благодаря многолетнему опыту, квалифицированной команде и приверженности удовлетворению клиентов мы гарантируем, что ваши вещи будут в надежных руках.",
        description6:
          "Наши услуги охватывают как местные, так и междугородние переезды. Мы также предлагаем дополнительные услуги, такие как упаковка, распаковка и безопасное хранение. Независимо от того, переезжаете ли вы в новый дом, квартиру или офис, мы подбираем услуги под ваши потребности. Мы также предлагаем прозрачные цены – никаких скрытых платежей, только надежный сервис.",
      },
      cleaningService: {
        services: "Услуги",
        title: "Профессиональные Услуги по Уборке",
        description1:
          "Поддержание чистой и здоровой среды важно как для дома, так и для офиса. Наши профессиональные услуги по уборке обеспечат безупречную чистоту и гигиену вашего помещения. Мы предлагаем комплексные решения по уборке, адаптированные под ваши индивидуальные потребности, даря вам спокойствие и комфорт.",
        subtitle: "Комплексные и Надежные Услуги по Уборке",
        description2:
          "Наша опытная команда клинеров стремится предоставлять первоклассные услуги. Мы используем качественные чистящие средства и оборудование, чтобы обеспечить тщательную уборку каждого уголка вашего помещения. От регулярного ухода до глубокой чистки – у нас есть широкий спектр услуг для вас.",
        description3:
          "Мы понимаем, что каждое пространство уникально, поэтому предлагаем гибкие и персонализированные планы уборки. Нужна ежедневная, еженедельная или ежемесячная уборка? Мы составим удобный для вас график. Наша цель – предоставить вам чистую и уютную среду без лишних забот.",
        description4:
          "Начать легко! Просто заполните нашу быструю и удобную форму, чтобы получить бесплатную оценку стоимости уборки без каких-либо обязательств. Наша команда оценит ваши потребности и предложит индивидуальный расчет. Мы берем на себя уборку, а вы можете сосредоточиться на важных делах.",
        description5:
          "Уборка – это не просто устранение грязи, это создание здоровой и уютной атмосферы. Поэтому мы делаем все возможное, чтобы ваше помещение было не только чистым, но и безопасным и гостеприимным. Благодаря многолетнему опыту, квалифицированной команде и вниманию к клиентам, мы гарантируем высокое качество услуг.",
        description6:
          "Наши услуги охватывают как жилые, так и коммерческие помещения. Мы также предлагаем дополнительные услуги, такие как мойка окон, чистка ковров и мягкой мебели. Нужна разовая генеральная уборка или регулярный уход? Мы подберем решение, соответствующее вашим потребностям. Прозрачное ценообразование без скрытых платежей – только надежный сервис, которому можно доверять.",
      },
      handymanService: {
        services: "Услуги",
        title: "Профессиональные Услуги Мастера",
        description1:
          "Поддержание вашего имущества в отличном состоянии важно как для дома, так и для офиса. Наши профессиональные услуги мастера обеспечат выполнение всех ваших задач по ремонту и техническому обслуживанию с точностью и заботой. Мы предлагаем широкий спектр решений, адаптированных к вашим потребностям, чтобы обеспечить вам спокойствие и ухоженное пространство.",
        subtitle: "Комплексные и Надежные Услуги Мастера",
        description2:
          "Наша опытная команда мастеров стремится предоставлять первоклассные услуги. Мы используем высококачественные инструменты и материалы, чтобы каждая работа выполнялась на высшем уровне. От мелкого ремонта до крупных установок – у нас есть решения для любых задач.",
        description3:
          "Мы понимаем, что каждое помещение уникально, поэтому предлагаем гибкие планы по обслуживанию. Нужен регулярный уход или разовый ремонт? Мы составим график, который вам подойдет. Наша цель – предоставить вам комфортную и ухоженную среду без лишних хлопот.",
        description4:
          "Начать легко! Просто заполните нашу быструю и удобную форму, чтобы получить бесплатную оценку стоимости без обязательств. Наша команда оценит ваши потребности и предложит индивидуальный расчет. Мы позаботимся о ремонте, а вы сможете сосредоточиться на главном.",
        description5:
          "Услуги мастера – это не просто устранение неисправностей, а поддержание безопасного и функционального пространства. Поэтому мы делаем все возможное, чтобы ваш дом или офис были не только ухоженными, но и безопасными. Благодаря многолетнему опыту, профессиональной команде и вниманию к клиентам, мы гарантируем отличные результаты.",
        description6:
          "Наши услуги охватывают жилые и коммерческие помещения. Мы также предлагаем дополнительные услуги, такие как сборка мебели, покраска и электромонтажные работы. Нужно небольшое исправление или капитальный ремонт? Мы подберем оптимальное решение. Честная и прозрачная цена без скрытых платежей – только надежный сервис, которому можно доверять.",
      },
      contactPage: {
        title: "Свяжитесь с нами",
        subtitle: "Обратная связь",
        mainTitle: "Мы здесь, чтобы помочь вам",
        paragraph1:
          "Если у вас есть вопросы или вам нужна дополнительная информация, не стесняйтесь обращаться к нам. Наша команда всегда готова помочь вам с переездом.",
        paragraph2:
          "Вы можете связаться с нами по телефону, электронной почте или заполнив контактную форму. Мы с нетерпением ждем вашего обращения и сделаем все возможное, чтобы ваш переезд прошел максимально гладко.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // Default language
  fallbackLng: "uz", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
