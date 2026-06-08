import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Розвиток мереж 5G в Україні',
    date: '5 червня 2026',
    description: 'Українські оператори мобільного зв\'язку активно впроваджують технологію 5G, яка забезпечує швидкість передачі даних до 10 Гбіт/с та відкриває нові можливості для розвитку IoT та розумних міст.',
    category: '5G Технології',
  },
  {
    title: 'Впровадження IoT-технологій',
    date: '1 червня 2026',
    description: 'Інтернет речей стає невід\'ємною частиною сучасної телекомунікаційної інфраструктури. Розумні лічильники, датчики та інші пристрої формують нову екосистему зв\'язку.',
    category: 'IoT',
  },
  {
    title: 'Новітні телекомунікаційні рішення',
    date: '28 травня 2026',
    description: 'Презентація інноваційного обладнання для побудови мереж нового покоління. Використання штучного інтелекту для оптимізації роботи телекомунікаційних систем.',
    category: 'Інновації',
  },
  {
    title: 'Супутниковий інтернет нового покоління',
    date: '25 травня 2026',
    description: 'Розгортання глобальних супутникових мереж Low Earth Orbit (LEO) обіцяє швидкісний інтернет навіть у найвіддаленіших регіонах планети з мінімальними затримками.',
    category: 'Супутниковий зв\'язок',
  },
];

export function NewsSection() {
  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1429] to-[#0a0e27]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
            Новини телекомунікацій
          </h2>
          <p className="text-[#8b93b0] text-lg max-w-2xl mx-auto">
            Останні новини та тенденції розвитку телекомунікаційної індустрії
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#121733]/50 backdrop-blur-xl border border-[#00d4ff]/20 rounded-xl p-6 hover:border-[#00d4ff]/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] rounded-full text-sm border border-[#00d4ff]/30">
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-sm text-[#8b93b0]">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#8b93b0] mb-4 line-clamp-3">
                {item.description}
              </p>
              <button className="flex items-center gap-2 text-[#00d4ff] hover:gap-3 transition-all">
                <span>Читати далі</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}