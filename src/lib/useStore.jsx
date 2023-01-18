import create from 'zustand';

const useBearStore = create(set => ({
  clickTrue: id => {
    set(state => ({
      skills: state.skills.map(skill =>
        skill.id === id ? { ...skill, isClicked: true } : skill
      ),
    }));
  },
  clickFalse: id => {
    set(state => ({
      skills: state.skills.map(skill =>
        skill.id === id ? { ...skill, isClicked: false } : skill
      ),
    }));
  },

  skills: [
    {
      id: '001',
      name: 'HTML',
      binary: '01001000 0101010 01001101 01001100 ',
      isClicked: true,
      imageUrl: 'html5-logo-31813.png',
    },
    {
      id: '002',
      name: ' NodeJ ',
      binary: '01001110 01101111 01100100 01100101 01001010 01110011 ',
      isClicked: true,
      imageUrl: 'nodejs-icon-890222153.png',
    },
    {
      id: '003',
      name: 'JavaScript',
      binary:
        '01001010 01100001 01110110 01100001 01010011 01100011 01110010 01101001 01110000 01110100 ',
      isClicked: true,
      imageUrl: 'javascript-39415.png',
    },
    {
      id: '004',
      name: 'MongoDB',
      binary: '01001101 01101111 01101110 01100111 01101111 01000100 01000010 ',
      isClicked: true,
      imageUrl: 'MondoDBLogo.png',
    },
    {
      id: '005',
      name: 'HTML',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: false,
      imageUrl: 'reactLogo.png',
    },
    {
      id: '006',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: true,
      imageUrl: 'CSS_3.png',
    },
    {
      id: '007',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: true,
      imageUrl: 'CSS_3.png',
    },
    {
      id: '008',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: false,
      imageUrl: 'reactLogo.png',
    },
    {
      id: '009',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: true,
      imageUrl: 'reactLogo.png',
    },
    {
      id: '010',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: true,
      imageUrl: 'reactLogo.png',
    },
    {
      id: '011',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: false,
      imageUrl: 'reactLogo.png',
    },
    {
      id: '012',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: true,
      imageUrl: 'CSS_3.png',
    },
    {
      id: '013',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: true,
      imageUrl: 'reactLogo.png',
    },
    {
      id: '014',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: false,
      imageUrl: 'reactLogo.png',
    },
    {
      id: '015',
      name: 'HTML&nbsp;|&nbsp;',
      binary: '01010010 01100101 01100001 01100011 01110100 ',
      isClicked: true,
      imageUrl: 'CSS_3.png',
    },
  ],
}));

export default useBearStore;
