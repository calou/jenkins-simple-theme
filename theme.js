
setTimeout(function(){
	var iconClocks = document.getElementsByClassName("icon-clock");
	for(var i in iconClocks){
		if( "length" != i && "item" != i && "namedItem" != i ){
			var iconClock = $(iconClocks[i]);
			var clock = document.createElement("span");
			clock.className = "clock fa fa-flag-checkered";
			clock.onclick = iconClock.onclick;
			iconClock.insertAdjacentElement("beforeBegin", clock);
		}
	}
	
	var addTabs = document.getElementsByClassName("addTab");
	for(var i in addTabs){
		console.log(i, $(addTabs[i]));
		if( "length" != i && "item" != i && "namedItem" != i ){
			var addTab = $(addTabs[i]);
			addTab.innerHTML = "<span class='fa fa-plus-square'></span>";
		}
	}
}, 200);
