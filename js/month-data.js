import { daysOfWeek } from './index';

const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`,
    `September`, `October`, `November`, `December`];

class MonthData {
    constructor(currentDate = new Date()) {
        this.currentDate = currentDate;
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.currentMonthName = months[this.currentMonth];
        this.daysInCurrentMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
        this.firstDayOfTheWeek = this.getDayOfTheWeek(new Date(this.currentYear, this.currentMonth,
            this.daysInCurrentMonth[0]));
    }

    getDayOfTheWeek(chosenDate) {
        const weekdayNumber = chosenDate.getDay();
        return weekdayNumber === 0 ? daysOfWeek - 1 : weekdayNumber - 1;
    }

    getDaysInMonth(chosenMonth, chosenYear) {
        const chosenDate = new Date(chosenYear, chosenMonth, 1);
        let daysInMonth = [];
        while (chosenDate.getMonth() === chosenMonth) {
            daysInMonth.push(chosenDate.getDate());
            chosenDate.setDate(chosenDate.getDate() + 1);
        }
        return daysInMonth;
    }
}

export { MonthData, months };