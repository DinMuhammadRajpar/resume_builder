const toggleButtons = document.querySelectorAll('.toggle-button');


toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        const section = this.parentElement;
        
        const article = section.querySelector('article');

        if (article.style.display === 'none') {
            article.style.display = 'block';
        } else {
            article.style.display = 'none'; 
        }
    });
});





