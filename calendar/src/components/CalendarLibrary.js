import { useState } from 'react';
import Calendar from 'react-calendar';
import '../App.css';

function CalendarLibrary() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>Kalender mit React</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Ausgewähltes Datum:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default CalendarLibrary;