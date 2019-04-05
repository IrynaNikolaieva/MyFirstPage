function showText (el) {
	if(el.previousElementSibling.clientHeight === 80) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "Свернуть";
	} else {
		el.previousElementSibling.style.height = "80px";
		el.innerHTML = "Читать дальше...";
	}
}