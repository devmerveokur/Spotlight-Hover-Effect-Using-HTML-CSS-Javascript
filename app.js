const links = document.querySelectorAll("ul li");

const text = document.querySelectorAll(".text");

const circle = document.createElement("span");

circle.setAttribute("class","circle");

for (let i = 0; links.length; i++) {
    links[i].appendChild(circle);
    links[i].addEventListener("mousemove", (e) => {
        circle.style.left = e.clientX + "px";
        circle.style.top = e.clientY + "px";

        circle.classList.add("circle-active");

        const innerX = e.clientX - links[i].offsetLeft;
        const innerY = e.clientY - links[i].offsetTop;

        text[i].style.transform = `translate(${innerX * -1}%, ${innerY * -1}%)`;
    });

    links[i].addEventListener("mouseout", () => {
        circle.classList.remove("circle-active");
        text[i].style.transform = "translate(-50%, -50%)";
    });
}
