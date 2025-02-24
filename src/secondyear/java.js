let arr = ["Flowcharts", "SampleQuestions", "Cheatsheets", "Notes"];
let arrlinks = [
  "/secondyear2025/Java/Flowcharts.pdf",
  "/secondyear2025/Java/IMPORTANT QUESTION.pdf",
  "/secondyear2025/Java/CheatSheets.pdf",
  "/secondyear2025/Java/JAVA MST2 NOTES.pdf",
];
function addfolders() {
  let index = 0;
  let interval = setInterval(() => {
    if (index >= arr.length) {
      clearInterval(interval);
      return;
    }
    document.getElementById("folders").insertAdjacentHTML(
      "beforeend",
      `<a id="${arr[index]}" href="${arrlinks[index]}" class="w-[200px] h-[200px] animate-slide-up flex items-center justify-center flex-col">
        <svg class="object-fit w-full h-full" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
          <path fill="#686868" d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
        </svg>
        <div class="h-10 w-auto overflow-hidden">${arr[index]}</div>
      </a>`,
    );
    index++;
  }, 100);
}
setTimeout(addfolders, 0);
