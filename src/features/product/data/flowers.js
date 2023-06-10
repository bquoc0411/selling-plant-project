import { IMAGES } from "../../../assets";

const flowers = [
  {
    id: '001',
    name: "Anthurium",
    img: IMAGES.flowers.anthurium,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    table: {
      type: 'flower',
      sun: 'lower lights',
      tempt: 'Cool to hot enviroment',
      water: 'Need a lots',
      pet: 'Friendly with children and animal',
      grow: 'Slowly growing'
    },
    description: `Anthurium andraeanum. An easy to care houseplant with large, thick, glossy elongated, heart-shaped leaves`,
  },
  {
    id: '002',
    name: "Azalea",
    img: IMAGES.flowers.azalea,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    table: {
      type: 'Flower',
      sun: 'lower lights',
      tempt: '25-35 degrees C',
      water: '50% - 75% wet soil',
      pet: 'Friendly with children and animal',
      grow: 'Normal'
    },
    description: `Azaleas are very popular ornamental plants and among the most popular garden plants. T`,
  },
  {
    id: '003',
    name: "Flower Catus",
    img: IMAGES.flowers.cactus,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    description: `Not like normal traiditional catus. This bring many pretty flowers every year. It's really simple to take care`,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: '30-40 degrees C',
      water: 'Don\'t need',
      pet: 'May be unfriendly with children and animal',
      grow: 'Slowly growing'
    },
  },
  {
    id: '004',
    name: "Cape Primrose",
    img: IMAGES.flowers.capePrimrose,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    description: `Cape Primrose's flowers perform best in bright filtered light with shade from hot sun in fertile, moist, humus-rich well-drained soil.`,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: 'Cool to hot enviroment',
      water: 'Don\'t need',
      pet: 'Friendly with children and animal',
      grow: 'Very fast'
    }, 
  },
  {
    id: '005',
    name: "Cyclamen",
    img: IMAGES.flowers.cyclamen,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    description: `Cyclamen have attractive, rounded to heart-shaped leaves, often marked with white or silver in a variety of patterns.`,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: '20-40 degrees C',
      water: '50-70% soil wet',
      pet: 'Friendly with children and animal',
      grow: 'Fast'
    },
  },
  {
    id: '006',
    name: "Gardenia",
    img: IMAGES.flowers.gardenia,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: '20-40 degrees C',
      water: '50-70% soil wet',
      pet: 'Friendly with children and animal',
      grow: 'Fast'
    },
    description: `Gardenia jasminoides, commonly known as gardenia and cape jasmine, is an evergreen flowering plant in the coffee family Rubiaceae. It is native to parts of`,
  },
  {
    id: '007',
    name: "Ixora",
    img: IMAGES.flowers.ixora,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: 'Cool to hot enviroment',
      water: 'Don\'t need to much',
      pet: 'Friendly with children and animal',
      grow: 'Very fast'
    },
    description: `Ixora chinensis extending the inflorescence and rounding 20 to 30 rounded red-orange florets to form a hemisphere.`,
  },
  {
    id: '008',
    name: "Jasmine",
    img: IMAGES.flowers.jasmine,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: 'Cool to hot enviroment',
      water: 'Don\'t need to much',
      pet: 'Friendly with children and animal',
      grow: 'Normal'
    },
    description: `Jasmine flower is a delicate flowering plant with tiny flowers that is prized for its alluring blossoms that draw pollinators and its`,
  },
  {
    id: '009',
    name: "Micro Lotus",
    img: IMAGES.flowers.miniLotus,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: 'Cool to hot enviroment',
      water: 'Need a lots',
      pet: 'Friendly with children and animal',
      grow: 'Slow'
    },
    description: `Micro Lotus are a new variety of mini lotus from China. Micro lotus are best grown in 15 cm pots with ample light and ventilation.`,
  },
  {
    id: '010',
    name: "Orchid",
    img: IMAGES.flowers.orchid,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    description: `Orchid are a new variety of mini lotus from China. Micro lotus are best grown in 15 cm pots with ample light and ventilation.`,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: 'Cool or hot enviroment',
      water: 'Living under water',
      pet: 'Friendly with children and animal',
      grow: 'Very fast'
    },
  },
  {
    id: '011',
    name: "Portulaca Grandiflora",
    img: IMAGES.flowers.portulacaGrandiflora,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: 'Cool or hot enviroment',
      water: 'Need a lots',
      pet: 'Friendly with children and animal',
      grow: 'Very fast'
    },
    description: `The plant has succulent leaves that are fleshy and narrow and grows 8 inches tall and 1 foot wide forming a matt. The flowers are red, orange, yellow, white and `,
  },
  {
    id: '012',
    name: "Sill Bromeliad",
    img: IMAGES.flowers.sillBromeliad,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: 'Cool or hot enviroment',
      water: 'Don\'t watering too much',
      pet: 'Friendly with children and animal',
      grow: 'Slow'
    },
    description: `Colorful bromeliad blooms can last anywhere from 3-6 months. Most Popular. Pet-Friendly. Bromeliad Vriesea Intenso Orange. Long-lasting flowering houseplant.
    `,
  },
  {
    id: '013',
    name: "Violet",
    img: IMAGES.flowers.violet,
    price: 89.99,
    isFreeShip: false,
    sale: 10,
    description: `The violet is a genus of flowering plants. The common blue violet (Viola sororia) is the state flower of the U.S. state of Illinois`,
    table: {
      type: 'Flower',
      sun: 'Very high lights',
      tempt: 'Cool enviroment',
      water: 'Need a lots',
      pet: 'Friendly with children and animal',
      grow: 'Very fast'
    },
  },
];

export default flowers;
