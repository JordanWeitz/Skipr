// alert("HI");
const URL = window.location.href;
let b = document.body;

// const checkForSkipBtn = async (element) => {
// 	alert("INSIDE FUNCTION");
// 	if (
// 		!element.classList.contains(document.getElementsByClassName("watch-video"))
// 	) {
// 		await new Promise((r) => setTimeout(r, 1000));
// 		checkForSkipBtn(document.body);
// 	} else {
// 		alert("Skip button found!");
// 	}
// };
const checkForSkipBtn = async (b) => {
	if (b.hasChildNodes()) {
		b.childNodes.forEach((b) => {
			if (b.id === "appMountPoint") {
				// b.childNodes.forEach((b) => {
				//     if(b)
				// }
			}
		});
		await new Promise((r) => setTimeout(r, 1000));
		checkForSkipBtn(b);
	} else {
		await new Promise((r) => setTimeout(r, 1000));
		checkForSkipBtn(b);
	}
};

if (URL.includes("netflix.com")) {
	checkForSkipBtn(b);
}
