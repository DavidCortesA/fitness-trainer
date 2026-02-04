'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Trophy, Users, Target, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Clientes' },
  { icon: Trophy, value: '10+', label: 'Años Experiencia' },
  { icon: Target, value: '95%', label: 'Éxito' },
  { icon: TrendingUp, value: '1000+', label: 'Transformaciones' },
];

const benefits = [
  {
    title: 'Planes Personalizados',
    description: 'Entrenamientos diseñados específicamente para ti y tus objetivos.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
  },
  {
    title: 'Nutrición Profesional',
    description: 'Planes alimenticios balanceados y adaptados a tu estilo de vida.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
  },
  {
    title: 'Seguimiento Continuo',
    description: 'Monitoreo constante de tu progreso y ajustes cuando sea necesario.',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80',
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Fitness Training"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Transforma Tu{' '}
            <span className="text-accent">Cuerpo y Mente</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Entrena con un profesional certificado y alcanza tus metas de fitness
            con planes personalizados y resultados garantizados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contacto"
              className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Comienza Ahora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/calculadora"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Calculadora Fitness
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              ¿Por Qué Elegirme?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Método probado con resultados reales y transformaciones increíbles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo Para Empezar?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Da el primer paso hacia la mejor versión de ti mismo
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Agenda Tu Sesión Gratuita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
