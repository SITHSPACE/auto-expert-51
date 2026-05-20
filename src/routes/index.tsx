import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  Send,
  Check,
  Shield,
  Clock,
  MapPin,
  Award,
  Wallet,
  HeartPulse,
  Wrench,
  Gauge,
  Car,
  FileSearch,
  ScanLine,
  Cog,
  Hammer,
  Disc3,
  CircleDot,
  PaintBucket,
  Snowflake,
  Sparkles,
  ChevronDown,
  Star,
  ArrowRight,
  Camera,
  FileCheck2,
  Quote,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import diagEndoscope from "@/assets/diag-endoscope.jpg";
import diagLift from "@/assets/diag-lift.jpg";
import diagComputer from "@/assets/diag-computer.jpg";
import diagThickness from "@/assets/diag-thickness.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "АвтоЭксперт51 — автоподбор и диагностика в Мурманске" },
      {
        name: "description",
        content:
          "Профессиональный автоподбор и выездная диагностика авто с пробегом в Мурманске и области. 12+ лет опыта, 3200+ проверенных авто, 47 пунктов проверки. Экономия до 200 000 ₽.",
      },
      { property: "og:title", content: "АвтоЭксперт51 — автоподбор в Мурманске" },
      { property: "og:description", content: "Найдите честный автомобиль за 3 дня. Экономия до 200 000 ₽." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const WHATSAPP = "https://wa.me/79110623891";
const TELEGRAM = "https://t.me/+79110623891";
const PHONE = "+7 (911) 062-38-91";
const PHONE_HREF = "tel:+79110623891";

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Benefits />
      <Pricing />
      <Checklist />
      <Examples />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <div className="w-9 h-9 rounded-xl bg-gradient-brand grid place-items-center shadow-brand">
            <Car className="w-5 h-5 text-brand-foreground" />
          </div>
          <span>
            АвтоЭксперт<span className="text-gradient-brand">51</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Услуги</a>
          <a href="#checklist" className="hover:text-foreground transition">Что проверяем</a>
          <a href="#examples" className="hover:text-foreground transition">Примеры</a>
          <a href="#reviews" className="hover:text-foreground transition">Отзывы</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-brand text-brand-foreground font-semibold text-sm shadow-brand hover:scale-[1.03] transition"
        >
          <Phone className="w-4 h-4" /> {PHONE}
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroCar}
          alt="Диагностика автомобиля толщиномером"
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 noise-bg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur text-xs sm:text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Мурманск и Мурманская область • работаем с 8:00 до 00:00
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Найдите <span className="text-gradient-brand">честный автомобиль</span><br />
            за 3 дня и сэкономьте<br className="hidden sm:block" /> до <span className="text-gradient-brand">200 000 ₽</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Профессиональный автоподбор и диагностика авто с пробегом. 95% клиентов окупают
            стоимость услуги уже на торге. 12+ лет опыта, 3200+ проверенных машин,
            47 пунктов диагностики.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/30 text-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-semibold">Акция:</span>
            <span className="text-muted-foreground">выездная проверка от 2000 ₽</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-[1.03] transition"
            >
              Оставить заявку <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-surface/80 border border-border backdrop-blur font-semibold hover:bg-surface-elevated transition"
            >
              <Phone className="w-4 h-4" /> Позвонить
            </a>
            <a
              href={WHATSAPP}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-surface/80 border border-border backdrop-blur font-semibold hover:bg-surface-elevated transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[oklch(0.75_0.18_150)]" />
            </a>
            <a
              href={TELEGRAM}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-surface/80 border border-border backdrop-blur font-semibold hover:bg-surface-elevated transition"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 text-[oklch(0.72_0.15_240)]" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <TrustItem icon={<Shield className="w-4 h-4" />}>Письменная гарантия</TrustItem>
            <TrustItem icon={<Award className="w-4 h-4" />}>12+ лет опыта</TrustItem>
            <TrustItem icon={<HeartPulse className="w-4 h-4" />}>Бесплатная консультация</TrustItem>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative rounded-3xl p-6 bg-surface/70 backdrop-blur-xl border border-border shadow-card-premium">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-brand text-brand-foreground text-xs font-bold">
              ПОЛУЧИТЕ РАСЧЁТ ЗА 5 МИНУТ
            </div>
            <QuickForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-accent">{icon}</span>
      {children}
    </div>
  );
}

function QuickForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className={compact ? "space-y-3" : "space-y-4"}
    >
      {!compact && (
        <div>
          <div className="text-xl font-bold">Бесплатная консультация</div>
          <div className="text-sm text-muted-foreground">Перезвоним в течение 10 минут</div>
        </div>
      )}
      <input
        required
        placeholder="Ваше имя"
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition"
      />
      <input
        required
        type="tel"
        placeholder="+7 (___) ___-__-__"
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition"
      />
      <input
        placeholder="Марка / модель авто (необязательно)"
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition"
      />
      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-[1.02] transition"
      >
        {sent ? "Заявка отправлена ✓" : "Получить консультацию"}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}

/* ---------------- Stats ---------------- */
const STATS = [
  { value: "12+", label: "лет на рынке Мурманска", icon: Award },
  { value: "3200+", label: "проверенных автомобилей", icon: Car },
  { value: "47", label: "пунктов диагностики", icon: FileSearch },
  { value: "95%", label: "клиентов окупают услугу", icon: Wallet },
];
function Stats() {
  return (
    <section className="relative py-20 border-y border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/60 transition group"
          >
            <s.icon className="w-7 h-7 text-accent mb-4 group-hover:scale-110 transition" />
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient-brand">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */
const BENEFITS = [
  { icon: Clock, title: "Экономим ваше время", text: "Закрываем поиск авто за 3–7 дней. Вы не тратите выходные на бесконечные просмотры." },
  { icon: Wallet, title: "Экономим деньги", text: "Находим скрытые проблемы и сбиваем цену на торге. Средняя экономия — 80 000–200 000 ₽." },
  { icon: HeartPulse, title: "Экономим нервы", text: "Берём на себя общение с продавцами, проверку юридической чистоты и сделку." },
  { icon: Shield, title: "Письменная гарантия", text: "Заключаем договор и несём ответственность за каждое подобранное авто." },
  { icon: MapPin, title: "Выезд по всей области", text: "Мурманск, Кола, Североморск, Апатиты, Кировск — приедем туда, где стоит машина." },
  { icon: Clock, title: "Работаем 8:00 – 00:00", text: "Без выходных. Срочный выезд — в день обращения." },
];
function Benefits() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Почему мы"
          title={<>Почему выбирают <span className="text-gradient-brand">АвтоЭксперт51</span></>}
          subtitle="Мы не просто проверяем машину — мы защищаем ваши деньги и нервы."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group p-7 rounded-2xl bg-surface border border-border hover:border-accent/60 hover:-translate-y-1 transition-all shadow-card-premium"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-brand grid place-items-center mb-5 shadow-brand">
                <b.icon className="w-6 h-6 text-brand-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
const TARIFFS = [
  {
    name: "Выездная проверка",
    price: "от 2 000 ₽",
    desc: "Полная диагностика выбранного вами автомобиля на месте",
    features: [
      "Выезд эксперта к авто",
      "Проверка ЛКП толщиномером (47 точек)",
      "Компьютерная диагностика OBD",
      "Эндоскопия двигателя",
      "Проверка подвески, рулевого, тормозов",
      "Юридическая проверка (ГИБДД, залоги, ДТП)",
      "Тест-драйв и оценка",
      "Письменное заключение и фотоотчёт",
    ],
    cta: "Заказать проверку",
    accent: false,
  },
  {
    name: "Эксперт на день",
    price: "от 5 000 ₽",
    desc: "Сопровождение на весь день — смотрим столько авто, сколько успеем",
    features: [
      "Всё из тарифа «Выездная проверка»",
      "До 4–5 автомобилей за день",
      "Личное сопровождение эксперта",
      "Помощь с торгом и переговорами",
      "Проверка истории каждого авто",
      "Сравнение вариантов",
      "Рекомендация по выбору",
      "Письменные заключения по всем авто",
    ],
    cta: "Заказать день эксперта",
    accent: true,
    badge: "ПОПУЛЯРНЫЙ",
  },
  {
    name: "Подбор под ключ",
    price: "от 10 000 ₽",
    desc: "Берём весь процесс на себя — от поиска до постановки на учёт",
    features: [
      "Подбор по вашему ТЗ и бюджету",
      "Поиск авто на всех площадках",
      "Фильтрация и обзвон продавцов",
      "Проверка каждого варианта",
      "Торг и сопровождение сделки",
      "Проверка документов и договора",
      "Помощь с переоформлением",
      "Гарантия результата",
    ],
    cta: "Доверить подбор",
    accent: false,
  },
];
function Pricing() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Тарифы"
          title={<>Выберите <span className="text-gradient-brand">подходящий формат</span></>}
          subtitle="От разовой проверки до полного подбора авто под ключ."
        />
        <div className="grid lg:grid-cols-3 gap-6 mt-14">
          {TARIFFS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all flex flex-col ${
                t.accent
                  ? "bg-gradient-to-b from-accent/15 to-surface border-accent/50 shadow-brand lg:-translate-y-4"
                  : "bg-surface border-border hover:border-accent/40"
              }`}
            >
              {t.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-brand text-brand-foreground text-xs font-bold">
                  {t.badge}
                </div>
              )}
              <h3 className="text-2xl font-extrabold">{t.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 min-h-[3rem]">{t.desc}</p>
              <div className="mt-6 text-4xl font-extrabold text-gradient-brand">{t.price}</div>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 grid place-items-center">
                      <Check className="w-3 h-3 text-accent" />
                    </span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition ${
                  t.accent
                    ? "bg-gradient-brand text-brand-foreground shadow-brand hover:scale-[1.02]"
                    : "bg-surface-elevated border border-border hover:border-accent hover:bg-background"
                }`}
              >
                {t.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Checklist ---------------- */
const CHECKLIST = [
  { icon: ScanLine, title: "ЛКП толщиномером", text: "47 контрольных точек — выявляем любые ремонты и перекрасы" },
  { icon: Cog, title: "Двигатель", text: "Эндоскопия цилиндров, замер компрессии, утечки, выхлоп" },
  { icon: Hammer, title: "Подвеска", text: "Люфты, сайлентблоки, стойки, рычаги, шаровые" },
  { icon: Wrench, title: "Рулевое управление", text: "Рейка, наконечники, гидроусилитель, электроусилитель" },
  { icon: Disc3, title: "Тормозная система", text: "Диски, колодки, суппорты, состояние тормозной жидкости" },
  { icon: Gauge, title: "Коробка передач", text: "АКПП, МКПП, вариатор, робот — диагностика и тест-драйв" },
  { icon: CircleDot, title: "Геометрия кузова", text: "Замер зазоров, диагональ, проверка лонжеронов и силовых элементов" },
  { icon: PaintBucket, title: "Салон и электрика", text: "Все опции, климат, мультимедиа, стеклоподъёмники, датчики" },
  { icon: Snowflake, title: "Кондиционер", text: "Замер давления, состояние компрессора, фреон" },
  { icon: Car, title: "Ходовые испытания", text: "Тест-драйв в разных режимах: город, трасса, торможение" },
  { icon: FileCheck2, title: "Юридическая чистота", text: "ГИБДД, ФССП, залоги, лизинг, ограничения, ДТП" },
  { icon: FileSearch, title: "История автомобиля", text: "Реальный пробег, владельцы, штрафы, страховые случаи" },
];
function Checklist() {
  return (
    <section id="checklist" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="47 пунктов проверки"
          title={<>Что входит в <span className="text-gradient-brand">полную диагностику</span></>}
          subtitle="Проверяем всё, что влияет на безопасность, стоимость и надёжность автомобиля."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {CHECKLIST.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="flex gap-4 p-5 rounded-2xl bg-surface border border-border hover:border-accent/50 transition group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 grid place-items-center group-hover:bg-gradient-brand group-hover:border-transparent transition">
                <c.icon className="w-5 h-5 text-accent group-hover:text-brand-foreground transition" />
              </div>
              <div>
                <h4 className="font-bold">{c.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Examples ---------------- */
const EXAMPLES = [
  { img: diagThickness, title: "Замер ЛКП толщиномером", tag: "ЛКП" },
  { img: diagEndoscope, title: "Эндоскопия цилиндров двигателя", tag: "Двигатель" },
  { img: diagLift, title: "Осмотр подвески на подъёмнике", tag: "Подвеска" },
  { img: diagComputer, title: "Компьютерная диагностика OBD", tag: "Электроника" },
];
function Examples() {
  return (
    <section id="examples" className="py-24 sm:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Наши работы"
          title={<>Реальные <span className="text-gradient-brand">фотоотчёты с проверок</span></>}
          subtitle="После каждой диагностики клиент получает подробный фото- и видеоотчёт с письменным заключением."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {EXAMPLES.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border aspect-[4/5]"
            >
              <img
                src={e.img}
                alt={e.title}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  {e.tag}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Camera className="w-3.5 h-3.5" /> Фотоотчёт клиента
                </div>
                <h4 className="font-bold text-lg leading-tight">{e.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
const REVIEWS = [
  {
    name: "Александр",
    car: "Toyota Camry, 2018",
    text: "Заказал выездную проверку на Камри. Ребята приехали с толщиномером, эндоскопом, компьютером. Нашли скрытый ремонт левой стороны и проблемы по двигателю. Сэкономили мне 180 000 ₽ — продавец сразу сбавил цену.",
    rating: 5,
  },
  {
    name: "Ирина",
    car: "Kia Sportage, 2020",
    text: "Подбирали с мужем первую машину и боялись попасть на «утопленника». АвтоЭксперт51 проверили 4 варианта за день, по третьему дали добро. Машина ездит уже год — никаких сюрпризов. Спасибо!",
    rating: 5,
  },
  {
    name: "Дмитрий",
    car: "Volkswagen Tiguan, 2017",
    text: "Брал подбор под ключ. За неделю нашли идеальный вариант под мой бюджет, помогли с торгом и оформлением. По факту услуга окупилась с первого торга. Рекомендую всем в Мурманске.",
    rating: 5,
  },
  {
    name: "Сергей",
    car: "Hyundai Tucson, 2019",
    text: "Профессионалы. Подробный фотоотчёт, всё разложено по полочкам. По итогу от машины отказался — на ней были скрытые проблемы по кузову, которые я бы сам не увидел. Спасли от ошибки.",
    rating: 5,
  },
];
function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Отзывы клиентов"
          title={<>Нам доверяют <span className="text-gradient-brand">тысячи водителей</span></>}
          subtitle="Средняя оценка — 5.0. Десятки отзывов в нашей группе ВКонтакте."
        />
        <div className="grid md:grid-cols-2 gap-5 mt-14">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="relative p-7 rounded-2xl bg-surface border border-border hover:border-accent/40 transition shadow-card-premium"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-accent/30" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-brand grid place-items-center font-bold text-lg text-brand-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.car}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://vk.com/avtoexpert51"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface hover:border-accent hover:bg-surface-elevated transition font-semibold"
          >
            Все отзывы во ВКонтакте <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  {
    q: "Сколько стоит выездная проверка авто?",
    a: "Базовая выездная проверка — от 2 000 ₽. Стоимость зависит от удалённости и сложности диагностики. Точную цену называем по телефону после уточнения деталей.",
  },
  {
    q: "Сколько времени занимает диагностика?",
    a: "Полная проверка одного автомобиля занимает 1.5–2 часа на месте. По итогу вы получаете письменное заключение и фотоотчёт.",
  },
  {
    q: "Работаете ли вы за пределами Мурманска?",
    a: "Да, выезжаем по всей Мурманской области: Кола, Североморск, Апатиты, Кировск, Мончегорск и другие города.",
  },
  {
    q: "Что если по итогу проверки авто окажется плохим?",
    a: "Это нормальная ситуация — лучше отказаться от плохой машины, чем потом тратить сотни тысяч на ремонт. Мы поможем найти следующий вариант.",
  },
  {
    q: "Даёте ли вы гарантию?",
    a: "Да, мы заключаем договор и даём письменную гарантию на свою работу. 95% наших клиентов окупают стоимость услуги уже на торге.",
  },
  {
    q: "Какое оборудование вы используете?",
    a: "Профессиональный толщиномер, эндоскоп, OBD-сканер для компьютерной диагностики, манометры, мультиметр — всё необходимое для полноценной проверки.",
  },
];
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Частые <span className="text-gradient-brand">вопросы</span></>}
          subtitle="Не нашли свой вопрос? Позвоните — ответим бесплатно."
        />
        <div className="mt-14 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition ${
                  isOpen ? "bg-surface border-accent/50" : "bg-surface border-border hover:border-accent/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 p-6"
                >
                  <span className="font-semibold text-lg">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function CTA() {
  return (
    <section id="cta" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 noise-bg" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-surface-elevated to-surface p-8 sm:p-14 shadow-card-premium">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-brand rounded-full opacity-20 blur-3xl" />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent mb-5">
                БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Готовы найти <span className="text-gradient-brand">свой автомобиль?</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Оставьте заявку — перезвоним в течение 10 минут, ответим на все вопросы
                и рассчитаем стоимость под вашу задачу.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-[1.02] transition"
                >
                  <Phone className="w-4 h-4" /> {PHONE}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-surface-elevated border border-border hover:border-accent transition font-semibold"
                >
                  <MessageCircle className="w-4 h-4 text-[oklch(0.75_0.18_150)]" /> WhatsApp
                </a>
                <a
                  href={TELEGRAM}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-surface-elevated border border-border hover:border-accent transition font-semibold"
                >
                  <Send className="w-4 h-4 text-[oklch(0.72_0.15_240)]" /> Telegram
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-background/60 backdrop-blur border border-border">
              <QuickForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-xl">
            <div className="w-9 h-9 rounded-xl bg-gradient-brand grid place-items-center shadow-brand">
              <Car className="w-5 h-5 text-brand-foreground" />
            </div>
            АвтоЭксперт<span className="text-gradient-brand">51</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Профессиональный автоподбор и диагностика авто с пробегом в Мурманске
            и Мурманской области с 2013 года.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Контакты</div>
          <ul className="space-y-3 text-sm">
            <li><a href={PHONE_HREF} className="hover:text-accent transition flex items-center gap-2"><Phone className="w-4 h-4" /> {PHONE}</a></li>
            <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</a></li>
            <li><a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition flex items-center gap-2"><Send className="w-4 h-4" /> Telegram</a></li>
            <li className="text-muted-foreground flex items-center gap-2"><MapPin className="w-4 h-4" /> Мурманск и область</li>
            <li className="text-muted-foreground flex items-center gap-2"><Clock className="w-4 h-4" /> Ежедневно 8:00 – 00:00</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Навигация</div>
          <ul className="space-y-3 text-sm">
            <li><a href="#services" className="hover:text-accent transition">Услуги и тарифы</a></li>
            <li><a href="#checklist" className="hover:text-accent transition">Что проверяем</a></li>
            <li><a href="#examples" className="hover:text-accent transition">Примеры работ</a></li>
            <li><a href="#reviews" className="hover:text-accent transition">Отзывы</a></li>
            <li><a href="#faq" className="hover:text-accent transition">Частые вопросы</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
          <div>© {new Date().getFullYear()} АвтоЭксперт51. Все права защищены.</div>
          <div>Сделано с заботой о водителях Мурманска</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank" rel="noopener noreferrer"
      aria-label="Связаться в WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[oklch(0.7_0.18_150)] grid place-items-center shadow-brand hover:scale-110 transition animate-float"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.18_150)] animate-ping opacity-30" />
    </a>
  );
}

/* ---------------- Section header ---------------- */
function SectionHeader({
  eyebrow, title, subtitle,
}: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent uppercase tracking-wider mb-5">
        {eyebrow}
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
