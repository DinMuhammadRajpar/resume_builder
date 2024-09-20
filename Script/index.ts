const toggleButtons = document.querySelectorAll(".toggle_btn");

toggleButtons.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;
    const section = target.parentElement;
    const article = section?.querySelector("article");

    if (article?.style.display === "none" || article?.style.display === "") {
      article.style.display = "block";
      target.classList.remove("rotation");
    } else {
      article!.style.display = "none";
      target.classList.add("rotation");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const formSection = document.getElementById("form_section");
  const resumeForm = document.getElementById("resume_form");
  const resumeSection = document.getElementById("resume_section");

  if (resumeForm) {
    resumeForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = (document.getElementById("name")! as HTMLInputElement).value;
      const additionalName = (
        document.getElementById("additionalName")! as HTMLInputElement
      ).value;
      const email = (document.getElementById("email")! as HTMLInputElement)
        .value;
      const contactNumber = (
        document.getElementById("contactNumber")! as HTMLInputElement
      ).value;
      const socialAcc = (
        document.getElementById("linkedIn")! as HTMLInputElement
      ).value;
      const intro = (document.getElementById("intro")! as HTMLInputElement)
        .value;
      const degree = (document.getElementById("degree")! as HTMLInputElement)
        .value;
      const institute = (
        document.getElementById("institute")! as HTMLInputElement
      ).value;
      const eduStartDate = (
        document.getElementById("edu-start-date")! as HTMLInputElement
      ).value;
      const eduEndDate = (
        document.getElementById("edu-end-date")! as HTMLInputElement
      ).value;
      const coursesInput = (
        document.getElementById("courses")! as HTMLInputElement
      ).value.split(",");
      const jobTitle = (
        document.getElementById("job-title")! as HTMLInputElement
      ).value;
      const company = (document.getElementById("company")! as HTMLInputElement)
        .value;
      const workStartDate = (
        document.getElementById("work-start-date")! as HTMLInputElement
      ).value;
      const workEndDate = (
        document.getElementById("work-end-date")! as HTMLInputElement
      ).value;
      const skillsInput = (
        document.getElementById("skills")! as HTMLInputElement
      ).value.split(",");

      document.querySelector(".name h2")!.textContent = name;
      document.querySelector(".name p")!.textContent = additionalName;
      document.querySelector(".intro p")!.textContent = intro;
      document.querySelector(".email span")!.textContent = email;
      document.querySelector(".contact_number span")!.textContent =
        contactNumber;
      document.querySelector(".linkedIn span")!.textContent = socialAcc;
      document.querySelector(".details h3")!.textContent = degree;
      document.querySelector(".details h4")!.textContent = institute;
      document.querySelector(".degree_date time:first-child")!.textContent =
        eduStartDate;
      document.querySelector(".degree_date time:last-child")!.textContent =
        eduEndDate;
      document.querySelector(".details h3")!.textContent = jobTitle;
      document.querySelector(".details h4")!.textContent = company;
      document.querySelector(".work_date time:first-child")!.textContent =
        workStartDate;
      document.querySelector(".work_date time:last-child")!.textContent =
        workEndDate;

      const coursesSec = document.querySelector(".courses div ul")!;
      coursesSec.innerHTML = "";
      coursesInput.forEach((course) => {
        const courseElement = document.createElement("li");
        courseElement.textContent = course.trim();
        coursesSec.appendChild(courseElement);
      });

      const skillsSection = document.querySelector(".skills article div")!;
      skillsSection.innerHTML = "";
      skillsInput.forEach((skill) => {
        const skillElement = document.createElement("h5");
        skillElement.textContent = skill.trim();
        skillsSection.appendChild(skillElement);
      });

      resumeForm!.style.display = "none";
      resumeSection!.style.display = "block";
    });
  } else {
    console.error("The element form section not found in the DOM");
  }
});


// // function editField(fieldId) {
// //   const displayField = document.getElementById(fieldId);

// //   if (displayField) {
// //       const currentValue = displayField.textContent || displayField.innerText || '';

// //       // Replace the content with an input field for editing
// //       displayField.innerHTML = `
// //           <input type="text" value="${currentValue}" id="${fieldId}-edit" />
// //           <button onclick="saveField('${fieldId}')">Save</button>
// //       `;
// //   } else {
// //       console.error("Element not found with ID:", fieldId);
// //   }
// // }

