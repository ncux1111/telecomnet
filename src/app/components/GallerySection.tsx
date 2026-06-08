import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1533664488202-6af66d26c44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Телекомунікаційна вежа',
  },
  {
    url: 'https://images.unsplash.com/photo-1680992044138-ce4864c2b962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Серверна кімната',
  },
  {
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Оптичні лінії зв\'язку',
  },
  {
    url: 'https://images.unsplash.com/photo-1643155193188-38eb08e2b54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: '5G антена',
  },
  {
    url: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Мережеве обладнання',
  },
  {
    url: 'https://images.unsplash.com/photo-1660620949746-c0f2a54538ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Базова станція',
  },
  {
    url: 'https://images.unsplash.com/photo-1680992046617-e2e35451bcdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Сервери',
  },
  {
    url: 'https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Кабельна інфраструктура',
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
            Галерея
          </h2>
          <p className="text-[#8b93b0] text-lg max-w-2xl mx-auto">
            Фотографії телекомунікаційного обладнання та інфраструктури
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-sm text-white">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#0a0e27]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-[#0f1429] hover:bg-[#1a1f3a] transition-colors border border-[#00d4ff]/30"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-[#00d4ff]" />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={galleryImages[selectedImage].url}
            alt={galleryImages[selectedImage].title}
            className="max-w-full max-h-full object-contain rounded-xl border border-[#00d4ff]/30 shadow-[0_0_50px_rgba(0,212,255,0.3)]"
          />
        </motion.div>
      )}
    </section>
  );
}