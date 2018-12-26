document.getElementById("ver").innerText += " :: FFr02";

i = 0;
test = 0;


document.getElementById("begin").onclick = function() {
	document.getElementById("result").innerText = "Began.";
	
	xmlhttp = new XMLHttpRequest(),
	method = 'GET',
	url1 = ("https://developer.mozilla.org/" + "?t=" + new Date().getTime());    

	xmlhttp.open(method, url1, true);
  
	xmlhttp.onerror = function() {
		xmlhttp.abort();
		r1();
	};
	
	xmlhttp.send();
};


function r1() {
	i++;
	test++;
	alert("i: " + i + "\ntest: " + test);
}