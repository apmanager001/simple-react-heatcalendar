export function generateDates(year, month) {
    const dates = [];
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const startDay = firstDay.getDay();
    
    for (let i = 0; i < startDay; i++) { 
        dates.push(null); 
    } 
    
    for (let day = 1; day <= lastDay.getDate(); day++) { 
        const date = new Date(year, month - 1, day); 
        dates.push(date.toISOString().split('T')[0]); 
    }
  return dates;
}
