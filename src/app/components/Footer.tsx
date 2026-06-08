import { Radio, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1429] border-t border-[#00d4ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#06b6d4] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                <Radio className="w-6 h-6 text-[#0a0e27]" />
              </div>
              <span className="font-bold text-lg text-white">TelecomNet</span>
            </div>
            <p className="text-[#8b93b0] text-sm">
              Інформаційний портал сучасних телекомунікаційних технологій. Все про розвиток мобільних мереж та телекомунікаційне обладнання.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Навігація</h3>
            <ul className="space-y-2 text-sm text-[#8b93b0]">
              <li>
                <a href="#home" className="hover:text-[#00d4ff] transition-colors">
                  Головна
                </a>
              </li>
              <li>
                <a href="#generations" className="hover:text-[#00d4ff] transition-colors">
                  Покоління
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-[#00d4ff] transition-colors">
                  Обладнання
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#00d4ff] transition-colors">
                  Новини
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Контакти</h3>
            <ul className="space-y-3 text-sm text-[#8b93b0]">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00d4ff]" />
                <span>info@telecomnet.ua</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00d4ff]" />
                <span>+380 (44) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00d4ff]" />
                <span>Україна, Київ, вул. Телекомунікаційна, 1</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Соціальні мережі</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1f3a] hover:bg-[#00d4ff] hover:text-[#0a0e27] text-[#00d4ff] flex items-center justify-center transition-all border border-[#00d4ff]/20 hover:border-[#00d4ff] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1f3a] hover:bg-[#00d4ff] hover:text-[#0a0e27] text-[#00d4ff] flex items-center justify-center transition-all border border-[#00d4ff]/20 hover:border-[#00d4ff] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)]"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1f3a] hover:bg-[#00d4ff] hover:text-[#0a0e27] text-[#00d4ff] flex items-center justify-center transition-all border border-[#00d4ff]/20 hover:border-[#00d4ff] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1f3a] hover:bg-[#00d4ff] hover:text-[#0a0e27] text-[#00d4ff] flex items-center justify-center transition-all border border-[#00d4ff]/20 hover:border-[#00d4ff] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)]"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00d4ff]/20 pt-8 space-y-4 text-center">
          <p className="text-sm text-[#8b93b0]">
            © {currentYear} TelecomNet. Усі права захищені.
          </p>
          <div className="text-sm text-[#8b93b0]">
            <p className="mb-1">
              <span className="text-white font-medium">Автор сайту:</span> Олег Вдовенко
            </p>
            <p>
              Студент спеціальності <span className="text-[#00d4ff] font-medium">«Телекомунікації та радіотехніка»</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}