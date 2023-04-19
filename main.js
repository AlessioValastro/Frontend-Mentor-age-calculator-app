const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", () => {
  calcAge();
});

function calcAge() {
  /* userData */
  let birthDay = document.querySelector("#inputDay").value;
  let birthMonth = document.querySelector("#inputMonth").value;
  let birthYear = document.querySelector("#inputYear").value;
  /* currentDate */
  let date = new Date();

  let currentDay = date.getDate();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();

  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let count = 0;

  /* resets */
  document.querySelector("#emptyDay").classList.add("hidden");
  document.querySelector("#invalidDay").classList.add("hidden");
  document.querySelector("#emptyMonth").classList.add("hidden");
  document.querySelector("#invalidMonth").classList.add("hidden");
  document.querySelector("#emptyYear").classList.add("hidden");
  document.querySelector("#invalidYear").classList.add("hidden");
  document.querySelector("#tooOld").classList.add("hidden");
  document.querySelector("#yearTitle").classList.remove("highlight");
  document.querySelector("#dayTitle").classList.remove("highlight");
  document.querySelector("#monthTitle").classList.remove("highlight");

  if (birthDay == "") {
    document.querySelector("#emptyDay").classList.remove("hidden");
    document.querySelector("#dayTitle").classList.add("highlight");
    count += 1;
  } else if (birthDay <= 0 || birthDay > months[birthMonth - 1]) {
    document.querySelector("#invalidDay").classList.remove("hidden");
    document.querySelector("#dayTitle").classList.add("highlight");
    count += 1;
  }
  if (birthMonth == "") {
    document.querySelector("#emptyMonth").classList.remove("hidden");
    document.querySelector("#monthTitle").classList.add("highlight");
    count += 1;
  } else if (birthMonth <= 0 || birthMonth > 12) {
    document.querySelector("#invalidMonth").classList.remove("hidden");
    document.querySelector("#monthTitle").classList.add("highlight");
    count += 1;
  }
  if (birthYear == "") {
    document.querySelector("#emptyYear").classList.remove("hidden");
    document.querySelector("#yearTitle").classList.add("highlight");
    count += 1;
  } else if (birthYear > currentYear) {
    document.querySelector("#invalidYear").classList.remove("hidden");
    document.querySelector("#yearTitle").classList.add("highlight");
    count += 1;
  } /* easter egg */ else if (birthYear < 1900) {
    document.querySelector("#tooOld").classList.remove("hidden");
    document.querySelector("#yearTitle").classList.add("highlight");
    count += 1;
  }

  if (count != 0) {
    return;
  }

  class userAge {
    day = 0;
    month = 0;
    year = 0;
  }
  let age = new userAge();

  /* uploading currentMonth that starts with 0 */
  currentMonth += 1;

  if (birthMonth <= currentMonth && birthDay < currentDay) {
    age.year = currentYear - birthYear;
  } else {
    age.year = currentYear - birthYear - 1;
  }

  if (birthMonth < currentMonth) {
    age.month = currentMonth - birthMonth;
  } else {
    age.month = 12 - (birthMonth - currentMonth);
  }

  if (currentDay >= birthDay) {
    age.day = currentDay - birthDay;
  } else {
    age.day = months[birthDay + 1] - birthDay + currentDay;
    console.log(age.day);
  }

  displayOutput(age.year, age.month, age.day);
}

function displayOutput(year, month, day) {
  document.getElementById("outputYears").innerHTML = year;
  document.getElementById("outputMonths").innerHTML = month;
  document.getElementById("outputDays").innerHTML = day;
}
