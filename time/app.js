const time_div = document.querySelector(".time");
const date_div = document.querySelector(".date");

// Time

const getTime = () => {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const updateTime = () => {
  time_div.innerText = getTime();
};

setInterval(updateTime, 1000);

// Date

const getDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date().toLocaleDateString("en-GB", options);
};

const renderDate = () => {
  date_div.innerText = getDate();
};

window.addEventListener("DOMContentLoaded", renderDate);
