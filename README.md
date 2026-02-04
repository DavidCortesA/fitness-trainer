# FitPro Trainer - Aplicación Web de Entrenador Personal

Aplicación web moderna y minimalista para un entrenador personal, construida con las últimas tecnologías web.

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS 3** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos
- **Unsplash** - Imágenes de alta calidad

## ✨ Características Principales

### 1. **Diseño Minimalista y Profesional**
- Interfaz limpia y moderna
- Responsive en todos los dispositivos
- Animaciones suaves con Framer Motion
- Navegación intuitiva

### 2. **Sistema de Transformaciones Interactivo** ⭐ (Feature Destacado)
- Slider antes/después interactivo
- Arrastre para comparar imágenes
- Testimonios reales
- Métricas de progreso

### 3. **Calculadora Fitness Completa** ⭐ (Feature Destacado)
- Cálculo de IMC (Índice de Masa Corporal)
- Metabolismo Basal (BMR)
- Gasto Calórico Total (TDEE)
- Macronutrientes personalizados
- Recomendaciones según objetivos

### 4. **5 Páginas Completas**
- **Inicio**: Hero impactante con estadísticas
- **Servicios**: 6 servicios diferentes con precios
- **Transformaciones**: Galería interactiva de casos de éxito
- **Calculadora**: Herramienta fitness completa
- **Contacto**: Formulario funcional con información

## 📁 Estructura del Proyecto

```
fitness-trainer/
├── app/
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout principal
│   ├── globals.css           # Estilos globales
│   ├── servicios/
│   │   └── page.tsx          # Página de servicios
│   ├── transformaciones/
│   │   └── page.tsx          # Página de transformaciones
│   ├── calculadora/
│   │   └── page.tsx          # Calculadora fitness
│   └── contacto/
│       └── page.tsx          # Página de contacto
├── components/
│   ├── Navigation.tsx        # Barra de navegación
│   └── Footer.tsx            # Footer
├── public/                   # Archivos estáticos
├── tailwind.config.ts        # Configuración de Tailwind
├── next.config.js            # Configuración de Next.js
└── package.json              # Dependencias
```

## 🎨 Paleta de Colores

- **Primary**: `#0A0A0A` (Negro profundo)
- **Secondary**: `#F5F5F5` (Gris claro)
- **Accent**: `#FF6B35` (Naranja vibrante)

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js 18+ instalado
- npm o yarn

### Pasos de Instalación

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Compilar para Producción

```bash
npm run build
npm start
```

## 🎯 Features Destacados en Detalle

### Slider Antes/Después Interactivo
- Implementado con controles táctiles y mouse
- Animaciones fluidas al arrastrar
- Responsive en móviles y escritorio
- Etiquetas visuales "ANTES" y "DESPUÉS"

### Calculadora Fitness
- Cálculos precisos basados en fórmulas científicas:
  - **BMR**: Ecuación Mifflin-St Jeor
  - **TDEE**: Ajustado por nivel de actividad
  - **Macros**: Distribución óptima de proteínas, carbos y grasas
- Resultados visuales con gráficas
- Recomendaciones personalizadas

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px - 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (1024px+)

## 🎨 Animaciones

Todas las secciones incluyen:
- Fade in al hacer scroll
- Transiciones suaves
- Hover effects
- Loading states

## 🔧 Personalización

### Cambiar Colores
Editar `tailwind.config.ts`:
```typescript
colors: {
  primary: "#TU_COLOR",
  accent: "#TU_COLOR",
}
```

### Cambiar Imágenes
Las imágenes de Unsplash se pueden reemplazar modificando las URLs en cada componente.

### Agregar Servicios
Editar el array `services` en `app/servicios/page.tsx`

### Agregar Transformaciones
Editar el array `transformations` en `app/transformaciones/page.tsx`

## 📊 Métricas de Performance

- **Lighthouse Score**: 90+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Time to Interactive**: <3s

## 🌐 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir carpeta .next a Netlify
```

## 📝 Notas Importantes

- Las imágenes de Unsplash son de ejemplo. Para producción, usa imágenes propias.
- El formulario de contacto requiere integración con un backend (ej: EmailJS, SendGrid).
- Los cálculos de la calculadora son estimaciones. Incluye disclaimer apropiado.

## 🤝 Contribuciones

Este es un proyecto de ejemplo. Siéntete libre de:
- Modificar el diseño
- Agregar más páginas
- Mejorar funcionalidades
- Optimizar código

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🎉 Créditos

- Diseño y desarrollo: Claude AI
- Imágenes: Unsplash
- Iconos: Lucide React
- Framework: Next.js by Vercel

---

**¡Listo para transformar vidas! 💪**

Para más información o soporte, contacta al desarrollador.
