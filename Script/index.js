// const toggleButtons = document.querySelectorAll('.toggle-button');
// toggleButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         const section = this.parentElement;
//         const article = section.querySelector('article');
//         if (article.style.display === 'none') {
//             article.style.display = 'block';  
//             // (this as HTMLElement).innerHTML = '&#9650;'; 
//         } else {
//             article.style.display = 'none';   
//             // (this as HTMLElement).innerHTML = '&#9660;'; 
//         }
//     });
// });
// const toggleButton = document.querySelector('.personal_information .toggle-button');
// if (toggleButton) {
//     toggleButton.addEventListener('click', function() {
//         // Get the .contact div inside the .personal_information section
//         const contactDiv = document.querySelector('.personal_information .contact');
//         if (contactDiv) {
//             // Toggle the visibility of the contactDiv
//             if (contactDiv.style.display === 'none') {
//                 contactDiv.style.display = 'block';  // Show contact div
//                 (this as HTMLElement).innerHTML = '&#9650;'; // Change to up arrow
//             } else {
//                 contactDiv.style.display = 'none';   // Hide contact div
//                 (this as HTMLElement).innerHTML = '&#9660;'; // Change to down arrow
//             }
//         }
//     });
// }
// If you have already written a section toggle functionality:
var sectionButtons = document.querySelectorAll('.toggle-button');
sectionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Select the sibling article
        var article = this.nextElementSibling;
        if (article) {
            if (article.style.display === 'none') {
                article.style.display = 'block';
                this.innerHTML = '&#9650;'; // Up arrow
            }
            else {
                article.style.display = 'none';
                this.innerHTML = '&#9660;'; // Down arrow
            }
        }
    });
});
// ADD NEW CODE HERE for the .contact toggle
var toggleButton = document.querySelector('.personal_information .toggle-button');
if (toggleButton) {
    toggleButton.addEventListener('click', function () {
        // Get the .contact div inside the .personal_information section
        var contactDiv = document.querySelector('.personal_information .contact');
        if (contactDiv) {
            // Toggle the visibility of the contactDiv
            if (contactDiv.style.display === 'none') {
                contactDiv.style.display = 'block'; // Show contact div
                this.innerHTML = '&#9650;'; // Change to up arrow
            }
            else {
                contactDiv.style.display = 'none'; // Hide contact div
                this.innerHTML = '&#9660;'; // Change to down arrow
            }
        }
    });
}
