const createWeekContainer = () => {
    const weekContainer = document.createElement(`div`);
    weekContainer.classList.add(`days-of-week`);
    return weekContainer;
}

const createDayNumberContainer = (className, number, data) => {
    const dayContainer = document.createElement(`p`);
    if (className !== ``) {
        dayContainer.classList.add(className);
    }
    const todaysDate = new Date();
    if (number === todaysDate.getDate() && data.currentMonth === todaysDate.getMonth()
        && data.currentYear === todaysDate.getFullYear()) {
        dayContainer.classList.add(`current-day`);
    }
    dayContainer.textContent = number;
    return dayContainer;
}

export { createWeekContainer, createDayNumberContainer };