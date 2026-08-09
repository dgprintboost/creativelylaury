const toast = document.getElementById("toast");
const languageSelect = document.getElementById("languageSelect");

const PROFILE = {
  fullName: "SALL Amina Laury",
  handle: "@creativelylaury",
  email: "contact@creativelylaury.com",
  instagram: "https://www.instagram.com/creativelylaury",
  tiktok: "https://www.tiktok.com/@creativelylaury",
  whatsapp: "https://wa.me/message/EKCPHTIRWVYTO1",
};

const translations = {
  fr: {
    title_html: "SALL Amina Laury",
    top_meta: "Création digitale",
    tagline:
      "Je t’aide à structurer ton contenu pour vivre de ta personal brand.",
    quote:
      "Bon dans ton expertise. Mauvais pour devenir LA référence. 🪄 Je suis celle qui arrange ça.",
    ig_title: "Instagram",
    ig_desc: "Coulisses & conseils contenu",
    tt_title: "TikTok",
    tt_desc: "Formats courts & astuces",
    wa_title: "WhatsApp",
    wa_desc: "Écris « contenu » pour construire en 1:1",
    mail_title: "Email",
    save: "Enregistrer",
    share: "Partager",
    mini_note: "Creatively Laury • Carte digitale",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "Lien copié !",
    contact_saved: "Contact prêt à enregistrer",
  },
  en: {
    title_html: "SALL Amina Laury",
    top_meta: "Digital creation",
    tagline:
      "I help you structure your content so you can live off your personal brand.",
    quote:
      "Great at your craft. Not yet THE reference. 🪄 I’m the one who fixes that.",
    ig_title: "Instagram",
    ig_desc: "Behind the scenes & content tips",
    tt_title: "TikTok",
    tt_desc: "Short formats & tips",
    wa_title: "WhatsApp",
    wa_desc: "Send “content” to build 1:1",
    mail_title: "Email",
    save: "Save",
    share: "Share",
    mini_note: "Creatively Laury • Digital card",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "Link copied!",
    contact_saved: "Contact ready to save",
  },
  es: {
    title_html: "SALL Amina Laury",
    top_meta: "Creación digital",
    tagline:
      "Te ayudo a estructurar tu contenido para vivir de tu marca personal.",
    quote:
      "Bueno en lo tuyo. Pero aún no eres LA referencia. 🪄 Yo me encargo de eso.",
    ig_title: "Instagram",
    ig_desc: "Entre bastidores y consejos de contenido",
    tt_title: "TikTok",
    tt_desc: "Formatos cortos y trucos",
    wa_title: "WhatsApp",
    wa_desc: "Escribe «contenido» para trabajar 1:1",
    mail_title: "Correo",
    save: "Guardar",
    share: "Compartir",
    mini_note: "Creatively Laury • Tarjeta digital",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "¡Enlace copiado!",
    contact_saved: "Contacto listo para guardar",
  },
  ar: {
    title_html: "SALL Amina Laury",
    top_meta: "إبداع رقمي",
    tagline:
      "أساعدك على تنظيم محتواك لتعيش من علامتك الشخصية.",
    quote:
      "بارع في مجالك، لكنك لست المرجع بعد. 🪄 أنا من تتكفّل بذلك.",
    ig_title: "إنستغرام",
    ig_desc: "كواليس ونصائح للمحتوى",
    tt_title: "تيك توك",
    tt_desc: "مقاطع قصيرة ونصائح",
    wa_title: "واتساب",
    wa_desc: "أرسل «محتوى» للعمل معًا بشكل فردي",
    mail_title: "البريد الإلكتروني",
    save: "حفظ",
    share: "مشاركة",
    mini_note: "Creatively Laury • بطاقة رقمية",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "تم نسخ الرابط!",
    contact_saved: "جهة الاتصال جاهزة للحفظ",
  },
  de: {
    title_html: "SALL Amina Laury",
    top_meta: "Digitale Kreation",
    tagline:
      "Ich helfe dir, deine Inhalte zu strukturieren, um von deiner Personal Brand zu leben.",
    quote:
      "Stark in deinem Fach. Aber noch nicht DIE Referenz. 🪄 Genau das ändere ich.",
    ig_title: "Instagram",
    ig_desc: "Einblicke & Content-Tipps",
    tt_title: "TikTok",
    tt_desc: "Kurzformate & Tipps",
    wa_title: "WhatsApp",
    wa_desc: "Schreib „Content“ für 1:1-Begleitung",
    mail_title: "E-Mail",
    save: "Speichern",
    share: "Teilen",
    mini_note: "Creatively Laury • Digitale Karte",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "Link kopiert!",
    contact_saved: "Kontakt bereit zum Speichern",
  },
  it: {
    title_html: "SALL Amina Laury",
    top_meta: "Creazione digitale",
    tagline:
      "Ti aiuto a strutturare i tuoi contenuti per vivere del tuo personal brand.",
    quote:
      "Bravo nel tuo mestiere. Ma non ancora IL riferimento. 🪄 Ci penso io.",
    ig_title: "Instagram",
    ig_desc: "Dietro le quinte e consigli sui contenuti",
    tt_title: "TikTok",
    tt_desc: "Formati brevi e consigli",
    wa_title: "WhatsApp",
    wa_desc: "Scrivi «contenuto» per lavorare 1:1",
    mail_title: "Email",
    save: "Salva",
    share: "Condividi",
    mini_note: "Creatively Laury • Carta digitale",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "Link copiato!",
    contact_saved: "Contatto pronto da salvare",
  },
  pt: {
    title_html: "SALL Amina Laury",
    top_meta: "Criação digital",
    tagline:
      "Ajudo-te a estruturar o teu conteúdo para viveres da tua marca pessoal.",
    quote:
      "Bom no que fazes. Mas ainda não és A referência. 🪄 Eu trato disso.",
    ig_title: "Instagram",
    ig_desc: "Bastidores e dicas de conteúdo",
    tt_title: "TikTok",
    tt_desc: "Formatos curtos e dicas",
    wa_title: "WhatsApp",
    wa_desc: "Escreve «conteúdo» para trabalhar 1:1",
    mail_title: "Email",
    save: "Guardar",
    share: "Partilhar",
    mini_note: "Creatively Laury • Cartão digital",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "Link copiado!",
    contact_saved: "Contacto pronto a guardar",
  },
  nl: {
    title_html: "SALL Amina Laury",
    top_meta: "Digitale creatie",
    tagline:
      "Ik help je je content te structureren zodat je van je personal brand kunt leven.",
    quote:
      "Goed in je vak. Nog niet DE referentie. 🪄 Dat los ik op.",
    ig_title: "Instagram",
    ig_desc: "Achter de schermen & contenttips",
    tt_title: "TikTok",
    tt_desc: "Korte formats & tips",
    wa_title: "WhatsApp",
    wa_desc: "Stuur “content” om 1:1 te werken",
    mail_title: "E-mail",
    save: "Opslaan",
    share: "Delen",
    mini_note: "Creatively Laury • Digitale kaart",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "Link gekopieerd!",
    contact_saved: "Contact klaar om op te slaan",
  },
  ru: {
    title_html: "SALL Amina Laury",
    top_meta: "Цифровое творчество",
    tagline:
      "Помогаю структурировать контент, чтобы вы могли жить со своего личного бренда.",
    quote:
      "Вы сильны в своём деле, но пока не ТА самая величина. 🪄 Я это исправлю.",
    ig_title: "Instagram",
    ig_desc: "Закулисье и советы по контенту",
    tt_title: "TikTok",
    tt_desc: "Короткие форматы и советы",
    wa_title: "WhatsApp",
    wa_desc: "Напишите «контент» для работы 1:1",
    mail_title: "Эл. почта",
    save: "Сохранить",
    share: "Поделиться",
    mini_note: "Creatively Laury • Цифровая карта",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "Ссылка скопирована!",
    contact_saved: "Контакт готов к сохранению",
  },
  zh: {
    title_html: "SALL Amina Laury",
    top_meta: "数字创作",
    tagline: "我帮助你梳理内容结构，靠个人品牌谋生。",
    quote: "你精通专业，却还不是那个标杆。🪄 这正是我来解决的。",
    ig_title: "Instagram",
    ig_desc: "幕后花絮与内容技巧",
    tt_title: "TikTok",
    tt_desc: "短视频与技巧",
    wa_title: "WhatsApp",
    wa_desc: "发送「内容」开始一对一合作",
    mail_title: "邮箱",
    save: "保存",
    share: "分享",
    mini_note: "Creatively Laury • 数字名片",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "链接已复制！",
    contact_saved: "联系人准备好保存",
  },
  ja: {
    title_html: "SALL Amina Laury",
    top_meta: "デジタルクリエイション",
    tagline:
      "パーソナルブランドで生きていけるよう、コンテンツの設計をお手伝いします。",
    quote:
      "専門性は十分。でもまだ「第一人者」ではない。🪄 そこを整えるのが私です。",
    ig_title: "Instagram",
    ig_desc: "舞台裏とコンテンツのヒント",
    tt_title: "TikTok",
    tt_desc: "ショート動画とコツ",
    wa_title: "WhatsApp",
    wa_desc: "「コンテンツ」と送って1対1で相談",
    mail_title: "メール",
    save: "保存",
    share: "共有",
    mini_note: "Creatively Laury • デジタルカード",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "リンクをコピーしました！",
    contact_saved: "連絡先は保存準備完了です",
  },
  tr: {
    title_html: "SALL Amina Laury",
    top_meta: "Dijital kreasyon",
    tagline:
      "Kişisel markandan geçinebilmen için içeriğini yapılandırmana yardım ediyorum.",
    quote:
      "İşinde iyisin. Ama henüz O referans değilsin. 🪄 Bunu ben hallederim.",
    ig_title: "Instagram",
    ig_desc: "Kamera arkası ve içerik ipuçları",
    tt_title: "TikTok",
    tt_desc: "Kısa formatlar ve ipuçları",
    wa_title: "WhatsApp",
    wa_desc: "1:1 çalışmak için “içerik” yaz",
    mail_title: "E-posta",
    save: "Kaydet",
    share: "Paylaş",
    mini_note: "Creatively Laury • Dijital kart",
    share_text: "SALL Amina Laury — Creatively Laury",
    copied: "Bağlantı kopyalandı!",
    contact_saved: "Kişi kaydedilmeye hazır",
  },
};

