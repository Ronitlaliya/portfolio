document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu');
    const containers = document.querySelectorAll('.info-container');

    menuItems.forEach(menu => {
        menu.addEventListener('click', (event) => {
            event.preventDefault();

            // Hide all info containers
            containers.forEach(container => {
                container.classList.remove('active');
            });

            // Show the target info container
            const targetId = menu.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                targetContainer.classList.add('active');
            }
        });
    });

    // Optional: Hide all containers when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.menu') && !event.target.closest('.info-container')) {
            containers.forEach(container => {
                container.classList.remove('active');
            });
        }
    });
});
