let money = prompt("Ваш бюджет в месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let questions1 = prompt("Введите обязательную статью расходом в этом месяце", '');
let questions12 = prompt("Во сколько обойдётся", '');
let questions2 = prompt("Введите обязательную статью расходом в этом месяце", '');
let questions22 = prompt("Во сколько обойдётся", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

appData.expenses.questions1 = questions12; //работа с объектом:  "ответ на первый вопрос" : "ответ на второй вопрос"
appData.expenses.questions2 = questions22;
console.log(appData.expenses.questions2);
alert(appData.budget / 30); // за один день

console.log(appData.budjet + ' ' + appData.timeData); // вывел бюджет и дату введенную пользователем и попавшую в объект