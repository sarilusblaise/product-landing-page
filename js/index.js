const scrollLinks = document.querySelectorAll(".scroll-link");
const header = document.getElementById("header");
const headerHeight = header.getBoundingClientRect().height;

scrollLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		const id = event.currentTarget.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		const position = element.offsetTop - headerHeight;

		window.scrollTo({
			top: position,
		});
	});
});
