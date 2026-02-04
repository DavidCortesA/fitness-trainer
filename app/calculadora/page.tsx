'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calculator, TrendingUp, Activity, Target, Scale } from 'lucide-react';

type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
type Goal = 'lose' | 'maintain' | 'gain';

export default function CalculadoraPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [results, setResults] = useState<any>(null);

  const calculateMetrics = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a) {
      alert('Por favor completa todos los campos');
      return;
    }

    // BMI
    const bmi = w / ((h / 100) ** 2);

    // BMR (Basal Metabolic Rate) - Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // TDEE (Total Daily Energy Expenditure)
    const activityMultipliers: Record<ActivityLevel, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      'very-active': 1.9,
    };
    const tdee = bmr * activityMultipliers[activityLevel];

    // Calorie targets based on goal
    let targetCalories;
    switch (goal) {
      case 'lose':
        targetCalories = tdee - 500; // 500 cal deficit for ~0.5kg/week loss
        break;
      case 'gain':
        targetCalories = tdee + 300; // 300 cal surplus for lean gains
        break;
      default:
        targetCalories = tdee;
    }

    // Macros
    const proteinGrams = w * 2; // 2g per kg body weight
    const fatGrams = (targetCalories * 0.25) / 9; // 25% of calories from fat
    const carbGrams = (targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4;

    // Ideal weight range (based on BMI 18.5-24.9)
    const minIdealWeight = 18.5 * ((h / 100) ** 2);
    const maxIdealWeight = 24.9 * ((h / 100) ** 2);

    // BMI Category
    let bmiCategory;
    let bmiColor;
    if (bmi < 18.5) {
      bmiCategory = 'Bajo peso';
      bmiColor = 'text-blue-600';
    } else if (bmi < 25) {
      bmiCategory = 'Peso normal';
      bmiColor = 'text-green-600';
    } else if (bmi < 30) {
      bmiCategory = 'Sobrepeso';
      bmiColor = 'text-yellow-600';
    } else {
      bmiCategory = 'Obesidad';
      bmiColor = 'text-red-600';
    }

    setResults({
      bmi: bmi.toFixed(1),
      bmiCategory,
      bmiColor,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCalories: Math.round(targetCalories),
      protein: Math.round(proteinGrams),
      carbs: Math.round(carbGrams),
      fat: Math.round(fatGrams),
      minIdealWeight: minIdealWeight.toFixed(1),
      maxIdealWeight: maxIdealWeight.toFixed(1),
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
          <Calculator className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Calculadora <span className="text-accent">Fitness</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre tus métricas personalizadas: IMC, calorías diarias, macronutrientes y más
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Ingresa Tus Datos</h2>

            <div className="space-y-6">
              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Género
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setGender('male')}
                    className={`py-3 rounded-lg font-medium transition-all ${
                      gender === 'male'
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Hombre
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`py-3 rounded-lg font-medium transition-all ${
                      gender === 'female'
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Mujer
                  </button>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Edad (años)
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Ej: 30"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Ej: 75"
                />
              </div>

              {/* Height */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Altura (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Ej: 175"
                />
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nivel de Actividad
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="sedentary">Sedentario (poco o nada de ejercicio)</option>
                  <option value="light">Ligero (1-3 días/semana)</option>
                  <option value="moderate">Moderado (3-5 días/semana)</option>
                  <option value="active">Activo (6-7 días/semana)</option>
                  <option value="very-active">Muy Activo (2x al día)</option>
                </select>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Objetivo
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value as Goal)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="lose">Perder Peso</option>
                  <option value="maintain">Mantener Peso</option>
                  <option value="gain">Ganar Músculo</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateMetrics}
                className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Calcular</span>
              </button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {!results ? (
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Activity className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Completa el formulario para ver tus resultados</p>
                </div>
              </div>
            ) : (
              <>
                {/* BMI Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Scale className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Índice de Masa Corporal</h3>
                  </div>
                  <div className="text-5xl font-bold text-accent mb-2">{results.bmi}</div>
                  <div className={`text-lg font-semibold ${results.bmiColor}`}>
                    {results.bmiCategory}
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    Peso ideal: {results.minIdealWeight} - {results.maxIdealWeight} kg
                  </div>
                </div>

                {/* Calories Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Calorías Diarias</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Metabolismo Basal (BMR):</span>
                      <span className="font-bold text-lg">{results.bmr} kcal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Gasto Total (TDEE):</span>
                      <span className="font-bold text-lg">{results.tdee} kcal</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center">
                      <span className="text-gray-800 font-medium">Meta Diaria:</span>
                      <span className="font-bold text-2xl text-accent">
                        {results.targetCalories} kcal
                      </span>
                    </div>
                  </div>
                </div>

                {/* Macros Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Macronutrientes</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Proteína</span>
                        <span className="font-bold">{results.protein}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-red-500 h-3 rounded-full"
                          style={{ width: '35%' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Carbohidratos</span>
                        <span className="font-bold">{results.carbs}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-500 h-3 rounded-full"
                          style={{ width: '45%' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Grasas</span>
                        <span className="font-bold">{results.fat}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-yellow-500 h-3 rounded-full"
                          style={{ width: '25%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-accent to-orange-600 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-2">
                    ¿Necesitas ayuda personalizada?
                  </h3>
                  <p className="mb-4">
                    Agenda una consulta gratuita y te ayudaré a crear el plan perfecto para ti
                  </p>
                  <a
                    href="/contacto"
                    className="inline-block bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                  >
                    Contactar Ahora
                  </a>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          <p>
            * Estos cálculos son estimaciones. Para resultados óptimos, consulta con un profesional.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
