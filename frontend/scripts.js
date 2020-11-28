const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const url = 'http://localhost:8090/adchungcsc/LocationAPI/1.0.0/locations';
console.log("hello")
let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
//headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
headers.append('Origin','http://localhost:8090');

fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers: headers
})
    .then(data => data.json())
    .then((json) => {
      //alert(JSON.stringify(json));

      //console.log(data[0].locationName);


      json.forEach((location) => {
        //console.log(location.locationName)
        // Create a div with a card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        // Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1')
        h1.textContent = location.locationName

        // Create a p and set the text content to the film's description
         const p = document.createElement('p')
         p.textContent = `${location.latitude}, ${location.longitude}\n${location.description}`


          // Append the cards to the container element
        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
      })





      console.log("done");
    }).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));

