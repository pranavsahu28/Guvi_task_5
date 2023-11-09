  //FOR IN METHOD:
  var request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/all", true);
  request.send();
  request.onload = function () {
    var data = request.response;
    //console.log(data);
    var result = JSON.parse(data);
    console.log(result);
    //for accessing multiple values use looping
    //!using for loop
    for (let intex in result){
      console.log(result[intex].region)
    }
  }