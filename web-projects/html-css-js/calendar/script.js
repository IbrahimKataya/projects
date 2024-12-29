const month = document.getElementById("month");
const day = document.getElementById("day");
const dayNum = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
const monthEl = date.getMonth();


year.innerHTML = date.getFullYear();
dayNum.innerHTML = date.getDate();

day.innerHTML = date.toLocaleDateString("en",{
    weekday: "long",
})

month.innerHTML = date.toLocaleDateString("en",{
    month: "long",
})