var h1 = document.createElement('h1');
h1.innerHTML = "Pizza Movie Ids";
document.body.appendChild(h1);

var query = document.location.search;
var objNew = {};
query = query.replace(/^\?/,"");
query = query.replace(/%20/g, " ");
query = query.replace(/%E2%80%93/g, "-");
query = query.replace(/%96/g, "-");


var x = query.split(/&/);
for (var i = 0; i < x.length; i++) {
  var key = x[i].split("=")[0];               //splits into key and value
  var value = x[i].split("=")[1];
  objNew[key] = value;
  console.log(objNew);


var xhr = new XMLHttpRequest();
var url = 'http://www.omdbapi.com/?s=p';
xhr.open('get', url);
xhr.addEventListener('load', function (){

  var response = xhr.response;
  var responseData = JSON.parse(response);

});

};
xhr.send(null);


var p = document.createElement('p');
p.innerHTML = "Movie id: " + objNew.id + "<br>" + "Movie Title: " + objNew.t + "<br>" + "Movie Year: " + objNew.year + "<br>" + "Movie Type: " + objNew.type;
document.body.appendChild(p);
