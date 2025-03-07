// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Dynamically create navigation buttons
    const navLinks = [
        { text: 'Home', icon: 'fas fa-home', url: '#' },
        { text: 'Colleges', icon: 'fas fa-university', url: '{% url "colleges" %}' },
        { text: 'Admin', icon: 'fas fa-university', url: '{% url "admin_login" %}' },
        { text: 'Reviews', icon: 'fas fa-star', url: '#' },
        { text: 'About', icon: 'fas fa-info-circle', url: '#' },
    ];

    const navLinksContainer = document.querySelector('.nav-links');
    navLinks.forEach(link => {
        const li = document.createElement('li');
        li.classList.add('menu-item');

        const a = document.createElement('a');
        a.setAttribute('href', link.url);

        const icon = document.createElement('i');
        icon.classList = link.icon;

        const span = document.createElement('span');
        span.classList.add('menu-text');
        span.textContent = link.text;

        a.appendChild(icon);
        a.appendChild(span);
        li.appendChild(a);
        navLinksContainer.appendChild(li);
    });

    // Add event listeners to navigation buttons
    const navButtons = document.querySelectorAll('.nav-links a');
    navButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetUrl = this.getAttribute('href'); // Get the target URL
            alert(`Navigating to: ${targetUrl}`); // Replace this with your desired action
            // window.location.href = targetUrl; // Uncomment this to navigate to the target URL
        });
    });

    // Admin Login Script
    document.getElementById('admin-login-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Hardcoded admin credentials (for demonstration purposes only)
        const adminUsername = "admin";
        const adminPassword = "admin123";

        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate credentials
        if (username === adminUsername && password === adminPassword) {
            // Redirect to admin dashboard or another page
            window.location.href = "{% url 'admin_dashboard' %}"; // Replace with your admin dashboard URL
        } else {
            // Show error message
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Invalid username or password. Only admin can log in.';
            errorMessage.classList.add('error-message');
            document.querySelector('.login-container').appendChild(errorMessage);
        }
    });

    // 1. Button Click Event
    document.getElementById('joinButton').addEventListener('click', function () {
        alert('Thank you for joining College Tour!');
        document.getElementById('dynamicText').textContent = 'Welcome to College Tour! Explore our colleges now.';
    });

    // 2. Hover Effect for Buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#0056b3'; // Change button color on hover
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#007bff'; // Revert button color
        });
    });

    // 3. Dynamic Content Loading
    document.getElementById('interactiveSection').addEventListener('click', function () {
        const newContent = document.createElement('p');
        newContent.textContent = 'New content loaded dynamically!';
        this.appendChild(newContent);
    });

    // 4. Header Animation
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.transform = 'scale(0.95)'; // Shrink header on scroll
        } else {
            header.style.transform = 'scale(1)'; // Restore header size
        }
    });

    // 5. Sidebar Toggle
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active'); // Toggle sidebar visibility
    });
});
