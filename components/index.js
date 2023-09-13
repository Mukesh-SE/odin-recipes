const move = document.getElementById("moveable");
const nav_itmes = document.querySelectorAll("li");

let move_left = 0;
nav_itmes.forEach((item, index) => {
	item.addEventListener("mouseover", () => {
		switch (index) {
			case 0:
				move_left = 2;
				move.style.left = `${move_left}%`;
				break;
			case 1:
				move_left = 24;
				move.style.left = `${move_left}%`;
				break;
			case 2:
				move_left = 48.6;
				move.style.left = `${move_left}%`;
				break;
			case 3:
				move_left = 73.6;
				move.style.left = `${move_left}%`;
				break;
			default:
				alert("some thing is wrong\n check dev tool");
				console.log(nav_itmes);
		}
	});
});
