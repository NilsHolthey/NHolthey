import { persist } from 'zustand/middleware';

import { create } from 'zustand';

const useBearStore = create(
  persist(set => ({
    clickTrue: id => {
      set(state => ({
        skills: state.skills.map(skill =>
          skill.id === id ? { ...skill, bookmark: true } : skill
        ),
      }));
    },
    clickFalse: id => {
      set(state => ({
        entrskillsies: state.skills.map(skill =>
          skill.id === id ? { ...skill, bookmark: false } : skill
        ),
      }));
    },

    skills: [
      {
        id: '001',
        category: 'Flohmarkt',
        name: 'Faust',
        address: 'Zur Bettfedernfabrik 3, 30451 Hannover',
        information:
          'Mein liebster Stadtteil-Flohmarkt mit einer tollen Atmosphäre!',
        visited: 'Ich war schon da',
        rating: 'Mag ich!',
        edit: false,
        bookmark: true,
        position: [52.3760437, 9.7104938],
      },
      {
        id: '002',
        category: 'Laden',
        name: 'Humana',
        address: 'Friedrichstraße 148, 10117 Berlin',
        information:
          'Humana ist meistens super. Hier muss ich unbedingt noch hin!',
        visited: 'Ich war noch nicht da',
        rating: '',
        edit: false,
        bookmark: false,
        position: [52.5195079, 13.3881322],
      },
      {
        id: '003',
        category: 'Laden',
        name: 'Frau Schröder',
        address: 'Kötnerholzweg 33A, 30451 Hannover',
        information:
          'Tolle Beratung durch die nette Inhaberin, viele schöne Vintage-Teile zu moderaten Preisen.',
        visited: 'Ich war schon da',
        rating: 'Mag ich!',
        edit: false,
        bookmark: true,
        position: [52.3732052, 9.7051511],
      },
      {
        id: '004',
        category: 'Laden',
        name: 'Pick & Weight',
        address: 'Ehrenstraße 60-64, 50672 Köln',
        information:
          'Schon öfter von gehört, muss ich mir mal anschauen beim nächsten Besuch in Köln.',
        visited: 'Ich war noch nicht da',
        rating: '',
        edit: false,
        bookmark: false,
        position: [50.9384025, 6.9422052],
      },
      {
        id: '005',
        category: 'Flohmarkt',
        name: 'Altstadt',
        address: 'Am Hohen Ufer 3, 30159 Hannover',
        information:
          'Der bekannteste Flohmarkt Hannovers, von der Auswahl her aber leider nicht mein Fall.',
        visited: 'Ich war schon da',
        rating: 'Nicht mein Fall!',
        edit: false,
        bookmark: false,
        position: [52.372612, 9.7308621],
      },
      {
        id: '6',
        category: 'Flohmarkt',
        name: 'Flohschanze',
        address: 'Neuer Kamp 30, 20357 Hamburg',
        information:
          'Ein schöner Flohmarkt mitten im Kiez. Immer wieder einen Besuch wert!',
        visited: 'Ich war schon da',
        rating: 'Mag ich!',
        edit: false,
        bookmark: true,
        position: [53.5581388, 9.9679333],
      },
    ],
  }))
);

export default useBearStore;
