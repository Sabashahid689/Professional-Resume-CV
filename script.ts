document.addEventListener("DOMContentLoaded", () => {
    const t_btn = document.getElementById("t-skills") as HTMLButtonElement | null;
    let t_skills = document.getElementById("skills") as HTMLElement | null;

    if (t_btn && t_skills) {
       t_btn.addEventListener("click", () => {
            if (t_skills!.style.display === "none") {
                t_skills!.style.display = "block"; // show 
            } else {
                t_skills!.style.display = "none"; // hide
            }
        });
    } else {
        console.error("Error: Button or Skills section not found. Check IDs.");
    }
});
