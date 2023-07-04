# Librairie des Festivals en France

La bibliothèque Panorama des Festivals est un ensemble de fonctions permettant de récupérer et de filtrer les données des festivals à partir de l'API Panorama des Festivals du Ministère de la Culture en France. Cette API fournit des informations détaillées sur les festivals tels que leur localisation, leur domaine, leur région, leur périodicité, etc.

## Installation
Pour utiliser cette bibliothèque dans votre projet, vous pouvez l'installer via npm en exécutant la commande suivante :

```
npm install 
```

## Utilisation
Une fois installée, vous pouvez importer les fonctions de la bibliothèque dans votre code. Voici un exemple d'utilisation des différentes utilisations disponibles :

```
import {
  fetchFestivalsData,
  filterByRegion,
  filterByDomain,
  filterByDepartement,
  filterByMoisDebut,
  filterByKeyWords,
  filterByPeriodicite
} from 'panorama-des-festivals-api';

// Récupérer les données de tous les festivals
fetchFestivalsData()
  .then((festivalsData) => {
    console.log('Données récupérées :', festivalsData);

    // Filtrer les festivals par région
    const festivalsInRegion = filterByRegion(festivalsData, 'Bourgogne-Franche-Comté');
    console.log('Festivals en Bourgogne-Franche-Comté :', festivalsInRegion);

    // Filtrer les festivals par domaine
    const danceFestivals = filterByDomain(festivalsData, 'Danse');
    console.log('Festivals de danse :', danceFestivals);

    // Filtrer les festivals par département
    const festivalsInDepartement = filterByDepartement(festivalsData, '21');
    console.log('Festivals dans le département Côte-d\'Or :', festivalsInDepartement);

    // Filtrer les festivals par mois de début
    const festivalsInJanuary = filterByMoisDebut(festivalsData, '01 (janvier)');
    console.log('Festivals commençant en janvier :', festivalsInJanuary);

    // Filtrer les festivals par mots-clés
    const festivalsWithKeywords = filterByKeyWords(festivalsData, ['musique', 'festival']);
    console.log('Festivals correspondant aux mots-clés :', festivalsWithKeywords);

    // Filtrer les festivals par périodicité
    const festivalsWithPeriodicite = filterByPeriodicite(festivalsData, 'Annuelle');
    console.log('Festivals avec périodicité annuelle :', festivalsWithPeriodicite);
  })
  .catch((error) => {
    console.error('Erreur lors de l\'utilisation de la bibliothèque', error);
  });

```