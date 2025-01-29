import React, { useState, useEffect } from 'react'
import {generateDates} from './dates'
import { Forward, Reverse } from "./buttons.jsx";


const Calendar = ({
  fontSize,
  dateColor,
  removeTopBorder,
  selectedColor,
  fontLabelColor,
  value = [{}],
  calendarBackground,
  labelBackground,
  topLabelColor,
  calendarGap,
  roundedCalendar,
  calendarPadding,
  calendarBorder,
  borderWidth,
  borderColor,
  buttonSize,
  removeDates,
  removeLabelDays,
  calendarDayColor
}) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  //   const today = date.toLocaleDateString("en-CA");
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);

  const dates = generateDates(currentYear, currentMonth);

  //   const dates = generateDates(year, month);

  const handlePreviousMonth = () => {
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(12);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePreviousYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };

  const getMonthName = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month - 1];
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            margin: "1.5rem",
            width: "24rem",
            borderWidth: removeTopBorder ? "1px" : "0px",
            borderColor: "#6B7280",
            padding: "0.5rem",
            borderRadius: "9999px",
          }}
        >
          <span
            onClick={handlePreviousYear}
            style={{
              color: topLabelColor ? topLabelColor : "#333",
              cursor: "pointer",
            }}
          >
            <Reverse size={buttonSize || 32} />
          </span>
          <h1
            style={{
              color: topLabelColor ? topLabelColor : "#333",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            {currentYear}
          </h1>
          <span
            onClick={handleNextYear}
            style={{
              color: topLabelColor ? topLabelColor : "#333",
              cursor: "pointer",
            }}
          >
            <Forward size={buttonSize || 32} />
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
            width: "24rem",
            borderWidth: removeTopBorder ? "1px" : "0px",
            borderColor: "#6B7280",
            padding: "0.5rem",
            borderRadius: "9999px",
          }}
        >
          <span
            onClick={handlePreviousMonth}
            style={{
              color: topLabelColor ? topLabelColor : "#333",
              cursor: "pointer",
            }}
          >
            <Reverse size={buttonSize || 32} />
          </span>
          <h2
            style={{
              color: topLabelColor ? topLabelColor : "#333",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            {getMonthName(currentMonth)}
          </h2>
          <span
            onClick={handleNextMonth}
            style={{
              color: topLabelColor ? topLabelColor : "#333",
              cursor: "pointer",
            }}
          >
            <Forward size={buttonSize || 32} />
          </span>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: labelBackground,
            padding: calendarPadding,
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridTemplateRows: "repeat(1, 1fr)",
            marginLeft: "2.5rem",
            marginRight: "2.5rem",
            gap: 0,
          }}
        >
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              style={{
                color: fontLabelColor ? fontLabelColor : "#333",
                textAlign: "center",
                fontWeight: "bold",
                padding: ".5rem",
              }}
            >
              {removeLabelDays !== false ? day : ""}
            </div>
          ))}
        </div>
        <div
          style={{
            backgroundColor: calendarBackground
              ? calendarBackground
              : "inherit",
            padding: calendarPadding,
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            marginLeft: "2.5rem",
            marginRight: "2.5rem",
            gap: calendarGap || 4,
          }}
        >
          {dates.map((date, index) => {
            const isValueDate = value.some((value) => value.day === date);
            const dayNumber = date ? String(new Date(date).getUTCDate()) : null;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: isValueDate
                    ? selectedColor || "#00ab66"
                    : calendarDayColor
                    ? calendarDayColor
                    : "inherit",
                  borderRadius: roundedCalendar ? roundedCalendar : 12,
                  borderWidth:
                    calendarBorder && date ? borderWidth : date ? 1 : 0,
                  borderStyle: "solid",
                  borderColor: borderColor ? borderColor : "#333",
                  padding: ".5rem",
                  height: "4rem",
                }}
                id={date || `empty-${index}`}
              >
                <span
                  style={{
                    color: dateColor ? dateColor : "#333",
                    display: "flex",
                    height: "100%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    fontSize: "0.875rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {removeDates !== false ? dayNumber : ""}
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar