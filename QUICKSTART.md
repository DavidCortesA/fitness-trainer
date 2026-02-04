# 🚀 GUÍA DE INICIO RÁPIDO

## Instalación en 3 Pasos

### 1️⃣ Instalar Dependencias
```bash
npm install
```

### 2️⃣ Ejecutar en Desarrollo
```bash
npm run dev
```

### 3️⃣ Abrir en Navegador
Visita: http://localhost:3000

---

## ✅ Verificación

Si todo funciona correctamente, deberías ver:
- ✅ Página de inicio con hero animado
- ✅ Navegación responsive
- ✅ 5 páginas funcionando
- ✅ Animaciones suaves
- ✅ Calculadora fitness operativa
- ✅ Slider antes/después interactivo

---

## 🔧 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 already in use"
```bash
# Usar otro puerto
npm run dev -- -p 3001
```

### Error de TypeScript
```bash
npm run build
```

---

## 📦 Dependencias Principales

- next: ^15.1.5
- react: ^19.0.0
- framer-motion: ^11.15.0
- lucide-react: ^0.469.0
- tailwindcss: ^3.4.17

---

## 🎯 Próximos Pasos

1. **Personalizar Contenido**
   - Cambiar textos en cada página
   - Actualizar información de contacto
   - Modificar servicios y precios

2. **Cambiar Imágenes**
   - Reemplazar URLs de Unsplash
   - Usar imágenes propias del entrenador

3. **Configurar Backend**
   - Integrar formulario de contacto
   - Configurar base de datos (opcional)
   - Setup de emails

4. **Deploy**
   - Subir a Vercel (recomendado)
   - Configurar dominio personalizado

---

## 💡 Tips

- Las animaciones funcionan mejor en navegadores modernos
- Usa Chrome DevTools para testing responsive
- Prueba el slider en dispositivos táctiles
- Verifica la calculadora con diferentes valores

---

## 📞 Soporte

Si encuentras algún problema:
1. Revisa el README.md completo
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de usar Node.js 18+

---

**¡Listo para empezar! 🎉**
