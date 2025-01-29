import { useState } from 'react'
import {Calendar} from '@heatCalendar'

function App() {
  const value = [
    {
      value: 1,
      day: "2024-12-31",
    },
    {
      value: 1,
      day: "2024-12-30",
    },
    {
      value: 1,
      day: "2024-12-28",
    },
  ];
  return (
    <div className="flex justify-center">
      <Calendar 
        value={value}
        removeTopBorder={false}
      />
    </div>
  );
}

export default App
