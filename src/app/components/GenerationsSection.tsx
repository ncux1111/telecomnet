import { MessageSquare, Video, Wifi, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

const generations = [
  {
    title: '2G',
    icon: MessageSquare,
    color: 'from-[#0ea5e9] to-[#06b6d4]',
    features: ['Голосовий зв\'язок', 'SMS-повідомлення', 'Базові мобільні сервіси'],
  },
  {
    title: '3G',
    icon: Video,
    color: 'from-[#06b6d4] to-[#22d3ee]',
    features: ['Мобільний інтернет', 'Відеодзвінки', 'Передача мультимедіа'],
  },
  {
    title: '4G LTE',
    icon: Wifi,
    color: 'from-[#22d3ee] to-[#2dd4bf]',
    features: ['Високошвидкісний інтернет', 'Онлайн-стрімінг', 'Хмарні сервіси'],
  },
  {
    title: '5G',
    icon: Cpu,
    color: 'from-[#00d4ff] to-[#06b6d4]',
    features: ['Наднизькі затримки', 'Інтернет речей (IoT)', 'Розумні міста', 'Автономний транспорт'],
  },
];

export function GenerationsSection() {
  return (
    <section id="generations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e27] to-[#0f1429]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
            Покоління мобільного зв'язку
          </h2>
          <p className="text-[#8b93b0] text-lg max-w-2xl mx-auto">
            Еволюція технологій від голосового зв'язку до розумних міст майбутнього
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {generations.map((gen, index) => (
            <motion.div
              key={gen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative bg-[#121733]/50 backdrop-blur-xl border border-[#00d4ff]/20 rounded-xl p-6 hover:border-[#00d4ff]/50 transition-all group shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none"></div>
              
              <div className={`relative w-16 h-16 rounded-lg bg-gradient-to-br ${gen.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,212,255,0.3)]`}>
                <gen.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{gen.title}</h3>
              <ul className="space-y-2">
                {gen.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[#8b93b0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,0.8)]"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}