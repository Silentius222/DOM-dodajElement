let przycisk = document.getElementById("guzik").addEventListener("click", () => {
    let liElement = document.createElement("li");
    let liczba = document.getElementsByClassName("item").length;
    liElement.innerText = "Item" + (liczba + 1);
    liElement.classList.add("item");
    document.querySelector("ul").appendChild(liElement);
  });