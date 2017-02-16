var getTreeHeight = document.getElementById("enter-height");
var getTreeChar = document.getElementById("enter-char");
var button = document.getElementById("tree-button");
var growTree = "";

function checkUserInput (clickEvent) {
	if (getTreeHeight.value === "" && getTreeChar.value === "") {
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
	for (var t=0; t<makeTree.height; t++) {
		for (var t=0; t<(makeTree.height - (t + 1)); t++) {		
			growTree += " ";
		} 
		for (var t = 0; t < ((t * 2) + 1); t++) {
			growTree += makeTree.character;
		}
		growTree += "\n";
	} 
	console.log(growTree);
}

function pressEnter (event) {
    event.which = event.which || event.keyCode;
    if (event.which === 13) {
	console.log(growTree);
    }
}

button.addEventListener("click", checkUserInput);