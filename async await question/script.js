function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const messages = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Connecting to Server",
  "Uploading Personal Data",
  "Deleting System Logs",
  "Hack Successful",
];

async function showMessages(msg) {
  let div = document.createElement("div");
  box.appendChild(div);

  div.textContent = msg;

  for (let i = 1; i <= 5; i++) {
    await delay(1000);

    div.textContent = msg + ".".repeat(i);
  }

  await delay(1000);
  div.textContent = msg;
}

async function main() {
  for (let msg of messages) {
    await showMessages(msg);
    await delay(Math.random() * 2000 + 1000);
  }
}

main();
