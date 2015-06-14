//CreateElement and make it show on page

var h1 = document.createElement("h1");
h1.innerHTML = "OMDB Movies About Pizza";
document.body.appendChild(h1);

//make http request ie: new XHR, xhr.open 'get'
//xhr. when you load (addEventListener)
//xhr.send()

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?s=pizza');
xhr.addEventListener('load', function (){

  var response = xhr.response;
  var responseData = JSON.parse(response);

for (var i = 0; i < responseData.Search.length; i++) {

  var a = document.createElement('a');
  a.innerHTML = responseData.Search[i].Title;    //Create anchor
  var ids = '/show.html?id=' + responseData.Search[i].imdbID + "&t=" + responseData.Search[i].Title + "&year=" + responseData.Search[i].Year + "&type=" + responseData.Search[i].Type;
  a.href = ids;



  var p = document.createElement("p");
  p.appendChild(a);
  document.body.appendChild(p);
}
});
xhr.send(null);


//test to try to go through url and split into objects (from ajax in playground)

// var query = document.location.search;
// var objNew = {};
// query = query.replace("?","");
// var x = query.split("&");
// for (var i = 0; i < x.length; i++) {
//   var key = x[i].split("=")[0];               //splits into key and value
//   var value = x[i].split("=")[1];
//   objNew[key] = value;
//   console.log(objNew);
// };
