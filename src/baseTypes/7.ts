/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayіofTheWeek {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
 }
 
 function isWeekend(day: DayіofTheWeek): boolean {
	return day === DayіofTheWeek.Saturday || day === DayіofTheWeek.Sunday;
 }
 
 const whatDay = isWeekend(DayіofTheWeek.Monday)
 console.log('WhatDay: ', whatDay)