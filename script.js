document.addEventListener("DOMContentLoaded", function () {
    var t_btn = document.getElementById("t-skills");
    var t_skills = document.getElementById("skills");
    if (t_btn && t_skills) {
        t_btn.addEventListener("click", function () {
            if (t_skills.style.display === "none") {
                t_skills.style.display = "block"; // show 
            }
            else {
                t_skills.style.display = "none"; // hide
            }
        });
    }
    else {
        console.error("Error: Button or Skills section not found. Check IDs.");
    }
});
