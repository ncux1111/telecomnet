import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1429] to-[#0a0e27]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
            Зворотний зв'язок
          </h2>
          <p className="text-[#8b93b0] text-lg max-w-2xl mx-auto">
            Маєте питання або пропозиції? Напишіть нам, і ми обов'язково відповімо
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#121733]/50 backdrop-blur-xl border border-[#00d4ff]/20 rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-white">
                  Ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f1429] border border-[#00d4ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all text-white placeholder:text-[#8b93b0]"
                  placeholder="Ваше ім'я"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f1429] border border-[#00d4ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all text-white placeholder:text-[#8b93b0]"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-white">
                Тема повідомлення
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0f1429] border border-[#00d4ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all text-white placeholder:text-[#8b93b0]"
                placeholder="Тема"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-white">
                Повідомлення
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#0f1429] border border-[#00d4ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-all resize-none text-white placeholder:text-[#8b93b0]"
                placeholder="Ваше повідомлення..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-[#00d4ff] text-[#0a0e27] rounded-lg hover:bg-[#00d4ff]/90 transition-all flex items-center justify-center gap-2 group font-semibold shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]"
            >
              <span>Надіслати</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-2 text-[#8b93b0]"
        >
          <Mail className="w-5 h-5 text-[#00d4ff]" />
          <span>info@telecomnet.ua</span>
        </motion.div>
      </div>
    </section>
  );
}