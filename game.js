// variables
let exp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monterHealth;
let inventory = [""];

// global variables
const leftBtn = document.querySelector("#leftBtn");
const midBtn = document.querySelector("#midBtn");
const rightBtn = document.querySelector("#rightBtn");
const topText = document.querySelector("#text");
const bottomText = document.querySelector("#text");
const lvlText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

// classes
class Weapon {
  constructor(name, attackpower, price) {
    this.name = name;
    this.attackpower = attackpower;
    this.price = price;
  }
}

class Monster {
  constructor(name, health, attackpower, exp) {
    this.name = name;
    this.health = health;
    this.attackpower = attackpower;
    this.exp = exp;
  }
}

class Location {
  constructor(name, reqlvl) {
    this.name = name;
    this.reqlvl = reqlvl;
  }
}

// creating game components
const weapons = [
  // Warrior weapons
  new Weapon("Copper Sword", 10, 0),
  new Weapon("Mace", 15, 30),
  new Weapon("Battle Axe", 28, 60),
  // Mage weapons
  new Weapon("Wand", 6, 0),
  new Weapon("Enchanted Book", 12, 0),
  new Weapon("Grim Scepter", 24, 0),
  // Rogue weapons
  new Weapon("Daggers", 8, 0),
  new Weapon("Rapier", 14, 0),
  new Weapon("Khanjali", 22, 0),
]

const caveMonsters = [
  // Skeleton 30hp 13power 12xp
  new Monster("Skeleton", 45, 13, 12),
    // Goblin 20hp 8power 8xp
  new Monster("Goblin", 30, 8, 8),
      // Slime 15hp 4power 5xp
  new Monster("Slime", 15, 4, 5),
]

const bridgeMonsters = [
  // Troll 70hp 23power 20xp
  new Monster("Giant", 70, 23, 20),
  // Goblin 20hp 8power 8xp
  new Monster("Orc", 50, 8, 14),
  // Slime 15hp 4power 5xp
  new Monster("Troll", 40, 4, 9),
]

const forestMonsters = [
  // Raven 70hp 23power 20xp
  new Monster("Minotaur", 220, 40, 50),
  // Goblin 20hp 8power 8xp
  new Monster("King Spider", 170, 26, 31),
  // Slime 15hp 4power 5xp
  new Monster("Alpha Dire Wolf", 130, 19, 18),
]

const locations = [
  new Location("The Cave", 0),
  new Location("The Old Bridge", 2),
  new Location("The Twilight Forest", 4)
]