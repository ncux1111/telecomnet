import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Card } from './ui/card';

export function ComparisonSection() {
  const comparisonData = [
    {
      generation: '2G',
      speed: 'До 0.1 Мбіт/с',
      use: 'Голосовий зв\'язок',
      latency: '~500 мс',
      year: '1991',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      generation: '3G',
      speed: 'До 42 Мбіт/с',
      use: 'Мобільний інтернет',
      latency: '~100 мс',
      year: '2001',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      generation: '4G LTE',
      speed: 'До 1 Гбіт/с',
      use: 'Онлайн-сервіси',
      latency: '~30 мс',
      year: '2009',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      generation: '5G',
      speed: 'До 10 Гбіт/с',
      use: 'IoT та Smart City',
      latency: '~1 мс',
      year: '2019',
      color: 'from-emerald-500 to-cyan-400',
      highlight: true,
    },
  ];

  const features = [
    { label: 'Голосові виклики', availability: [true, true, true, true] },
    { label: 'Мобільний інтернет', availability: [false, true, true, true] },
    { label: 'HD відео стрімінг', availability: [false, false, true, true] },
    { label: '4K/8K контент', availability: [false, false, false, true] },
    { label: 'VR/AR додатки', availability: [false, false, false, true] },
    { label: 'IoT підтримка', availability: [false, false, true, true] },
    { label: 'Розумні міста', availability: [false, false, false, true] },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0f1429] to-[#0a0e27]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] mx-auto rounded-full" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
            Порівняння технологій мобільного зв'язку
          </h2>

          <p className="text-lg text-[#8b93b0] max-w-2xl mx-auto">
            Еволюція швидкості, можливостей та застосувань від 2G до 5G
          </p>
        </motion.div>

        {/* Comparison Cards - Mobile Friendly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.generation}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full p-6 border ${
                  item.highlight
                    ? 'border-[#00d4ff] bg-gradient-to-br from-[#121733] to-[#1a1f3a]'
                    : 'border-[#00d4ff]/20 bg-[#121733]/50'
                } backdrop-blur-xl transition-all duration-300 hover:border-[#00d4ff]/50 hover:scale-105`}
              >
                {item.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] px-4 py-1 rounded-full text-xs font-bold text-[#0a0e27]">
                      НАЙНОВІШЕ
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <div
                    className={`inline-block text-4xl font-bold mb-2 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
                  >
                    {item.generation}
                  </div>

                  <div className="text-sm text-[#8b93b0] mb-6">{item.year}</div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-[#8b93b0] mb-1">Швидкість</div>
                      <div className="text-lg font-bold text-[#00d4ff]">{item.speed}</div>
                    </div>

                    <div>
                      <div className="text-xs text-[#8b93b0] mb-1">Призначення</div>
                      <div className="text-sm text-white">{item.use}</div>
                    </div>

                    <div>
                      <div className="text-xs text-[#8b93b0] mb-1">Затримка</div>
                      <div className="text-sm text-[#06b6d4]">{item.latency}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="overflow-hidden border border-[#00d4ff]/20 bg-[#121733]/50 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#00d4ff]/20">
                    <th className="p-4 text-left text-[#8b93b0] font-semibold">Можливості</th>
                    {comparisonData.map((item) => (
                      <th
                        key={item.generation}
                        className={`p-4 text-center font-bold ${
                          item.highlight ? 'text-[#00d4ff]' : 'text-white'
                        }`}
                      >
                        {item.generation}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, featureIndex) => (
                    <motion.tr
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="border-b border-[#00d4ff]/10 hover:bg-[#00d4ff]/5 transition-colors"
                    >
                      <td className="p-4 text-[#e8eef5]">{feature.label}</td>
                      {feature.availability.map((available, genIndex) => (
                        <td key={genIndex} className="p-4 text-center">
                          {available ? (
                            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00d4ff]/20">
                              <Check className="w-4 h-4 text-[#00d4ff]" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-6 h-6">
                              <span className="text-[#8b93b0]/30">—</span>
                            </div>
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Speed Comparison Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Порівняння швидкості передачі даних
          </h3>
          <div className="space-y-4">
            {comparisonData.map((item, index) => {
              const speedValue = parseFloat(item.speed);
              const isGbit = item.speed.includes('Гбіт');
              const normalizedSpeed = isGbit ? speedValue * 1000 : speedValue;
              const maxSpeed = 10000; // 10 Гбіт/с
              const widthPercentage = (normalizedSpeed / maxSpeed) * 100;

              return (
                <motion.div
                  key={item.generation}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-20 text-right font-bold text-white">{item.generation}</div>
                    <div className="flex-1 bg-[#1a1f3a] rounded-full h-8 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${widthPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                    <div className="w-32 text-sm text-[#00d4ff] font-semibold">{item.speed}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
