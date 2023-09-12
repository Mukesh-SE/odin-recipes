const list = document.querySelectorAll("li");
const focus_div = document.getElementById("hv");

let move_left = 0;
list.forEach((item, index) => {
	item.addEventListener("mouseover", () => {
		switch (index) {
			case 0:
				move_left = 2 + index * 33.4;
				focus_div.style.left = `${move_left}%`;
				break;
			case 1:
				move_left = 2 + index * 33.4;
				focus_div.style.left = `${move_left}%`;
				break;
			case 2:
				move_left = 2 + index * 33.4;
				focus_div.style.left = `${move_left}%`;
				break;
			default:
				alert("somthing is wrong \n check the console");
			// console.log(index, item);
		}
		// console.log(index, focus_div.style.left);
	});
});
// -----------------------

// ratting and like
const rate_star = document.querySelectorAll(".fa-star");
const heart = document.querySelectorAll(".fa-heart");

heart.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("fas");
	});
});

rate_star.forEach((item, index) => {
	item.addEventListener("click", () => {
		toogle_star(index);
	});
});
function toogle_star(clickeIndex) {
	let start_index = 0;
	if (clickeIndex > 4) {
		start_index = 5;
	}
	if (clickeIndex > 9) {
		start_index = 10;
	}
	// console.log(clickeIndex);
	for (let i = start_index; i <= clickeIndex; i++) {
		if (rate_star[i].classList.contains("fas")) {
			rate_star[i].classList.remove("fas");
		}
		rate_star[i].classList.add("fas");
	}
}
// -----------------------
