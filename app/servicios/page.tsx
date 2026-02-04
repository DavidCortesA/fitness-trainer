'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dumbbell, Apple, Brain, Users, Clock, Award } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Entrenamiento Personal',
    description: 'Sesiones individuales diseñadas específicamente para tus objetivos y nivel fitness.',
    features: [
      'Evaluación inicial completa',
      'Programa personalizado',
      'Seguimiento semanal',
      'Ajustes constantes',
    ],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    price: 'Desde $800 MXN/sesión',
  },
  {
    icon: Apple,
    title: 'Nutrición Deportiva',
    description: 'Planes alimenticios balanceados adaptados a tu metabolismo y estilo de vida.',
    features: [
      'Análisis nutricional',
      'Plan de comidas semanal',
      'Recetas personalizadas',
      'Suplementación guiada',
    ],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    price: 'Desde $1,200 MXN/mes',
  },
  {
    icon: Brain,
    title: 'Coaching Mental',
    description: 'Desarrolla la mentalidad correcta para alcanzar tus objetivos y mantenerlos.',
    features: [
      'Técnicas de motivación',
      'Manejo del estrés',
      'Establecimiento de metas',
      'Hábitos saludables',
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    price: 'Incluido en paquetes',
  },
  {
    icon: Users,
    title: 'Entrenamiento Grupal',
    description: 'Sesiones en grupos pequeños con ambiente motivador y gran energía.',
    features: [
      'Grupos de 4-6 personas',
      'Ambiente motivador',
      'Precio accesible',
      'Horarios flexibles',
    ],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    price: 'Desde $300 MXN/sesión',
  },
  {
    icon: Clock,
    title: 'Entrenamiento Online',
    description: 'Entrena desde donde estés con programas completos y seguimiento virtual.',
    features: [
      'Videos demostrativos',
      'App de seguimiento',
      'Videollamadas semanales',
      'Chat ilimitado',
    ],
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80',
    price: 'Desde $600 MXN/mes',
  },
  {
    icon: Award,
    title: 'Transformación 90 Días',
    description: 'Programa intensivo completo para lograr tu mejor versión en 3 meses.',
    features: [
      'Entrenamiento 5x semana',
      'Plan nutricional completo',
      'Suplementación incluida',
      'Fotos de progreso',
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    price: '$8,500 MXN (pago único)',
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-32 pb-20 bg-secondary">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Servicios de <span className="text-accent">Entrenamiento</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programas diseñados para adaptarse a tus necesidades, objetivos y estilo de vida.
            Elige el servicio que mejor se ajuste a ti.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t pt-4">
                  <div className="text-2xl font-bold text-accent mb-4">
                    {service.price}
                  </div>
                  <button className="w-full bg-primary hover:bg-accent text-white py-3 rounded-lg font-semibold transition-all duration-300">
                    Más Información
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="mt-20 bg-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Garantía de Satisfacción
            </h2>
            <p className="text-lg text-gray-700">
              Si no estás satisfecho con los resultados después de 30 días,
              te devolvemos el 100% de tu dinero. Sin preguntas.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
