const fs = require('fs');
const faker = require('faker');

const adj = [
  // 'Heller',
  // 'Armstrong',
  // 'Feil',
  // 'Kuhic',
  // 'Kiehn',
  // 'Marquardt',
  // 'Ferry',
  // 'Greenholt',
  // 'Murazik',
  // 'Kovacek',
  // 'Altenwerth',
  // 'Schroeder',
  // 'Boyle',
  // 'Ruecker',
  // 'Corkery',
  // 'Sauer',
  // 'Batz',
  // 'Howe',
  // 'McLaughlin',
  // 'Hyatt',
  // 'Will',
  // 'Runolfsson',
  // 'Pollich',
  // 'Nicolas',
  // 'Gleichner',
  // 'Lakin',
  // 'Terry',
  // 'Herzog',
  // 'Raynor',
  // 'Jakubowski',
  // 'Mills',
  // 'Gibson',
  // 'Walter',
  // 'Donnelly',
  // 'Kertzmann',
  // 'Fadel',
  // 'Volkman',
  // 'Nitzsche',
  // 'Stanton',
  // 'Wehner',
  // 'Wilderman',
  // 'Goyette',
  // 'Sawayn',
  // 'Daniel',
  // 'Mueller',
  // 'Rippin',
  // 'Gottlieb',
  // 'Gulgowski',
  // 'Schultz',
  // 'Huels',
  // 'Christiansen',
  // 'Jones',
  // 'Stark',
  // 'Hand',
  // 'Konopelski',
  // 'Wintheiser',
  // 'Toy',
  // 'Shields',
  // 'Mraz',
  // 'Osinski',
  // 'Haley',
  // 'Adams',
  // 'Reilly',
  // 'Ritchie',
  // 'Witting',
  // 'Zboncak',
  // 'Ratke',
  // 'Welch',
  // 'Blanda',
  // 'Cormier',
  // 'Cole',
  // 'Waelchi',
  // 'Lemke',
  // 'Glover',
  // 'Johnston',
  // 'Schneider',
  // 'Kutch',
  // 'Padberg',
  // "O'Conner",
  // 'Schmidt',
  // 'Braun',
  // 'Luettgen',
  // 'Stamm',
  // 'Walker',
  // 'Considine',
  // 'Turcotte',
  // 'Baumbach',
  // "O'Connell",
  // 'Abshire',
  // 'Labadie',
  'Bernier',
  'Champlin',
  'Hessel',
  'Fay',
  'Dibbert',
  'Nikolaus',
  'Brakus',
  'Williamson',
  'Mohr',
  'Krajcik',
];

const append = (data) => {
  const chunks = [];
  let prevIdx = 0;
  for (let j = 0; j <= data.length; j += 1000000) {
    chunks.push(data.slice(prevIdx, j).join('\n'));
    prevIdx = j;
  }
  // for (let i = 1; i <= 1; i += 1) {
  fs.appendFileSync('./rounds/data10M.csv', chunks[1]);
  // }
};

const makeUniqueBusinesses = (rounds) => {
  const storage = [];
  let id = 9000001;
  const makeCombos = (counter, combo = []) => {
    if (!counter) {
      const randomNumber = (min = 0, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min;
      const randomPhoneNumber = () => {
        let number = '(';
        for (let i = 0; i < 10; i += 1) {
          number += randomNumber();
          if (i === 2) number += ') ';
          if (i === 5) number += '-';
        }
        return number;
      };
      const mockTime = () => {
        const openingTime = `${Math.floor(Math.random() * 6) + 6}:${Math.floor(Math.random() * 50) + 10} am`;
        const closingTime = `${Math.floor(Math.random() * 11) + 1}:${Math.floor(Math.random() * 50) + 10} pm`;
        return `${openingTime} - ${closingTime}`;
      };
      const trueOrFalse = () => Math.floor(Math.random() < 0.5);
      let register = `${id},`;
      register += `${combo.join(' ')},`;
      register += `"${faker.fake('{{address.streetAddress}}, {{address.city}}, {{address.stateAbbr}}')}",`;
      register += `${faker.address.longitude()},`;
      register += `${faker.address.latitude()},`;
      register += `"b/t ${faker.address.streetName()} & ${faker.address.streetName()}",`;
      register += `${faker.name.lastName()},`;
      register += `${randomPhoneNumber()},`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `"${trueOrFalse()}",`;
      register += `${mockTime()},`;
      register += `${mockTime()},`;
      register += `${mockTime()},`;
      register += `${mockTime()},`;
      register += `${mockTime()},`;
      register += `${mockTime()},`;
      register += `${mockTime()}`;
      storage.push(register);
      id += 1;
    } else {
      for (let i = 0; i < adj.length; i += 1) {
        const element = adj[i];
        makeCombos(counter - 1, combo.concat(element));
      }
    }
  };
  makeCombos(rounds);
  append(storage);
};

makeUniqueBusinesses(6);
