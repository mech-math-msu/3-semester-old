const copyButtonLabel = "copy";

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  button.innerText = "˗ˏˋ copied ˎˊ˗";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}

let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

