import { fetchFestivalsData, filterByRegion, filterByDomain, filterByDepartement, filterByMoisDebut, filterByKeyWords, filterByPeriodicite } from './festivals';

fetchFestivalsData()
  .then((festivalsData) => {
    console.log('Données reçues avec succès !');

    const festivalsInRegion = filterByRegion(festivalsData, "Bourgogne-Franche-Comté");
    console.log('Festivals en Bourgogne-Franche-Comté :', festivalsInRegion);
    
    const danceFestivals = filterByDomain(festivalsData, "Danse");
    console.log('Festivals de danse :', danceFestivals);
    
    const festivalsInDepartement = filterByDepartement(festivalsData, "21");
    console.log('Festivals dans le département Côte-d\'Or :', festivalsInDepartement);
    
    const festivalsPeriodicite = filterByPeriodicite(festivalsData, 'Annuelle');
    console.log('Festivals avec périodicité annuelle :', festivalsPeriodicite);

    const festivalsMotsCles = filterByKeyWords(festivalsData, ['musique', 'festival']);
    console.log('Festivals correspondant aux mots-clés :', festivalsMotsCles);

    const festivalsInJanuary = filterByMoisDebut(festivalsData, "01 (janvier)");
    console.log('Festivals commençant en janvier :', festivalsInJanuary);
  })
  .catch((error) => {
    console.error('Erreur lors de l\'utilisation de la librairie', error);
  });
