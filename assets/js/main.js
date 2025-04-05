function dropdown() {
    const button = document.getElementById("archive-btn");
    const dropdown = document.getElementById("archive-list");

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        button.innerHTML = "-";
    } else {
        dropdown.style.display = "none";
        button.innerHTML = "+";
    }
}