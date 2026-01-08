import React, { useState } from 'react';
import { Zap, Box, BarChart3, Check, ArrowRight } from 'lucide-react';
import GalaxyBackground from './components/GalaxyBackground';

function App() {
  const [activeTab, setActiveTab] = useState('proyecto');
  const [accepted, setAccepted] = useState(false);
  const [signDate, setSignDate] = useState('');

  const handleAccept = () => {
    if (confirm("¿Estás de acuerdo con los términos de Merchan.Dev y deseas iniciar el proyecto por 400 USDT?")) {
      const now = new Date();
      setSignDate("FECHA DE FIRMA: " + now.toLocaleString() + " | IP: REGISTRADA");
      setAccepted(true);
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <GalaxyBackground /> {/* Keeping the background as requested in previous prompt, or should I remove it? User said "en este diseño de home" which has its own background styles. The HTML provided has background-color: #020617. I will keep GalaxyBackground but maybe adjust transparency or let the CSS override. Actually the provided CSS sets body background. Let's wrap the content. */}

      <div className="font-sans text-slate-50 min-h-screen p-4 md:p-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 animate-fade">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              {/* Logo Integration */}
              <div className="mb-2">
                <img src="/logo.png" alt="Merchan.Dev Logo" className="h-12 object-contain" />
              </div>
              {/* Keeping text as subtitle or fallback if needed, but user said "en el nombre usa este logo" */}
              {/* <h1 className="text-3xl font-black tracking-tighter uppercase">Merchan<span className="gradient-text">.Dev</span></h1> */}
              <p className="text-slate-500 text-sm font-medium">Full Stack Software Solutions</p>
            </div>
            <div className="glass px-6 py-2 rounded-full border-blue-500/30">
              <span className="text-blue-400 font-bold text-sm tracking-widest">PROPUESTA DE DESARROLLO</span>
            </div>
          </header>

          <nav className="flex gap-8 border-b border-white/5 mb-8 animate-fade" style={{ animationDelay: '0.1s' }}>
            <button
              onClick={() => setActiveTab('proyecto')}
              className={`nav-tab pb-4 text-sm font-bold transition-all uppercase tracking-widest ${activeTab === 'proyecto' ? 'active text-blue-400 border-b-2 border-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              El Proyecto
            </button>
            <button
              onClick={() => setActiveTab('terminos')}
              className={`nav-tab pb-4 text-sm font-bold transition-all uppercase tracking-widest ${activeTab === 'terminos' ? 'active text-blue-400 border-b-2 border-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Términos y Condiciones
            </button>
          </nav>

          {activeTab === 'proyecto' && (
            <main className="animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="mb-8">
                <h2 className="text-4xl font-extrabold mb-4">Dashboard de <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">Rentabilidad</span></h2>
                <p className="text-slate-400">Desarrollo de plugin a medida para WooCommerce enfocado en logística Andreani y visualización de margen real por pedido.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm">
                <div className="glass p-5 rounded-2xl border-white/5 bg-slate-900/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="text-yellow-400 w-5" />
                    <span className="font-bold">Decisiones Rápidas</span>
                  </div>
                  <p className="text-slate-500">Visualización de pedidos rentables vs pérdidas con código de colores.</p>
                </div>
                <div className="glass p-5 rounded-2xl border-white/5 bg-slate-900/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Box className="text-blue-400 w-5" />
                    <span className="font-bold">Logística Optimizada</span>
                  </div>
                  <p className="text-slate-500">Módulo Andreani con estados visuales y exportación en 1-clic.</p>
                </div>
              </div>

              <div className="glass rounded-3xl p-6 mb-10 overflow-hidden bg-slate-900/60 backdrop-blur-md border border-white/10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 text-indigo-400" /> Desglose de Presupuesto
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="text-slate-300">Core de Cálculo (Profit Real)</span>
                    <span className="font-mono font-bold text-blue-400">170 USDT</span>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="text-slate-300">Integración Logística Andreani</span>
                    <span className="font-mono font-bold text-blue-400">100 USDT</span>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <span className="text-slate-300">Dashboard Modern UI (Tailwind)</span>
                    <span className="font-mono font-bold text-blue-400">100 USDT</span>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-xl transition-colors border-b border-white/5 pb-5">
                    <span className="text-slate-300">QA & Despliegue</span>
                    <span className="font-mono font-bold text-blue-400">30 USDT</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-black text-xl">TOTAL DEL SERVICIO</span>
                    <span class="text-3xl font-black text-emerald-400">400 USDT</span>
                  </div>
                  <div className="text-right text-xs text-slate-500">Plazo de entrega: 5 días hábiles</div>
                </div>
              </div>
            </main>
          )}

          {activeTab === 'terminos' && (
            <main className="animate-fade">
              <div className="glass rounded-3xl p-8 space-y-6 text-sm leading-relaxed text-slate-400 bg-slate-900/60 backdrop-blur-md border border-white/10">
                <h2 className="text-2xl font-bold text-white">Términos del Servicio</h2>

                <section>
                  <h4 className="text-white font-bold mb-2">1. Garantía del Trabajo</h4>
                  <p>Merchan.Dev garantiza la funcionalidad del software según los requisitos descritos en esta propuesta. Se entrega un código limpio, funcional y libre de errores críticos al momento de la entrega.</p>
                </section>

                <section>
                  <h4 className="text-white font-bold mb-2">2. Política de No Reembolso</h4>
                  <p>Debido a la naturaleza del servicio (desarrollo de software a medida y horas hombre invertidas), <span className="text-white font-bold">no se realizarán devoluciones de dinero</span> una vez iniciado el desarrollo tras la aceptación de este contrato.</p>
                </section>

                <section>
                  <h4 className="text-white font-bold mb-2">3. Mantenimientos y Soporte</h4>
                  <p>El presupuesto de 400 USDT cubre el desarrollo y puesta en marcha inicial. <span className="text-white font-bold">Cualquier mantenimiento, actualización de WordPress/WooCommerce futura o nuevas funciones se presupuestarán por separado.</span></p>
                </section>

                <section>
                  <h4 className="text-white font-bold mb-2">4. Propiedad Intelectual</h4>
                  <p>Al finalizar el pago total, el cliente adquiere el derecho de uso ilimitado del software desarrollado para su dominio específico.</p>
                </section>
              </div>
            </main>
          )}

          <section className="mt-10 mb-20 animate-fade" style={{ animationDelay: '0.3s' }}>
            {accepted ? (
              <div className="glass border-emerald-500/30 p-6 rounded-2xl mb-6 flex flex-col items-center text-center bg-slate-900/60 backdrop-blur-md">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-3">
                  <Check className="text-emerald-400" />
                </div>
                <p className="text-emerald-400 font-bold text-lg">¡Contrato Aceptado!</p>
                <p className="text-xs text-slate-500 font-mono mt-1">{signDate}</p>
                <p className="text-[10px] text-slate-600 mt-2 italic">Desarrollado por Merchan.Dev</p>
              </div>
            ) : (
              <button
                onClick={handleAccept}
                className="w-full bg-white text-slate-950 font-black py-3 md:py-5 text-xs md:text-base rounded-2xl hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/10 flex justify-center items-center gap-2 md:gap-3"
              >
                ACEPTAR CONDICIONES Y EMPEZAR (400 USDT)
                <ArrowRight className="w-5" />
              </button>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
