import React, { useState } from 'react';
import { Zap, Box, BarChart3, Check, ArrowRight } from 'lucide-react';
import GalaxyBackground from './components/GalaxyBackground';

function App() {
  const [activeTab, setActiveTab] = useState('proyecto');
  const [accepted, setAccepted] = useState(false);
  const [signDate, setSignDate] = useState('');
  const [isSigning, setIsSigning] = useState(false);
  const [clientName, setClientName] = useState('');
  const [expandedModule, setExpandedModule] = useState(null);

  const handleConfirmSign = () => {
    if (!clientName.trim()) return;

    if (confirm("¿Confirmas que deseas iniciar el proyecto por 400 USDT?")) {
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
                <h2 className="text-4xl font-extrabold mb-4">Estructura del <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">Proyecto</span></h2>
                <div className="flex justify-between items-end">
                  <p className="text-slate-400 max-w-xl">Desglose técnico y presupuesto detallado por módulos de desarrollo.</p>
                  <div className="text-right hidden md:block">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Presupuesto Total</p>
                    <p className="text-3xl font-black text-emerald-400">400 USDT</p>
                    <p className="text-xs text-slate-500">Duración: 5 Días</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  {
                    id: 1,
                    title: "Módulo 1 – Arquitectura y Metadatos",
                    day: "Día 1",
                    icon: <Box className="w-5 h-5 text-blue-400" />,
                    objective: "Almacenar el costo real del producto y centralizar valores fijos.",
                    details: [
                      { sub: "Costo Producto", desc: "Inyección de campo 'product_cost' (float) y persistencia segura." },
                      { sub: "Settings Globales", desc: "Configuración de % Comisión Pasarela, Impuestos y Costo Fulfillment." },
                      { sub: "Gasto Publicitario (CPA)", desc: "Endpoint REST para carga diaria y prorrateo de CPA." }
                    ]
                  },
                  {
                    id: 2,
                    title: "Módulo 2 – Core de Cálculos",
                    day: "Día 2",
                    icon: <Zap className="w-5 h-5 text-yellow-400" />,
                    objective: "Motor de rentabilidad real por pedido (multicantidad y envíos).",
                    details: [
                      { sub: "Lógica de Costos", desc: "Iteración de items y cálculo preciso (Costo x Cantidad + Extras)." },
                      { sub: "Fórmula Maestra", desc: "Total - (Costos + Comisión + Envío + Impuestos + CPA)." },
                      { sub: "Automatización", desc: "Hooks en 'processing/completed' para cálculo en tiempo real." }
                    ]
                  },
                  {
                    id: 3,
                    title: "Módulo 3 – Logística Andreani",
                    day: "Día 3",
                    icon: <ArrowRight className="w-5 h-5 text-purple-400" />,
                    objective: "Exportación de pedidos y gestión de estados logísticos.",
                    details: [
                      { sub: "Exportación Masiva", desc: "Generador de archivos con mapeo exacto de columnas Andreani." },
                      { sub: "Control Visual", desc: "Badges de estado: Pendiente, Exportado, Entregado." }
                    ]
                  },
                  {
                    id: 4,
                    title: "Módulo 4 – Dashboard Visual",
                    day: "Día 4",
                    icon: <BarChart3 className="w-5 h-5 text-pink-400" />,
                    objective: "Visualización de KPIs, fugas y semáforo de rentabilidad.",
                    details: [
                      { sub: "Tarjetas KPI", desc: "Ventas, Costos, Ganancia Neta y Margen Promedio." },
                      { sub: "Rentabilidad Visual", desc: "Semáforo: Rojo (<0%), Amarillo (1-15%), Verde (>15%)." },
                      { sub: "Análisis", desc: "Comparativa de rentabilidad unitaria vs volumen." }
                    ]
                  },
                  {
                    id: 5,
                    title: "Módulo 5 – QA y Optimización",
                    day: "Día 5",
                    icon: <Check className="w-5 h-5 text-emerald-400" />,
                    objective: "Auditoría de código, performance y entrega final.",
                    details: [
                      { sub: "Performance", desc: "Índices en BD y queries optimizadas (WC_Order_Query)." },
                      { sub: "UX/UI", desc: "Diseño responsive y adaptación móvil del dashboard." },
                      { sub: "Entregable", desc: "Plugin funcional, código limpio y control total." }
                    ]
                  }
                ].map((module) => (
                  <div key={module.id} className="glass rounded-xl overflow-hidden border border-white/5 bg-slate-900/60 transition-all hover:border-white/10">
                    <button
                      onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                      className="w-full p-5 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-800 transition-colors`}>
                          {module.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-100 text-sm md:text-base">{module.title}</h3>
                          <p className="text-xs text-slate-500 font-mono mt-1">{module.objective}</p>
                        </div>
                      </div>
                      <div className={`transform transition-transform duration-300 ${expandedModule === module.id ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><path d="m6 9 6 6 6-6" /></svg>
                      </div>
                    </button>

                    <div className={`grid transition-all duration-300 ease-in-out ${expandedModule === module.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="p-5 pt-0 border-t border-white/5 bg-black/20">
                          <ul className="space-y-3 mt-4">
                            {module.details.map((detail, idx) => (
                              <li key={idx} className="text-sm text-slate-400 flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5 shrink-0"></span>
                                <span>
                                  <strong className="text-slate-300 block mb-0.5">{detail.sub}</strong>
                                  {detail.desc}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
                            <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-800 text-slate-500 uppercase tracking-wider">{module.day}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:hidden glass p-4 rounded-xl text-center mb-8 border border-emerald-500/20 bg-emerald-500/5">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Presupuesto Total</p>
                <p className="text-3xl font-black text-emerald-400">400 USDT</p>
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
                <p className="text-white font-bold text-xl mt-2">{clientName}</p>
                <p className="text-xs text-slate-500 font-mono mt-1">{signDate}</p>
                <p className="text-[10px] text-slate-600 mt-2 italic">Desarrollado por Merchan.Dev</p>
              </div>
            ) : isSigning ? (
              <div className="glass p-6 rounded-2xl border-blue-500/30 bg-slate-900/60 backdrop-blur-md">
                <h3 className="text-lg font-bold mb-4 text-center">Finalizar Contratación</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Nombre y Apellido</label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Escribe tu nombre completo"
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <button
                    onClick={handleConfirmSign}
                    disabled={!clientName.trim()}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    CONFIRMAR Y FIRMAR
                    <Zap className="w-4" />
                  </button>
                  <button
                    onClick={() => setIsSigning(false)}
                    className="w-full text-slate-500 text-sm font-medium hover:text-white transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsSigning(true)}
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