let currentLang = "fr";

function applyTranslations(lang) {
  const dict = translations[lang] || translations.fr;
  currentLang = translations[lang] ? lang : "fr";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) el.innerHTML = dict[key];
  });
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("opacity-100", "translate-y-0");
  setTimeout(
    () => toast.classList.remove("opacity-100", "translate-y-0"),
    2000,
  );
}

// Partage natif, repli sur la copie du lien
document.getElementById("shareBtn").onclick = async () => {
  const dict = translations[currentLang];
  try {
    if (navigator.share) {
      await navigator.share({
        title: PROFILE.fullName,
        text: dict.share_text,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast(dict.copied);
    }
  } catch (e) {
    console.log(e);
  }
};

// Téléchargement vCard
document.getElementById("saveBtn").onclick = () => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:SALL;Amina Laury;;;`,
    `FN:${PROFILE.fullName}`,
    "TITLE:Création digitale",
    `EMAIL;TYPE=INTERNET:${PROFILE.email}`,
    `URL:${PROFILE.instagram}`,
    `X-SOCIALPROFILE;TYPE=instagram:${PROFILE.instagram}`,
    `X-SOCIALPROFILE;TYPE=tiktok:${PROFILE.tiktok}`,
    `NOTE:${PROFILE.handle} • WhatsApp: ${PROFILE.whatsapp}`,
    "END:VCARD",
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "amina-laury-sall.vcf";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(translations[currentLang].contact_saved);
};

languageSelect.onchange = (e) => applyTranslations(e.target.value);

// Init
applyTranslations("fr");
