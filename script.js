// Function to toggle the navigation menu on mobile devices
document.getElementById('hamburger').addEventListener('click', function () {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show');
});

// Function to implement smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to filter projects based on the selected category from the dropdown
document.getElementById('category-select').addEventListener('change', function () {
    const selectedCategory = this.value;
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(function (project) {
        if (selectedCategory === 'all' || project.dataset.category.includes(selectedCategory)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});

// Function to implement lightbox effect for project images
document.querySelectorAll('.project-card img').forEach(image => {
    image.addEventListener('click', function () {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        const modalImage = document.createElement('img');
        modalImage.src = this.src;
        const closeButton = document.createElement('span');
        closeButton.classList.add('close-button');
        closeButton.innerHTML = '&times;';
        
        closeButton.addEventListener('click', function () {
            modal.remove();
        });

        modalContent.appendChild(modalImage);
        modalContent.appendChild(closeButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    });
});