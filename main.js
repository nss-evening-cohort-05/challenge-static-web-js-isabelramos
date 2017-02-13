var getTreeHeight = document.getElementById("enter-height").value;
var getTreeChar = document.getElementById("enter-char").value;
var button = document.getElementById("tree-button");


function tree (inputInfo) {
	var treeElements = {
		height: getTreeHeight,
		character: getTreeChar
	};
}

function treeMath (makeTree) {
	for (var t=0; t<makeTree.height; t++) {
		var growTree = "";
		} for (var u=0; u<(makeTree.height - (t + 1)); u++) {		
			growTree += " ";
		} for (var v = 0; v < ((t * 2) + 1); v++) {
			growTree += makeTree.character;
	}
			console.log(growTree);
}

function checkUserInput (clickEvent) {
	if (getTreeHeight === "" && getTreeChar === "") {
		alert("You must fill out both fields!");
	} else {
		console.log(growTree);
	}

}


button.addEventListener("click", tree);

// }

		// treeHeight: getTreeHeight.value - (i + 1),
		// treeChar: getTreeChar.value (2 * i) + 1


// button.addEventListener("click", tree);