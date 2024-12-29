<!-- ![NPM Downloads](https://img.shields.io/npm/dw/%40apmanager001%2Fsimple-react-heatcalendar) -->
![npm bundle size](https://img.shields.io/bundlephobia/min/simple-react-heatcalendar)
# Simple React HeatCalendar 
This package provides a simple and customizable calendar component for React applications. It allows you to customize color throughout the component and pass values to fill color on select dates. Most heat maps display the full year. This allows you to display a month at a time. It also is responsive for mobile.
### Benefits
- Functional Calendar that allows you to move by year and months
- Day of the week are accurate 
- Pass the value prop to change color of specific dates
- Change color of everything on the calendar with props

## Examples of the component

<div style="display: flex; justify-content: space-around"> <img src="https://github.com/apmanager001/simple-react-heatcalendar/blob/main/assets/basic.jpg?raw=true" width="300" alt='image of component'/> <img src="https://github.com/apmanager001/simple-react-heatcalendar/blob/main/assets/custom.jpg?raw=true" width="300" alt='image of component'/>
</div>

## Installation 
```npm install simple-react-heatCalendar```

## import the component after install
```import {Calendar} from 'simple-react-heatcalendar'```

```
const value = [
    {
      day: "2024-12-31",
    },
    {
      day: "2024-12-30",
    },
    {
      day: "2024-12-28",
    },
  ];
```

```
<Calendar 
    topLabelColor={'green'}
    fontLabelColor={"yellow"}
    borderColor={'green'}
    borderWidth={.25}
    buttonSize={32}
    calendarGap={4}
    calendarPadding={20}
    roundedCalendar={12}
    labelBackground={'black'} 
    calendarBackground={'black'}
    calendarDayColor={'blue'}
    calendarBorder={true}
    removeLabelDays={false}
    removeDates={false}
    selectedColor={'red'} 
    value={value}
    dateColor={'purple'}
/>
```

## Props that can be passed to the component

| Prop               | Description                                                                                                    | Example                                                   | Misc                                                                                                                                             |
|--------------------|----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| fontLabelColor     | The color of the days of the week above the calendar                                                           | yellow or #333                                            | required to wrapped in a string                                                                                                                  |
| topLabelColor      | the font color on the top, the forward and reverse button and year and month font                              | yellow or #333                                            | required to wrapped in a string                                                                                                                  |
| selectedColor      | The fill color of the dates that are selected and passed in the value variable                                 | #333                                                      | required to wrapped in a string                                                                                                                  |
| value              | the value passed here fills in the corresponding date filled in                                                | [{value:1, day: "2024-12-31"},{value:1, day:"2024-12-30}] | value current doesn't have a purpose but will be built in future updates. label day is required and the day string is required in example format |
| dateColor          | the color of the date label                                                                                    | #333                                                      | required to wrapped in a string                                                                                                                  |
| calendarGap        | the gap between each cell in the calendar                                                                      | 1                                                         |                                                                                                                                                  |
| roundedCalendar    | rounds the corners of each date cell                                                                           | 12                                                        |                                                                                                                                                  |
| calendarPadding    | addins padding to full calendar                                                                                | 4                                                         |                                                                                                                                                  |
| calendarBorder     | boolean if you want a border                                                                                   | true or false                                             | boolean                                                                                                                                          |
| borderWidth        | the width of the border                                                                                        | 2                                                         | requires calendarBorder to be true                                                                                                               |
| borderColor        | color of the border                                                                                            | green                                                     | required to wrap in a string                                                                                                                     |
| buttonSize         | size of the forward/reverse buttons                                                                            | 32                                                        |                                                                                                                                                  |
| labelBackground    | the background color of the day labels                                                                         | green                                                     | required to wrap in a string                                                                                                                     |
| calendarBackground | Background behind each day cell, the color of this is passed to the fill color  if calendarDayColor is not set | blue                                                      | required to wrap in a string                                                                                                                     |
| calendarDayColor   | sets color of each day cell                                                                                    | blue                                                      | required to wrap in a string                                                                                                                     |
| removeLabelDays    | if false it removes the label days above the calendar                                                          | true or false                                             | boolean                                                                                                                                          |
| removeDates        | removes the number in each calendar cell                                                                       | true or false                                             | boolean                                                                                                                                          |


