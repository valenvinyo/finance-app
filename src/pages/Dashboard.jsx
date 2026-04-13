import React from 'react';
const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
export default function Dashboard({ currentMonth }) {
  const hora = new Date().getHours();
  const saludo = hora < 12 ? 'Buenos días' : hora < 20 ? 'Buenas tardes' : 'Buenas noches';
  return (
    <div className="page">
      <h2 className="greeting">{saludo}, Valentina 👋</h2>
      <p className="page-placeholder">{MESES[currentMonth.month]} {currentMonth.year} — El dashboard se construye en las próximas fases.</p>
    </div>
  );
}