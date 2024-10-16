function openModal(modalId, overlayId) {
    document.getElementById(overlayId).style.display = "block";
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId, overlayId) {
    document.getElementById(overlayId).style.display = "none";
    document.getElementById(modalId).style.display = "none";
}

for (let i = 1; i <= 5; i++) {
    const dropArea = document.querySelector(`.drop_box222_${i}`);
    const button = dropArea.querySelector("button");
    const input = dropArea.querySelector("input");

    button.onclick = () => {
        input.click();
    };

    input.addEventListener("change", function (e) {
        var fileName = e.target.files[0].name;
        let filedata = `
            <form action="" method="post">
            <div class="form00">
            <h4>${fileName}</h4>
            <input type="email" placeholder="Enter email upload file">
            <button class="btn111">Upload</button>
            </div>
            </form>`;
        dropArea.innerHTML = filedata;
    });
}
