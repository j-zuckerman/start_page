import styles from './date.module.css';

function determineMonth(monthInteger) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[monthInteger];
}

function determineDayOfTheWeek(dayInteger) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return days[dayInteger];
}

function DateDisplay() {
  let currDate = new Date();

  let monthInteger = currDate.getMonth();
  let month = determineMonth(monthInteger);

  let dayOfTheMonth = currDate.getDate();

  let dayInteger = currDate.getDay();
  let dayOfTheWeek = determineDayOfTheWeek(dayInteger);

  let fullDateToDisplay = `${dayOfTheWeek}, ${month} ${dayOfTheMonth}`;

  return <p className={styles.date}>{fullDateToDisplay}</p>;
}

export default DateDisplay;
