'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Instagram, Facebook } from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'personal',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'personal',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Hablemos de Tu <span className="text-accent">Transformación</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estoy aquí para ayudarte a alcanzar tus metas. Contáctame y empecemos tu viaje fitness.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Envíame un Mensaje</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-600">
                  Te contactaré lo antes posible. Gracias por tu interés.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Juan Pérez"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="juan@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="+52 81 1234 5678"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="personal">Entrenamiento Personal</option>
                    <option value="nutrition">Nutrición Deportiva</option>
                    <option value="coaching">Coaching Mental</option>
                    <option value="group">Entrenamiento Grupal</option>
                    <option value="online">Entrenamiento Online</option>
                    <option value="transformation">Transformación 90 Días</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntame sobre tus objetivos *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Quiero perder peso, ganar músculo, mejorar mi salud..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <a
                  href="tel:+528112345678"
                  className="flex items-start space-x-3 group hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <div className="text-gray-600 group-hover:text-accent">+52 81 1234 5678</div>
                  </div>
                </a>
                <a
                  href="mailto:info@fitprotrainer.com"
                  className="flex items-start space-x-3 group hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600 group-hover:text-accent">info@fitprotrainer.com</div>
                  </div>
                </a>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Ubicación</div>
                    <div className="text-gray-600">
                      San Pedro Garza García<br />
                      Monterrey, Nuevo León
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold text-primary">Horario</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-medium">6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">7:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Sígueme</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl hover:scale-110 transition-transform"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-blue-600 p-4 rounded-xl hover:scale-110 transition-transform"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                @fitprotrainer
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-accent to-orange-600 p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">Primera Consulta Gratis</h3>
              <p className="text-sm mb-4">
                Agenda tu sesión de evaluación sin costo y comienza tu transformación hoy
              </p>
              <div className="text-3xl font-bold">100% Gratis</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
