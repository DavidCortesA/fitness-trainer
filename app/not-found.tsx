import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary text-center px-4 pt-20 pb-10">
      <div className="max-w-md">
        <AlertTriangle
          className="w-24 h-24 text-accent mb-6 mx-auto"
          strokeWidth={1.5}
        />
        <h1 className="text-8xl font-bold text-primary tracking-tighter">404</h1>
        <h2 className="text-4xl font-semibold text-primary mt-4 mb-2">
          Página No Encontrada
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}