'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-accent" />
                <span>+52 81 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@fitprotrainer.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Monterrey, Nuevo León</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="/servicios" className="hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/transformaciones" className="hover:text-accent transition-colors">
                  Transformaciones
                </a>
              </li>
              <li>
                <a href="/calculadora" className="hover:text-accent transition-colors">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Sígueme</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-all duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400"
        >
          <p>© {currentYear} FitPro Trainer. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
