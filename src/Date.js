  const monthNames = [
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

/**
 * Takes in current date and formats it for front end
 * @param {} date current date
 * @returns 
 */
export function getFormatDate(date) {
  const uploadedDate = new Date(date);
  const formatDate = monthNames[uploadedDate.getMonth()] + " " + uploadedDate.getDate() + ", " + uploadedDate.getFullYear();
  return formatDate;
}

/**
 * Recieves date item was created and calculates difference in days 
 * @param {*} date 
 * @returns 
 */
export function getDateDifference(date) {
    const prevDate = new Date(date);
    const currentDate = Date.now();
    const diffDays = parseInt((currentDate - prevDate) / (1000 * 60 * 60 * 24), 10);
    return diffDays;
}
