import Human from '../assets/human.jpeg';
import Alien from '../assets/alien.jpeg';
import Humanoid from '../assets/humanoid.jpeg';
import Poopybutthole from '../assets/poopybutthole.jpeg';
import Unkown from '../assets/unknown.jpeg';
import Mythological from '../assets/mythological-creature.jpeg';
import Animal from '../assets/animal.jpeg';
import Robot from '../assets/robot.jpeg';
import Cronenberg from '../assets/cronenberg.jpeg';
import Disease from '../assets/disease.jpeg';

export interface Species {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export const species: Species[] = [
  {
    id: 1,
    name: 'Human',
    slug: 'human',
    image: Human
  },
  {
    id: 2,
    name: 'Alien',
    slug: 'alien',
    image: Alien
  },
  {
    id: 3,
    name: 'Humanoid',
    slug: 'humanoid',
    image: Humanoid
  },
  {
    id: 4,
    name: 'Poopybutthole',
    slug: 'poopybutthole',
    image: Poopybutthole
  },
  {
    id: 5,
    name: 'Unknown',
    slug: 'unknown',
    image: Unkown
  },
  {
    id: 6,
    name: 'Mythological Creature',
    slug: 'mythological-creature',
    image: Mythological
  },
  {
    id: 7,
    name: 'Animal',
    slug: 'animal',
    image: Animal
  },
  {
    id: 8,
    name: 'Robot',
    slug: 'robot',
    image: Robot
  },
  {
    id: 9,
    name: 'Cronenberg',
    slug: 'cronenberg',
    image: Cronenberg
  },
  {
    id: 10,
    name: 'Disease',
    slug: 'disease',
    image: Disease
  }
];
