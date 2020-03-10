
const sendHttpRequest = (method, url, data) => {
    const promise = new promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, open);

        xhr.responseType = "json";

    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("Something went wrong!");
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;

 };

 //READ ALL HOTELS
 function getAllHotel() {
     var url = "www.localhost/api/hotels";
     xhr.open("GET", url, true);
     xhr.onload = function() {
         var hotels = JSON.parse(xhr.responseText);
         if(xhr.readyState == 4 && xhr.status == "200") {
             console.log(hotels);
             document.getElementById("results").innerHTML = JSON.stringify(hotels);
         } else {
             console.error(hotels);
         }
     };
     xhr.send(null);
 }

// CREATE NEW HOTEL

//CREATE
function createNeWHotel() { event.preventDefault();
    var hotel = {
      hotelName: document.getElementById("hotelName").value,
      hotelAddress: document.getElementById("hotelAddress").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value

    };
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/api/hotels");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(hotel));
  }
  

