import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const equipment = [
  {
    title: 'Базова станція',
    description: 'Головний елемент мережі стільникового зв\'язку, що забезпечує передачу сигналу між мобільними пристроями та мережею оператора.',
    image: 'https://images.unsplash.com/photo-1643155193188-38eb08e2b54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    title: 'Секторна антена',
    description: 'Спрямована антена для передачі сигналу в певному секторі, забезпечує покриття великих територій стільниковим зв\'язком.',
    image: 'https://images.unsplash.com/photo-1602823284936-463177448097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    title: 'Маршрутизатор',
    description: 'Пристрій для передачі даних між різними мережами, визначає оптимальний шлях передачі інформації.',
    image: 'https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    title: 'Комутатор',
    description: 'Мережевий пристрій для з\'єднання кількох вузлів комп\'ютерної мережі в межах одного сегмента.',
    image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    title: 'Оптоволоконний кабель',
    description: 'Кабель для передачі даних за допомогою світлових імпульсів, забезпечує високу швидкість та надійність.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    title: 'Радіорелейна станція',
    description: 'Обладнання для передачі сигналу на великі відстані через радіохвилі, використовується для зв\'язку між базовими станціями.',
    image: 'https://images.unsplash.com/photo-1660620949746-c0f2a54538ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
];

export function EquipmentSection() {
  return (
    <section id="equipment" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
            Телекомунікаційне обладнання
          </h2>
          <p className="text-[#8b93b0] text-lg max-w-2xl mx-auto">
            Сучасні пристрої та системи для побудови надійних телекомунікаційних мереж
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#0f1429] border border-[#00d4ff]/20 rounded-xl overflow-hidden hover:border-[#00d4ff]/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1429] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-[#8b93b0] mb-4 line-clamp-3">{item.description}</p>
                <button className="flex items-center gap-2 text-[#00d4ff] hover:gap-3 transition-all group/btn">
                  <span>Детальніше</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}