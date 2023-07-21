import { Farm } from './farms.js';
import { Duck } from './ducks.js';
import { Cow } from './cows.js';

let cows = [];
let ducks = [];
let farms = [];


const newFarm = (name, location) => {
  let farm = new Farm(name, location);
  farms.push(farm);
  return farm;
}

const newCow = (name,  color, farm, location) => {
  let cow = new Cow(name, color, farm, location);
  cows.push(cow);
  if (farm !== undefined) {
    farms.find(f => f.name === farm).cows.push(cow);
  }
  return cow;
}

const newDuck = (name, color, farm, location) => {
  let duck = new Duck(name, color, farm, location);
  ducks.push(duck);
  if (farm !== undefined) {
    farms.find(f => f.name === farm).ducks.push(duck);
  }
  return duck;
}




newFarm('Old McDonald', 'Texas');

newCow('Betsy', 'brown', 'Old McDonald', 'Texas');
newCow('Bessy', 'black', 'Old McDonald', 'Texas');
newCow('Bobby', 'white', 'Old McDonald', 'Texas');

newDuck('Denis', 'brown', 'Old McDonald', 'Texas');
newDuck('Dandy', 'black', 'Old McDonald', 'Texas');
newDuck('Dirty', 'white', 'Old McDonald', 'Texas');



console.log(farms)
console.log(cows)



const buildFarms = (farms) => {
  farms.forEach(farm => {

    //FARM
    let farmNode = document.createElement('div');
      farmNode.setAttribute('class', "farm")
      farmNode.setAttribute('id', farm.name)
    let farmName = document.createElement('h1')
      farmName.appendChild(document.createTextNode(farm.name));
    let farmLocation = document.createElement('h4')
      farmLocation.appendChild(document.createTextNode(`Located in the heart of ${farm.location}`));

    //COWS
    let farmCows = document.createElement('div');
      farmCows.setAttribute('class', 'cows');
      farmCows.setAttribute('id', `${farm.name}Cows`);
    let cowTitle = document.createElement('h3');
      cowTitle.appendChild(document.createTextNode('Cows:'));
    let cowList = document.createElement('ul');
      farm.cows.forEach(cow => {
        let cowNode = document.createElement('li');
        cowNode.appendChild(document.createTextNode(cow.name));
        cowNode.style.color = cow.color;
        cowList.appendChild(cowNode);
      })

    //DUCKS
    let farmDucks = document.createElement('div');
      farmDucks.setAttribute('class', 'ducks');
      farmDucks.setAttribute('id', `${farm.name}Ducks`);
    let duckTitle = document.createElement('h3');
      duckTitle.appendChild(document.createTextNode('Ducks:'));
    let duckList = document.createElement('ul');
      farm.ducks.forEach(duck => {
        let duckNode = document.createElement('li');
        duckNode.appendChild(document.createTextNode(duck.name));
        duckNode.style.color = duck.color;
        duckList.appendChild(duckNode);
      })

    farmNode.appendChild(farmName);
    farmNode.appendChild(farmLocation);
    farmNode.appendChild(farmCows);
    farmCows.appendChild(cowTitle);
    farmCows.appendChild(cowList);
    farmNode.appendChild(farmDucks);
    farmDucks.appendChild(duckTitle);
    farmDucks.appendChild(duckList);

    document.getElementById('farms').appendChild(farmNode);
  })
}

buildFarms(farms);

//InnerHTML
//
// document.getElementById('farms').innerHTML = farms.map(farm => {
//   return ( 
//   `<div class=${farm.name}>
//     <h1>${farm.name}</h1>
//     <h2>${farm.location}</h2>
//     <div id="${farm.name}Cows">
//       <h3>Cows:</h3>
//       <ul>
//         ${farm.cows.map(cow => {
//           return (
//             `<li style="color: ${cow.color}"> ${cow.name}</li>`
//           )
//         }).join('')}
//       </ul>
//     </div>
//     <div id="${farm.name}Ducks">
//       <h3>Ducks:</h3>
//       <ul>
//       ${farm.ducks.map(duck => {
//         return (
//           `<li style="color: ${duck.color}">${duck.name}</li>`
//         )
//       }).join('')}
//     </ul>
//     </div>
//   </div>`
//   )
// }
// ).join('')


