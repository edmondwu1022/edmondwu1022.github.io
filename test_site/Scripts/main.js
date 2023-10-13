const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "Images/image02.jpg") {
    myImage.setAttribute("src", "Images/Icon.png");
  } else {
    myImage.setAttribute("src", "Images/image02.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
  setUserNamer();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to WWHolding ${storedName}`;
}

function setUserNamer() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserNamer();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to WWHolding ${myName}`;
  }
}

myButton.onclick = () => {
  setUserNamer();
};
