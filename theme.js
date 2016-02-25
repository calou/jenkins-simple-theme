
setTimeout(function(){
    /*
	insertSpanBefore("icon-clock", "faicon clock fa fa-flag-checkered");
	insertSpanBefore("icon-red", "faicon fa fa-exclamation-circle");
	insertSpanBefore("icon-blue", "faicon fa fa-check-circle");

	var addTabs = document.getElementsByClassName("addTab");
	for(var i in addTabs){
		console.log(i, $(addTabs[i]));
		if( "length" != i && "item" != i && "namedItem" != i ){
			var addTab = $(addTabs[i]);
			addTab.innerHTML = "<span class='fa fa-plus-square'></span>";
		}
	}
	*/

	var jenkinsNameIcon = document.getElementById("jenkins-name-icon");
	var titleSpan = document.createElement("span");
	titleSpan.innerHTML = "Jenkins"
	titleSpan.style="font-family:'Lobster', cursive; font-size:28px; color:#FFFFFF; text-decoration:none;"
	jenkinsNameIcon.insertAdjacentElement("beforeBegin", titleSpan);

}, 100);

function insertSpanBefore(className, newClassName) {
	var icons = document.getElementsByClassName(className);
	for (var i in icons){
		if( "length" != i && "item" != i && "namedItem" != i ){
			var icon = $(icons[i]);
			var faIcon = document.createElement("span");
			faIcon.className = newClassName;
			faIcon.onclick = icon.onclick;
			icon.insertAdjacentElement("beforeBegin", faIcon);
		}
	}
}
