import { useState } from 'react'
import {Calendar} from '../lib/main.js'

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
        // topLabelColor={'green'}
        // fontLabelColor={"yellow"}
        // borderColor={'green'}
        // borderWidth={.25}
        // buttonSize={32}
        // calendarGap={4}
        // calendarPadding={20}
        // roundedCalendar={12}
        // labelBackground={'black'} 
        // calendarBackground={'black'}
        // calendarDayColor={'lightblue'}
        // calendarBorder={true}
        // removeLabelDays={true}
        // removeDates={true}
        // selectedColor={'red'} 
        value={value}
        // dateColor={'purple'}
      />
    </div>
  );
}

export default App
