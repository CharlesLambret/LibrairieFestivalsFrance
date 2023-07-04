# Library of Festivals in France

The Panorama des Festivals library is a set of functions that allows you to retrieve and filter festival data from the Panorama des Festivals API provided by the French Ministry of Culture. This API provides detailed information about festivals, such as their location, domain, region, periodicity, etc.

## Installation
To use this library in your project, you can install it via npm by executing the following command:

```
npm install librairiefestivalsfrancais
```

## Usage
Once installed, you can import the library's functions into your code. Here is an example of how to use the different available functions:

```
import {
  fetchFestivalsData,
  filterByRegion,
  filterByDomain,
  filterByDepartement,
  filterByMoisDebut,
  filterByKeyWords,
  filterByPeriodicite
} from 'librairiefestivalsfrancais';

// Retrieve data for all festivals
fetchFestivalsData()
  .then((festivalsData) => {
    console.log('Retrieved data:', festivalsData);

    // Filter festivals by region
    const festivalsInRegion = filterByRegion(festivalsData, 'Bourgogne-Franche-Comté');
    console.log('Festivals in Bourgogne-Franche-Comté:', festivalsInRegion);

    // Filter festivals by domain
    const danceFestivals = filterByDomain(festivalsData, 'Dance');
    console.log('Dance festivals:', danceFestivals);

    // Filter festivals by department
    const festivalsInDepartement = filterByDepartement(festivalsData, '21');
    console.log('Festivals in Côte-d\'Or department:', festivalsInDepartement);

    // Filter festivals by start month
    const festivalsInJanuary = filterByMoisDebut(festivalsData, '01 (January)');
    console.log('Festivals starting in January:', festivalsInJanuary);

    // Filter festivals by keywords
    const festivalsWithKeywords = filterByKeyWords(festivalsData, ['music', 'festival']);
    console.log('Festivals matching keywords:', festivalsWithKeywords);

    // Filter festivals by periodicity
    const festivalsWithPeriodicite = filterByPeriodicite(festivalsData, 'Annual');
    console.log('Festivals with annual periodicity:', festivalsWithPeriodicite);
  })
  .catch((error) => {
    console.error('Error while using the library:', error);
  });

```