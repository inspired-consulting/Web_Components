import './components/geoBootstrap.js';

window.addEventListener('load', () => {
  getApiData();
});

async function getApiData() {
  const tableHead = querySelector("thead");
  const tableBody = querySelector("tbody");
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(res => res.json())
   console.log("res",res)
  
  
  
  
}
