import { fetchFestivalsData, filterByRegion, filterByDomain, filterByDepartement, filterByMoisDebut, filterByKeyWords, filterByPeriodicite } from './festivals';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      records: [
        {
          datasetid: 'panorama-des-festivals',
          recordid: '1',
          fields: {
            region: 'Bourgogne-Franche-Comté',
            domaine: 'Danse',
            departement: '21',
            mois_habituel_de_debut: '01 (janvier)',
            nom_de_la_manifestation: 'Festival de danse',
            commentaires: 'Un festival de danse incroyable',
            periodicite: 'Annuelle'
          }
        },
        {
          datasetid: 'panorama-des-festivals',
          recordid: '2',
          fields: {
            region: 'Auvergne-Rhône-Alpes',
            domaine: 'Musiques actuelles',
            departement: '42',
            mois_habituel_de_debut: '02 (février)',
            nom_de_la_manifestation: 'Festival de musique',
            commentaires: 'Un festival de musique fantastique',
            periodicite: 'Biennale'
          }
        },
      ]
    })
  })
);

describe('Festivals Module', () => {
  describe('fetchFestivalsData', () => {
    it('should fetch festivals data from the API', async () => {
      const festivalsData = await fetchFestivalsData();
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(festivalsData.records.length).toBe(2);
      expect(festivalsData.records[0].fields.region).toBe('Bourgogne-Franche-Comté');
      expect(festivalsData.records[1].fields.domaine).toBe('Musiques actuelles');
    });
  });

  describe('filterByRegion', () => {
    it('should filter festivals by region', () => {
      const festivalsData = {
        records: [
          { fields: { region: 'Bourgogne-Franche-Comté' } },
          { fields: { region: 'Auvergne-Rhône-Alpes' } },
          { fields: { region: 'Bretagne' } },
        ]
      };
      const filteredFestivals = filterByRegion(festivalsData, 'Bourgogne-Franche-Comté');
      expect(filteredFestivals.length).toBe(1);
      expect(filteredFestivals[0].fields.region).toBe('Bourgogne-Franche-Comté');
    });
  });

  describe('filterByDomain', () => {
    it('should filter festivals by domain', () => {
      const festivalsData = {
        records: [
          { fields: { domaine: 'Danse' } },
          { fields: { domaine: 'Musiques actuelles' } },
          { fields: { domaine: 'Théâtre' } },
        ]
      };
      const filteredFestivals = filterByDomain(festivalsData, 'Danse');
      expect(filteredFestivals.length).toBe(1);
      expect(filteredFestivals[0].fields.domaine).toBe('Danse');
    });
  });

  describe('filterByDepartement', () => {
    it('should filter festivals by departement', () => {
      const festivalsData = {
        records: [
          { fields: { departement: '21' } },
          { fields: { departement: '42' } },
          { fields: { departement: '63' } },
        ]
      };
      const filteredFestivals = filterByDepartement(festivalsData, '21');
      expect(filteredFestivals.length).toBe(1);
      expect(filteredFestivals[0].fields.departement).toBe('21');
    });
  });

  describe('filterByMoisDebut', () => {
    it('should filter festivals by mois de début', () => {
      const festivalsData = {
        records: [
          { fields: { mois_habituel_de_debut: '01 (janvier)' } },
          { fields: { mois_habituel_de_debut: '02 (février)' } },
          { fields: { mois_habituel_de_debut: '03 (mars)' } },
        ]
      };
      const filteredFestivals = filterByMoisDebut(festivalsData, '01 (janvier)');
      expect(filteredFestivals.length).toBe(1);
      expect(filteredFestivals[0].fields.mois_habituel_de_debut).toBe('01 (janvier)');
    });
  });

  describe('filterByKeyWords', () => {
    it('should filter festivals by keywords', () => {
      const festivalsData = {
        records: [
          { fields: { nom_de_la_manifestation: 'Festival de musique', commentaires: 'Un festival de musique fantastique' } },
          { fields: { nom_de_la_manifestation: 'Festival de danse', commentaires: 'Un festival de danse incroyable' } },
          { fields: { nom_de_la_manifestation: 'Festival de théâtre', commentaires: 'Un festival de théâtre passionnant' } },
        ]
      };
      const filteredFestivals = filterByKeyWords(festivalsData, ['musique', 'festival']);
      expect(filteredFestivals.length).toBe(1);
      expect(filteredFestivals[0].fields.nom_de_la_manifestation).toBe('Festival de musique');
    });
  });

  describe('filterByPeriodicite', () => {
    it('should filter festivals by periodicite', () => {
      const festivalsData = {
        records: [
          { fields: { periodicite: 'Annuelle' } },
          { fields: { periodicite: 'Biennale' } },
          { fields: { periodicite: 'Mensuelle' } },
        ]
      };
      const filteredFestivals = filterByPeriodicite(festivalsData, 'Annuelle');
      expect(filteredFestivals.length).toBe(1);
      expect(filteredFestivals[0].fields.periodicite).toBe('Annuelle');
    });
  });
});
