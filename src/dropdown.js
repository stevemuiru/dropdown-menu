export function initializeDropdown(dropdownSelector) {
    const dropdown = document.querySelector(dropdownSelector);
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const menu = dropdown.querySelector('.dropdown-menu');

    trigger.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });
}
