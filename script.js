const ul = document.querySelector("ul");
const list = document.querySelectorAll("li");
const focus_div = document.getElementById("hv");

//
ul.addEventListener("mouseover", () => {
	focus_div.style.display = "block";
});

ul.addEventListener("mouseleave", () => {
	focus_div.style.display = "none";
});

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
const heart = document.querySelectorAll(".fa-heart");
const ratting_group = document.querySelectorAll(".ratting");

console.log(ratting_group);
// like toggle button
heart.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("fas");
	});
});

// ratting
ratting_group.forEach((ratting, ratting_index) => {
	const rate_star = ratting.querySelectorAll(".fa-star");

	rate_star.forEach((star, start_index) => {
		star.addEventListener("click", () => {
			toogle_star(ratting_index, start_index);
		});
	});
});

function toogle_star(r_index, s_index) {
	const single_ratting = ratting_group[r_index];
	const rate_star = single_ratting.querySelectorAll(".fa-star");

	console.log(single_ratting);

	rate_star.forEach((star) => {
		star.classList.remove("fas");
	});

	for (let i = 0; i <= s_index; i++) {
		rate_star[i].classList.add("fas");
	}
}
// -----------------------
