
setTimeout(function(){
	var jenkinsNameIcon = document.getElementById("jenkins-name-icon");
	var titleSpan = document.createElement("span");
	titleSpan.innerHTML = "Jenkins"
	titleSpan.style="font-family:'Lobster', cursive; font-size:28px; color:#FFFFFF; text-decoration:none;"
	jenkinsNameIcon.insertAdjacentElement("beforeBegin", titleSpan);
}, 100);

