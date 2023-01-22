import { create } from 'zustand';

const useBearStore = create(set => ({
  clickTrue: id => {
    set(state => ({
      skills: state.skills.map(skill =>
        skill.id === id ? { ...skill, clicked: true } : skill
      ),
    }));
  },
  clickFalse: id => {
    set(state => ({
      skills: state.skills.map(skill =>
        skill.id === id ? { ...skill, clicked: false } : skill
      ),
    }));
  },

  skills: [
    {
      id: '001',
      name: 'HTML',
      binary: '01001000 0101010 01001101 01001100 ',
      clicked: false,
      imageUrl: 'html5-logo-31813.png',
    },
    {
      id: '002',
      name: ' NodeJ ',
      binary: '01001110 01101111 01100100 01100101 01001010 01110011 ',
      clicked: false,
      imageUrl: 'nodejs-icon-890222153.png',
    },
    {
      id: '003',
      name: 'JavaScript',
      binary:
        '01001010 01100001 01110110 01100001 01010011 01100011 01110010 01101001 01110000 01110100 ',
      clicked: false,
      imageUrl: 'javascript-39415.png',
    },
    {
      id: '004',
      name: 'MongoDB',
      binary: '01001101 01101111 01101110 01100111 01101111 01000100 01000010 ',
      clicked: false,
      imageUrl: 'MondoDBLogo.png',
    },
    {
      id: '005',
      name: 'CSS',
      binary: '01000011 01010011 01010011',
      clicked: false,
      imageUrl: 'CSS_3.png',
    },
    {
      id: '006',
      name: 'React',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      clicked: false,
      imageUrl: 'reactLogo.png',
    },
    {
      id: '007',
      name: 'GitHub',
      binary: '01000111 01101001 01110100 01001000 01110101 01100010 ',
      clicked: false,
      imageUrl: 'GitHub_logo.png',
    },
    {
      id: '008',
      name: 'styled-components',
      binary:
        '01110011 01110100 01111001 01101100 01100101 01100100 00101101 01100011 01101111 01101101 01110000 01101111 01101110 01100101 01101110 01110100 01110011 ',
      clicked: false,
      imageUrl: 'logoStyledC.png',
    },
    {
      id: '009',
      name: 'NEXT',
      binary: '01001110 01000101 01011000 01010100',
      clicked: false,
      imageUrl: 'next-js-logo.png',
    },
    {
      id: '010',
      name: 'Zustand',
      binary: '01011010 01110101 01110011 01110100 01100001 01101110 01100100 ',
      clicked: false,
      imageUrl: 'zustandBear.png',
    },
    {
      id: '011',
      name: 'ESLint',
      binary: '01000101 01010011 01001100 01101001 01101110 01110100 ',
      clicked: false,
      imageUrl: 'ESLint.png',
    },
    {
      id: '012',
      name: 'Figma',
      binary: '01000110 01101001 01100111 01101101 01100001',
      clicked: false,
      imageUrl: 'figma-logo.png',
    },
    {
      id: '013',
      name: 'Git',
      binary: '01000111 01101001 01110100 ',
      clicked: false,
      imageUrl: 'gitIcon.png',
    },
    {
      id: '014',
      name: 'immerJs',
      binary: '01101001 01101101 01101101 01100101 01110010 01001010 01110011 ',
      clicked: false,
      imageUrl: 'ImmerJsLogo.png',
    },
    {
      id: '015',
      name: 'Rest',
      binary: '01010010 01100101 01110011 01110100 ',
      clicked: false,
      imageUrl: 'restLogo.png',
    },
  ],
}));

export default useBearStore;
