var getTreeHeight = document.getElementById("enter-height");
var getTreeChar = document.getElementById("enter-char");
var button = document.getElementById("tree-button");

function checkUserInput (clickEvent) {
	if (getTreeHeight.value === "" || getTreeChar.value === "") {
		alert("You must fill out both fields!");
	} else {
		tree();
	}
}

function tree () {
	var treeElements = {
		height: getTreeHeight.value,
		character: getTreeChar.value
	};
	treeMath(treeElements);
}

function treeMath (makeTree) {
	var growTree = "";
	for (var t=0; t<makeTree.height; t++) {
		for (var u=0; u<(makeTree.height - (t + 1)); u++) {		
			growTree += " ";
		} 
		for (var v=0; v<((t * 2) + 1); v++) {
			growTree += makeTree.character;
		}
		growTree += "\n";
	} 
	console.log(growTree);
}

function pressEnter (event) {
    if (event.keyCode === 13) {
	checkUserInput();
    }
}


getTreeHeight.addEventListener("keypress", pressEnter);
getTreeChar.addEventListener("keypress", pressEnter);
button.addEventListener("click", checkUserInput);