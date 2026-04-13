import React from 'react';

const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
               'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

export default function MonthSelector({ currentMonth, setCurrentMonth }) {
  const { month, year } = currentMonth;

  const prev = () => month === 0
    ? setCurrentMonth({ month: 11, year: year - 1 })
    : setCurrentMonth({ month: month - 1, year });

  const next = () => month === 11
    ? setCurrentMonth({ month: 0, year: year + 1 })
    : setCurrentMonth({ month: month + 1, year });

  return (
    <div className="month-selector">
      <button className="month-btn" onClick={prev}>‹</button>
      <span className="month-label">{MESES[month]} {year}</span>
      <button className="month-btn" onClick={next}>›</button>
    </div>
  );
}