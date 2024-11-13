const burgerButton = document.querySelector('.burger');
const navigationMenu = document.querySelector('.header-nav');

if (burgerButton && navigationMenu) {
	burgerButton.addEventListener('click', () => {
		burgerButton.classList.toggle('active');
		navigationMenu.classList.toggle('open');
	});
}