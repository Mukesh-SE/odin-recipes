const list = document.querySelectorAll("li");
const focus_div = document.getElementById("hv");

let move_left = 60;
list.forEach((item, index) => {
	item.addEventListener("mouseover", () => {
		switch (index) {
			case 0:
				move_left = 2.45 + (index * 33.3);
				focus_div.style.left = `${move_left}%`;
				break;
			case 1:
				move_left = 2.47 + (index * 33.3);
				focus_div.style.left = `${move_left}%`;
				break;
			case 2:
				move_left = 2.47 + (index * 33.3);
				focus_div.style.left = `${move_left}%`;
				break;
			default:
				alert("somthing is wrong \n check the console");
				console.log(index, item);
		}
		console.log(index, focus_div.style.left);
	});
});
