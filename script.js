const textarea = document.querySelector("textarea");
const fileNameInput = document.querySelector(".file-name input");
const selectMenu = document.querySelector(".save-as select");
const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
});