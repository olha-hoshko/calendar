const winterMonthsIndexes = [`0`, `1`, `11`];
const springMonthsIndexes = [`2`, `3`, `4`];
const summerMonthsIndexes = [`5`, `6`, `7`];

function setCalendarTheme(monthIndex, mainContainer) {
    mainContainer.className = ``;
    const monthIndexString = monthIndex.toString();
    if (winterMonthsIndexes.includes(monthIndexString)) {
        mainContainer.classList.add(`winter-theme`);
    } else if (springMonthsIndexes.includes(monthIndexString)) {
        mainContainer.classList.add(`spring-theme`);
    } else if (summerMonthsIndexes.includes(monthIndexString)) {
        mainContainer.classList.add(`summer-theme`);
    } else {
        mainContainer.classList.add(`autumn-theme`);
    }
}

export { setCalendarTheme };