function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    loop: false,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user_input");
  let APIKey = "o3ce43a0d26f03dc03af17ba46t837db";
  let prompt = `User instruction is: please generate a short precise poem about ${userInput.value} in english.`;
  let context =
    "You are an skilled poet and love to write short poem with 4 lines. Seperate each line with a <br/>. Please follow the user instruction. Sign teh poem with '*generated with Shecodes AI*' inside a <strong> element";
  let APIUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(APIUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem_generator_form");
poemFormElement.addEventListener("submit", generatePoem);
