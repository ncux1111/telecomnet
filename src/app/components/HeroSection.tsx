import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533664488202-6af66d26c44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbnMlMjB0b3dlciUyMG5ldHdvcmslMjA1RyUyMGFudGVubmF8ZW58MXx8fHwxNzgwODQ1NzMwfDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Телекомунікаційна вежа"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay 70% opacity */}
        <div className="absolute inset-0 bg-[#0a0e27]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/80 via-[#0a0e27]/60 to-[#0a0e27]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Large, bright white title with glow effect */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-[0_0_30px_rgba(0,212,255,0.5)] [text-shadow:_0_0_40px_rgba(0,212,255,0.6),_0_0_80px_rgba(0,212,255,0.4)]">
            TelecomNet
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-white font-medium drop-shadow-lg">
            Інформаційний портал сучасних телекомунікаційних технологій
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-12 text-[#e8eef5]/90 max-w-3xl mx-auto drop-shadow-md">
            Все про розвиток мобільних мереж від 2G до 5G та сучасне телекомунікаційне обладнання
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#generations"
              className="group px-8 py-4 bg-[#00d4ff] text-[#0a0e27] rounded-lg hover:bg-[#00d4ff]/90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] font-semibold"
            >
              Дізнатися більше
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#equipment"
              className="px-8 py-4 bg-[#1a1f3a] text-white rounded-lg hover:bg-[#1a1f3a]/80 transition-all border-2 border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] font-semibold"
            >
              Перейти до технологій
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#generations" className="block animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#00d4ff] drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}