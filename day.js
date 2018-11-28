// Returns the name of the day for a given date.
function dayName(date) {
                const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                return daysOfTheWeek[date.getDay()];
}

function greeting(date) {
    return `Hello, World!, Happy ${dayName(date)} `;
}