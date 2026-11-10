/* =========================================================
   Impulse AI Agency — main.js
   ========================================================= */

/* ---------- CONFIGURACIÓN: edita estos 3 valores ---------- */
const CONFIG = {
  // Enlace de tu calendario (Google Calendar "Agenda de citas", Calendly, etc.)
  calendarUrl: "https://calendar.google.com/",
  // Correo que recibe los contactos
  email: "carlos@impulseaiagency.com",
  // Tu perfil o página de empresa en LinkedIn
  linkedinUrl: "https://www.linkedin.com/"
};

/* ---------- Traducciones al inglés ----------
   El español vive en el HTML. Aquí solo está la versión en inglés.
   Para editar un texto en español, cámbialo directamente en index.html. */
const EN = {
  "skip": "Skip to content",
  "nav.services": "Services",
  "nav.process": "How it works",
  "nav.who": "Who it's for",
  "nav.faq": "FAQ",
  "nav.cta": "Book a call",

  "hero.eyebrow": "AI-powered B2B lead generation",
  "hero.title": "Meetings with <span class=\"grad\">B2B decision-makers</span> on your calendar, every week, on <span class=\"grad\">autopilot</span>.",
  "hero.lead": "For companies doing over $10K a month that want to stop relying on referrals. We find your ideal clients, reach out with AI-personalized messages, and a smart assistant books the meeting for you. You just show up and close.",
  "hero.cta1": "Get my free proposal",
  "hero.cta2": "See how it works",
  "hero.p1": "No need to hire reps to prospect",
  "hero.p2": "Zero ad spend",
  "hero.p3": "English and Spanish: US and Latin America",

  "panel.title": "Your meeting engine",
  "panel.s1": "Companies found",
  "panel.s2": "Verified decision-makers",
  "panel.s3": "Personalized messages",
  "panel.s4": "Positive replies",
  "panel.s5": "Meetings booked",
  "panel.note": "Process illustration",
  "feed.1": "Meeting booked · Sales Director · SaaS",
  "feed.2": "Positive reply · CEO · Consulting firm",
  "feed.3": "Meeting booked · General Manager · Logistics",

  "intro.title": "We don't sell “marketing”. <span class=\"grad\">We build systems</span> that book meetings.",
  "intro.text": "Most agencies hand you clicks, followers or a pretty report. We set up, run and optimize a complete B2B outbound system: from finding the person who makes the call to dropping a confirmed meeting on your calendar.",
  "guarantee.title": "Results commitment",
  "guarantee.text": "If we don't land you meetings with decision-makers in your market within the first 90 days, we keep working at no cost until we do.",

  "services.eyebrow": "What we do",
  "services.title": "One engine, <span class=\"grad\">four parts</span> working together",
  "s1.title": "Data and targeting",
  "s1.text": "LinkedIn and directory scraping to find companies doing over $10K a month and the people who make the decision. Every email is verified before we send.",
  "s1.tag": "Clean lists, not bought databases",
  "s2.title": "Cold email that lands in the inbox",
  "s2.text": "Secondary domains, warmed-up mailboxes and SPF, DKIM and DMARC set up so your messages stay out of spam. Plain text, no links in the first email and constant A/B testing.",
  "s2.tag": "Deliverability first",
  "s3.title": "Multichannel LinkedIn outreach",
  "s3.text": "A sequence coordinated with email: profile visit, engagement with their posts, invite and follow-up. By the time your message arrives, they already know your name.",
  "s3.tag": "We warm up before we sell",
  "s4.title": "AI SDR that books for you",
  "s4.text": "AI conversations that reply in minutes, qualify the prospect and book only the right fits on your calendar. Messages personalized with context from their website and profile.",
  "s4.tag": "You just close",

  "process.eyebrow": "How it works",
  "process.title": "From a blank list to a <span class=\"grad\">full calendar</span>",
  "p1.title": "We define your ideal client",
  "p1.text": "Industry, size, revenue, job title and country. We build the list of decision-makers who can actually buy from you.",
  "p2.title": "We personalize with AI",
  "p2.text": "AI reviews each prospect's website and profile and writes a unique opening line. No generic messages.",
  "p3.title": "We reach out via email and LinkedIn",
  "p3.text": "Multichannel sequences that lead with value before selling, with consistent follow-up until we get a reply.",
  "p4.title": "The meeting lands on your calendar",
  "p4.text": "The AI SDR qualifies, answers questions and books. You get a confirmed meeting with the prospect's context.",

  "who.eyebrow": "Who it's for",
  "who.title": "B2B companies that already sell and want <span class=\"grad\">predictable growth</span>",
  "who.text": "We work with businesses doing over $10K a month, with a proven offer, that need more conversations with the right people in the US or Latin America.",
  "chip.1": "SaaS and tech",
  "chip.2": "Consulting firms",
  "chip.3": "Agencies",
  "chip.4": "Professional services",
  "chip.5": "Logistics and transportation",
  "chip.6": "Manufacturing and industrial",
  "chip.7": "Financial services",
  "chip.8": "Corporate training",

  "statement.title": "Your problem isn't traffic. It's not having enough conversations with the people who decide.",
  "statement.text": "We don't hand you a tool to figure out on your own. We set up, run and optimize the whole system: no posting every day, no manual messages and no sales team to hire for prospecting.",
  "statement.cta": "How many meetings could we bring you?",

  "faq.eyebrow": "FAQ",
  "faq.title": "What people ask before getting started",
  "q1": "How soon will I see the first meetings?",
  "a1": "The first two to three weeks go into setting up domains, warming up mailboxes and building your list. First replies usually come in as soon as campaigns go live, and the system improves month over month through A/B testing.",
  "q2": "Will you send emails from my main domain?",
  "a2": "No. We use secondary domains similar to yours to protect your main domain's reputation. Your company email stays untouched.",
  "q3": "Do you work with companies in the US?",
  "a3": "Yes. We prospect in English and Spanish and tailor messaging to each market, following each country's sending rules (such as CAN-SPAM in the US).",
  "q4": "What do I need to have ready?",
  "a4": "An offer that already works, capacity to take new meetings and an open calendar. We handle the rest.",
  "q5": "Does this replace my sales team?",
  "a5": "No, it supercharges it. We generate and qualify the opportunities; your team (or you) focuses on what you do best: closing.",

  "contact.eyebrow": "Let's talk",
  "contact.title": "Request your <span class=\"grad\">free</span> strategy proposal",
  "contact.text": "Tell us about your business and we'll show you how we'd fill your calendar with decision-maker meetings. We'll be honest about whether we can help.",
  "contact.calendar": "I'd rather book directly on the calendar",
  "contact.mail": "Or email us at",

  "form.name": "Name",
  "form.email": "Work email",
  "form.company": "Company",
  "form.web": "Website",
  "form.revenue": "Approximate monthly revenue",
  "form.select": "Select an option",
  "form.r1": "Under $10K",
  "form.r2": "$10K – $50K",
  "form.r3": "$50K – $200K",
  "form.r4": "Over $200K",
  "form.msg": "What kind of clients do you want to reach?",
  "form.consent": "I agree that Impulse AI Agency may use this information to contact me, as described in the <a href=\"privacidad.html\">privacy notice</a>.",
  "form.submit": "Send and get my proposal",

  "footer.about": "AI-powered B2B lead generation systems for the US and Latin America.",
  "footer.links": "Links",
  "footer.contact": "Contact",
  "footer.proposal": "Request a proposal",
  "footer.rights": "All rights reserved",
  "footer.privacy": "Privacy notice"
};

const MSG = {
  es: {
    sending: "Enviando…",
    ok: "¡Gracias! Te escribiremos en menos de 24 horas hábiles.",
    err: "No se pudo enviar. Escríbenos directamente a ",
    invalid: "Revisa los campos marcados en rojo.",
    title: "Impulse AI Agency — Reuniones B2B con IA, en piloto automático"
  },
  en: {
    sending: "Sending…",
    ok: "Thanks! We'll get back to you within one business day.",
    err: "Something went wrong. Email us directly at ",
    invalid: "Please check the fields marked in red.",
    title: "Impulse AI Agency — AI-powered B2B meetings on autopilot"
  }
};

/* ---------- Idioma ---------- */
const ES = {};
const i18nNodes = document.querySelectorAll("[data-i18n]");
i18nNodes.forEach((el) => {
  const key = el.dataset.i18n;
  if (!(key in ES)) ES[key] = el.innerHTML;
});

let currentLang = "es";

function storeLang(lang) {
  try { localStorage.setItem("impulse-lang", lang); } catch (e) { /* sin almacenamiento */ }
}
function savedLang() {
  try { return localStorage.getItem("impulse-lang"); } catch (e) { return null; }
}

function detectLang() {
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "es" || param === "en") return param;
  const saved = savedLang();
  if (saved === "es" || saved === "en") return saved;
  // Idioma del navegador: español → ES; cualquier otro (p. ej. EE.UU.) → EN
  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "es"];
  return String(langs[0]).toLowerCase().startsWith("es") ? "es" : "en";
}

function applyLang(lang) {
  currentLang = lang;
  const dict = lang === "en" ? EN : ES;
  i18nNodes.forEach((el) => {
    const val = dict[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });
  document.documentElement.lang = lang;
  document.title = MSG[lang].title;
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  const langField = document.getElementById("f-lang");
  if (langField) langField.value = lang;
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLang(btn.dataset.lang);
    storeLang(btn.dataset.lang);
  });
});

applyLang(detectLang());

/* ---------- Config: enlaces ---------- */
document.getElementById("calendar-link").href = CONFIG.calendarUrl;
document.getElementById("linkedin-link").href = CONFIG.linkedinUrl;
document.querySelectorAll('a[href^="mailto:"]').forEach((a) => {
  a.href = "mailto:" + CONFIG.email;
  if (a.textContent.includes("@")) a.textContent = CONFIG.email;
});
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Header y menú móvil ---------- */
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Animaciones al hacer scroll ---------- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

/* ---------- Formulario ---------- */
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

function validate() {
  let ok = true;
  form.querySelectorAll("[required]").forEach((input) => {
    const wrap = input.type === "checkbox" ? input.closest(".consent") : input.closest(".field");
    const valid = input.type === "checkbox" ? input.checked : input.checkValidity() && input.value.trim() !== "";
    if (wrap) wrap.classList.toggle("invalid", !valid);
    if (!valid) ok = false;
  });
  return ok;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.className = "form-status";
  if (!validate()) {
    statusEl.textContent = MSG[currentLang].invalid;
    statusEl.classList.add("err");
    return;
  }
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  statusEl.textContent = MSG[currentLang].sending;
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error("send failed");
    statusEl.textContent = MSG[currentLang].ok;
    statusEl.classList.add("ok");
    form.reset();
    applyLang(currentLang);
  } catch (err) {
    statusEl.textContent = MSG[currentLang].err + CONFIG.email;
    statusEl.classList.add("err");
  } finally {
    btn.disabled = false;
  }
});
