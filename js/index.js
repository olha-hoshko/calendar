import '../scss/main.scss';
import '../scss/days-of-week.scss';
import '../scss/arrow-btns.scss';

import { MonthData, months } from './month-data';
import { createWeekContainer, createDayNumberContainer } from './containers-creator';
import { setCalendarTheme } from './theme-changer';

const daysCellsContainer = document.querySelector(`.calendar-days`);
const mainTag = document.querySelector('main');

const daysOfWeek = 7;
const weeksInCalendar = 6;

const setDaysToCalendar = (data) => {
    const monthIndex = months.indexOf(data.currentMonthName);
    setCalendarTheme(monthIndex, mainTag);

    const monthNameAndYear = document.querySelector(`.current-month`);
    monthNameAndYear.textContent = `${data.currentMonthName} ${data.currentYear}`;

    let week = createWeekContainer();
    let firstCalendarCellNumber = 0;
    const prevMonthData = new MonthData(new Date(data.currentYear, data.currentMonth - 1, 1));
    const prevMonthDays = prevMonthData.daysInCurrentMonth.length;
    while (firstCalendarCellNumber < data.firstDayOfTheWeek) {
        const prevMonthDayContainer = createDayNumberContainer(`another-month-day`,
            prevMonthDays - firstCalendarCellNumber, prevMonthData);
        week.prepend(prevMonthDayContainer);
        ++firstCalendarCellNumber;
    }

    let nextMonthCounter = 0;
    const nextMonthData = new MonthData(new Date(data.currentMonth, data.currentMonth + 1, 1));
    data.daysInCurrentMonth.forEach(day => {
        if (week.children.length >= daysOfWeek) {
            daysCellsContainer.appendChild(week);
            week = createWeekContainer();
        }
        const dayContainer = createDayNumberContainer('', day, data);
        week.appendChild(dayContainer);
        if (day === data.daysInCurrentMonth.length) {
            let anotherMonthDay = 0;
            let nextMonthDaysAmount = daysOfWeek - week.children.length;
            while (anotherMonthDay < nextMonthDaysAmount) {
                const nextMonthDayContainer = createDayNumberContainer(`another-month-day`,
                    anotherMonthDay + 1, nextMonthData);
                week.appendChild(nextMonthDayContainer);
                ++anotherMonthDay;
            }
            nextMonthCounter = anotherMonthDay + 1;
            daysCellsContainer.appendChild(week);
        }
    });

    if (daysCellsContainer.children.length < weeksInCalendar) {
        week = createWeekContainer();
        let anotherMonthDay = 0;
        while (anotherMonthDay < daysOfWeek) {
            const nextMonthDayContainer = createDayNumberContainer(`another-month-day`,
                anotherMonthDay + nextMonthCounter, nextMonthData);
            week.appendChild(nextMonthDayContainer);
            ++anotherMonthDay;
        }
        daysCellsContainer.appendChild(week);
    }
}

let data = new MonthData();
setDaysToCalendar(data);

const showAnotherMonth = (isNextMonth) => {
    daysCellsContainer.innerHTML = ``;
    const anotherMonth = isNextMonth ? data.currentMonth + 1 : data.currentMonth - 1;
    data = new MonthData(new Date(data.currentYear, anotherMonth));
    setDaysToCalendar(data);
}

const prevBtn = document.querySelector(`.prev-month`);
prevBtn.addEventListener(`click`, () => showAnotherMonth(false));

const nextBtn = document.querySelector(`.next-month`);
nextBtn.addEventListener(`click`, () => showAnotherMonth(true));

export { daysOfWeek };