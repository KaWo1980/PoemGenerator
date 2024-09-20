function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["The poem will go here..."],
    autoStart: true,
    delay: 1,
    cursor: "",
    loop: false,
  });
}
let poemFormElement = document.querySelector("#poem_generator_form");
poemFormElement.addEventListener("submit", generatePoem);
