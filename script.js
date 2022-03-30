// alert("HI");
const URL = window.location.href;
let b = document.body;
let end = false;

const checkForNetflixSkipBtn = async (b) => {
	if (b.hasChildNodes()) {
		for (let i = 0; i < b.childNodes.length; i++) {
			if (
				b.childNodes[i]?.classList?.contains("watch-video--skip-content-button")
			) {
				console.log(
					"Netflix Skip Button Found***********************************************************"
				);
				// TODO: get recursion working. Right now its in an infinite loop
				//  and isnt exiting the function completely
				b.childNodes[i].click();
				end = true;
				break;
			}
			if (b.childNodes[i].hasChildNodes()) {
				if (end) {
					break;
				}
				// console.log("NOT FOUND");
				checkForNetflixSkipBtn(b.childNodes[i]);
			}
		}
		console.log(end);
		if (end) {
			return true;
		}

		await new Promise((r) => setTimeout(r, 1000));
		checkForNetflixSkipBtn(b);
	} else {
		if (end) {
			return true;
		}

		await new Promise((r) => setTimeout(r, 1000));
		checkForNetflixSkipBtn(b);
	}
	return true;
};

if (URL.includes("netflix.com/watch")) {
	console.log("RUNNING AGAIN");
	checkForNetflixSkipBtn(b);
}
