'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from 'lucide-react';

interface Transformation {
  name: string;
  age: number;
  beforeImage: string;
  afterImage: string;
  timeframe: string;
  weightLost: string;
  testimonial: string;
  goals: string[];
}

const transformations: Transformation[] = [
  {
    name: 'Carlos Hernández',
    age: 32,
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1583454155184-1a2d1b2c2b8f?w=600&q=80',
    timeframe: '6 meses',
    weightLost: '18 kg',
    testimonial: 'Increíble transformación. No solo perdí peso, gané confianza y energía. Mi vida cambió completamente.',
    goals: ['Pérdida de peso', 'Ganar músculo', 'Mejorar salud'],
  },
  {
    name: 'María González',
    age: 28,
    beforeImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80',
    timeframe: '4 meses',
    weightLost: '12 kg',
    testimonial: 'Después de 2 embarazos, recuperé mi figura y me siento mejor que nunca. Totalmente recomendado.',
    goals: ['Post-embarazo', 'Tonificación', 'Energía'],
  },
  {
    name: 'Luis Ramírez',
    age: 45,
    beforeImage: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    timeframe: '8 meses',
    weightLost: '25 kg',
    testimonial: 'A mis 45 años pensé que era tarde. Me equivoqué. Ahora estoy en la mejor forma de mi vida.',
    goals: ['Pérdida de peso', 'Salud cardiovascular', 'Fuerza'],
  },
];

function BeforeAfterSlider({ transformation }: { transformation: Transformation }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'mousemove') return;
    
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl cursor-col-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
    >
      {/* Before Image (Full) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${transformation.beforeImage})`,
          }}
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
          ANTES
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${transformation.afterImage})`,
          }}
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
          DESPUÉS
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-primary absolute left-1" />
          <ChevronRight className="w-5 h-5 text-primary absolute right-1" />
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
        Desliza para comparar
      </div>
    </div>
  );
}

export default function TransformacionesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTransformation = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevTransformation = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const activeTransformation = transformations[activeIndex];

  return (
    <div className="pt-32 pb-20 bg-secondary">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Transformaciones <span className="text-accent">Reales</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados comprobados de personas reales que confiaron en el proceso.
            Tu transformación podría ser la siguiente.
          </p>
        </motion.div>
      </section>

      {/* Main Transformation Viewer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Before/After Slider */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BeforeAfterSlider transformation={activeTransformation} />
          </motion.div>

          {/* Details */}
          <motion.div
            key={`details-${activeIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">
                {activeTransformation.name}
              </h2>
              <p className="text-xl text-gray-600">{activeTransformation.age} años</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent/10 p-6 rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">
                  {activeTransformation.weightLost}
                </div>
                <div className="text-gray-700">Peso Perdido</div>
              </div>
              <div className="bg-green-500/10 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {activeTransformation.timeframe}
                </div>
                <div className="text-gray-700">Duración</div>
              </div>
            </div>

            {/* Goals */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Objetivos Logrados:</h3>
              <div className="flex flex-wrap gap-2">
                {activeTransformation.goals.map((goal) => (
                  <span
                    key={goal}
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-secondary p-6 rounded-xl relative shadow-md">
              <Quote className="w-10 h-10 text-accent/20 absolute top-4 left-4" />
              <p className="text-gray-700 italic pl-8 pt-4">
                "{activeTransformation.testimonial}"
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6">
              <button
                onClick={prevTransformation}
                className="flex items-center space-x-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Anterior</span>
              </button>
              <div className="text-gray-600">
                {activeIndex + 1} / {transformations.length}
              </div>
              <button
                onClick={nextTransformation}
                className="flex items-center space-x-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 bg-gradient-to-r from-accent to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tu Transformación Comienza Hoy
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a cientos de personas que ya lograron sus objetivos
            </p>
            <a
              href="/contacto"
              className="inline-block bg-white text-accent hover:bg-gray-100 px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Comienza Tu Transformación
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
