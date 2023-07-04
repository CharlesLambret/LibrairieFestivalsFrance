export async function fetchFestivalsData() {
    try {
      const response = await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=');
      const data = await response.json();
      console.log('Données récupérées :', data);
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l\'API', error);
      throw error;
    }
  }
  
  export function filterByRegion(festivalsData, region) {
    return festivalsData.records.filter((festival) => festival.fields.region === region);
  }
  
  export function filterByDomain(festivalsData, domain) {
    return festivalsData.records.filter((festival) => festival.fields.domaine === domain);
  }
  
  export function filterByDepartement(festivalsData, departement) {
    return festivalsData.records.filter((festival) => festival.fields.departement === departement);
  }
  
  export function filterByMoisDebut(festivalsData, mois) {
    return festivalsData.records.filter((festival) => festival.fields.mois_habituel_de_debut.includes(mois));
  }
  
  export function filterByKeyWords(festivalsData, motsCles) {
    return festivalsData.records.filter((festival) => {
      
      const nomManifestation = festival.fields.nom_de_la_manifestation.toLowerCase();
      const descriptionManifestation = festival.fields.commentaires ? festival.fields.commentaires.toLowerCase() : '';
  
      for (const motCle of motsCles) {
        if (nomManifestation.includes(motCle.toLowerCase()) || descriptionManifestation.includes(motCle.toLowerCase())) {
          return true;
        }
      }
  
      return false;
    });
  }
  
  export function filterByPeriodicite(festivalsData, periodicite) {
    return festivalsData.records.filter((festival) => festival.fields.periodicite === periodicite);
  }
  