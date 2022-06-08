const div = document.querySelector(".time");
const p = document.createElement("p");

const getTime = () => {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const updateTime = () => {
  div.innerText = getTime();
};

setInterval(updateTime, 1000);