// // function saveField(fieldId) {
// //   const inputField = document.getElementById(`${fieldId}-edit`);

// //   if (inputField) {
// //       const updatedValue = (inputField as HTMLInputElement).value;

// //       // Get the original field and update its content
// //       const displayField = document.getElementById(fieldId);

// //       if (displayField) {
// //           // Restore the original HTML
// //           displayField.innerHTML = updatedValue;
// //       } else {
// //           console.error("Display field not found with ID:", fieldId);
// //       }
// //   } else {
// //       console.error("Input field not found with ID:", `${fieldId}-edit`);
// //   }
// // }

document.addEventListener("DOMContentLoaded", () => {
  const formSection = document.getElementById("form_section")!;
  const resumeSection = document.getElementById("resume_section")!;
  const resumeForm = document.getElementById("resume_form") as HTMLFormElement;
  const resumeProfilePicture = document.getElementById("resume_profile_picture") as HTMLInputElement | null;
  const profilePictureInput = document.getElementById("profile_picture") as HTMLInputElement | null;

  const showResumeBtn = document.getElementById("show_resume_btn")!;
  const editResumeBtn = document.getElementById("edit_resume_btn")!;

  if (showResumeBtn && editResumeBtn) {
    showResumeBtn.addEventListener("click", () => {
      resumeSection.style.display = "block";
      resumeForm.style.display = "none";
    });

    editResumeBtn.addEventListener("click", () => {
      resumeForm.style.display = "block";
      resumeSection.style.display = "none";

      if (resumeForm && profilePictureInput && resumeProfilePicture) {

        resumeForm.addEventListener("submit", (event: Event) => {
          event.preventDefault();

        const profilePictureFile = profilePictureInput?.files?.[0];
      if (profilePictureFile) {
        const reader = new FileReader();
        reader.onload = function(e: ProgressEvent<FileReader>) {
          if (e.target?.result){
          resumeProfilePicture.src = e.target.result as string;
          }
        };
        reader.readAsDataURL(profilePictureFile);
      }


        const name = document.querySelector(".name h2")?.textContent || "";
        const additionalName =
          document.querySelector(".name p")?.textContent || "";
        const email = document.querySelector(".email span")?.textContent || "";
        const contactNumber =
          document.querySelector(".contact_number span")?.textContent || "";
        const socialAcc =
          document.querySelector(".linkedIn span")?.textContent || "";
        const intro = document.querySelector(".intro p")?.textContent || "";
        const degree = document.querySelector(".details h3")?.textContent || "";
        const institute =
          document.querySelector(".details h4")?.textContent || "";
        const eduStartDate =
          document.querySelector(".degree_date time:first-child")
            ?.textContent || "";
        const eduEndDate =
          document.querySelector(".degree_date time:last-child")?.textContent ||
          "";
        const jobTitle =
          document.querySelector(".details h3")?.textContent || "";
        const company =
          document.querySelector(".details h4")?.textContent || "";
        const workStartDate =
          document.querySelector(".work_date time:first-child")?.textContent ||
          "";
        const workEndDate =
          document.querySelector(".work_date time:last-child")?.textContent ||
          "";
        const courses = Array.from(
          document.querySelectorAll(".courses div ul li")
        )
          .map((li) => li.textContent)
          .join(",");
        const skills = Array.from(
          document.querySelectorAll(".skills article div h5")
        )
          .map((h5) => h5.textContent)
          .join(",");

        (document.getElementById("name") as HTMLInputElement).value = name;
        (document.getElementById("additionalName") as HTMLInputElement).value =
          additionalName;
        (document.getElementById("email") as HTMLInputElement).value = email;
        (document.getElementById("contactNumber") as HTMLInputElement).value =
          contactNumber;
        (document.getElementById("linkedIn") as HTMLInputElement).value =
          socialAcc;
        (document.getElementById("intro") as HTMLInputElement).value = intro;
        (document.getElementById("degree") as HTMLInputElement).value = degree;
        (document.getElementById("institute") as HTMLInputElement).value =
          institute;
        (document.getElementById("edu-start-date") as HTMLInputElement).value =
          eduStartDate;
        (document.getElementById("edu-end-date") as HTMLInputElement).value =
          eduEndDate;
        (document.getElementById("job-title") as HTMLInputElement).value =
          jobTitle;
        (document.getElementById("company") as HTMLInputElement).value =
          company;
        (document.getElementById("work-start-date") as HTMLInputElement).value =
          workStartDate;
        (document.getElementById("work-end-date") as HTMLInputElement).value =
          workEndDate;
        (document.getElementById("courses") as HTMLInputElement).value =
          courses;
        (document.getElementById("skills") as HTMLInputElement).value = skills;
      });
      }
    });
  }


  function genrateUniqueToken(length = 8) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";

    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  function genrateUniqueResumeURL(userName: string) {
    const uniqueToken = genrateUniqueToken();
    console.log(uniqueToken);
    return `https://${userName}.vercel.app/resume/${uniqueToken}`;
  }

  if (resumeForm) {
    resumeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = (document.getElementById("name") as HTMLInputElement)
        .value;
      const resumeURL = genrateUniqueResumeURL(username);
      document.getElementById(
        "resume_url_display"
      )!.textContent = `Your resume URL: ${resumeURL}`;
      // Collect values from the form fields
      const name = (document.getElementById("name")! as HTMLInputElement).value;
      const additionalName = (
        document.getElementById("additionalName")! as HTMLInputElement
      ).value;
      const email = (document.getElementById("email")! as HTMLInputElement)
        .value;
      const contactNumber = (
        document.getElementById("contactNumber")! as HTMLInputElement
      ).value;
      const socialAcc = (
        document.getElementById("linkedIn")! as HTMLInputElement
      ).value;
      const intro = (document.getElementById("intro")! as HTMLInputElement)
        .value;
      const degree = (document.getElementById("degree")! as HTMLInputElement)
        .value;
      const institute = (
        document.getElementById("institute")! as HTMLInputElement
      ).value;
      const eduStartDate = (
        document.getElementById("edu-start-date")! as HTMLInputElement
      ).value;
      const eduEndDate = (
        document.getElementById("edu-end-date")! as HTMLInputElement
      ).value;
      const jobTitle = (
        document.getElementById("job-title")! as HTMLInputElement
      ).value;
      const company = (document.getElementById("company")! as HTMLInputElement)
        .value;
      const workStartDate = (
        document.getElementById("work-start-date")! as HTMLInputElement
      ).value;
      const workEndDate = (
        document.getElementById("work-end-date")! as HTMLInputElement
      ).value;

      //  resume display
      document.querySelector(".name h2")!.textContent = name;
      document.querySelector(".name p")!.textContent = additionalName;
      document.querySelector(".intro p")!.textContent = intro;
      document.querySelector(".email span")!.textContent = email;
      document.querySelector(".contact_number span")!.textContent =
        contactNumber;
      document.querySelector(".linkedIn span")!.textContent = socialAcc;
      document.querySelector(".details h3")!.textContent = degree;
      document.querySelector(".details h4")!.textContent = institute;
      document.querySelector(".degree_date time:first-child")!.textContent =
        eduStartDate;
      document.querySelector(".degree_date time:last-child")!.textContent =
        eduEndDate;
      document.querySelector(".details h3")!.textContent = jobTitle;
      document.querySelector(".details h4")!.textContent = company;
      document.querySelector(".work_date time:first-child")!.textContent =
        workStartDate;
      document.querySelector(".work_date time:last-child")!.textContent =
        workEndDate;

      // Switch from the form view to the resume view
      resumeForm.style.display = "none";
      resumeSection.style.display = "block";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const generateURLBtn = document.getElementById("generate_url_btn")!;
  const urlDisplay = document.getElementById("resume_url_display")!;

  urlDisplay.style.display = "none";

  generateURLBtn.addEventListener("click", () => {
    // Toggle the display of the URL
    if (urlDisplay.style.display === "none") {
      urlDisplay.style.display = "block";
    } else {
      urlDisplay.style.display = "none";
    }
  });

  function genrateUniqueToken(length = 8) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";

    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  function genrateUniqueResumeURL(userName: string) {
    const uniqueToken = genrateUniqueToken();
    return `https://${userName}.vercel.app/resume/${uniqueToken}`;
  }

  const resumeForm = document.getElementById("resume_form") as HTMLFormElement;

  if (resumeForm) {
    resumeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = (document.getElementById("name") as HTMLInputElement)
        .value;
      const resumeURL = genrateUniqueResumeURL(username);

      // Set the URL inside the hidden div
      urlDisplay.textContent = `Your resume URL: ${resumeURL}`;
    });
  }
});



