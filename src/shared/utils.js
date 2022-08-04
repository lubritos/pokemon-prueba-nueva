export const tipos = [
    {
        label: 'todos',
        color: '#f10e0e', 
    },
    {
        label: 'normal', 
        color: '#b0bec5'
    },
    {
        label: 'dark', 
        color: '#455a64'
    },
    {
        label: 'dragon', 
        color: '#e64a19'
    },
    {
        label: 'fairy', 
        color: '#e1bee7'
    },
    {
        label: 'fire', 
        color: '#FB6C6C'
    },
    {
        label: 'water', 
        color: '#91CAFE'
    },
        {
        label: 'electric', 
        color: '#FFD86F'
    },
    {
        label: 'grass', 
        color: '#48D0B0'
    },
    {
        label: 'poison', 
        color: '#152ecef1'
    },
    {
        label: 'flying', 
        color: '#cacfcf'
    },
    {
        label: 'fighting', 
        color: '#bcaaa4'
    },
    {
        label: 'ground', 
        color: '#8d6e63 '
    },
    {
        label: 'bug', 
        color: '#96D47F'
    },
    {
        label: 'rock', 
        color: 'rgba(106, 88, 88, 0.92)'
    },
    {
        label: 'ice', 
        color: '#40c4ff'
    },
    {
        label: 'ghost', 
        color: '#607d8b'
    },
    {
        label: 'steel', 
        color: '#78909C'
    },
    {
        label: 'psychic', 
        color: '#ffca28'
    },
];

export function getColor(type) {
    const color = {
      'water': 'water',
      'grass': 'grass',
      'poison': 'poison',
      'fire': 'fire',
      'electric': 'electric',
      'bug': 'bug',
      'flying': 'flying',
      'rock' : 'rock',
      'dark': 'dark',
      'normal':'normal',
      'ice': 'ice',
      'fairy':'fairy',
      'fighting':'fighting',
      'ground': 'ground',
      'psychic':'psychic',
      'ghost':'ghost',
      'dragon':'dragon',
      'steel': 'steel'
    }
    return color[type];
}