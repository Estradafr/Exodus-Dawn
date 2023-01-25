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
  constructor(name, attackpower, goldprice) {
    this.name = name;
    this.attackpower = attackpower;
    this.goldprice = goldprice;
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
  new Weapon("Copper Sword", 15, 0),
  new Weapon("Mace", 24, 30),
  new Weapon("Battle Axe", 33, 60),
  // Mage weapons
  new Weapon("Wand", 12, 0),
  new Weapon("Enchanted Book", 24, 30),
  new Weapon("Grim Scepter", 36, 60),
  // Rogue weapons
  new Weapon("Daggers", 16, 0),
  new Weapon("Rapier", 23, 30),
  new Weapon("Khanjali", 40, 60),
]

const caveMonsters = [
  // Skeleton 30hp 13power 12xp
  new Monster("Skeleton", 45, 13, 12),
  // Goblin 20hp 8power 7xp
  new Monster("Goblin", 30, 8, 7),
  // Slime 15hp 4power 2xp
  new Monster("Slime", 15, 4, 2),
]

const bridgeMonsters = [
  // Giant 70hp 20power 18xp
  new Monster("Giant", 70, 20, 18),
  // Orc 50hp 14power 13xp
  new Monster("Orc", 50, 14, 13),
  // Troll 40hp 9power 8xp
  new Monster("Troll", 40, 9, 8),
]

const forestMonsters = [
  // The Minotaur 220hp 40power 48xp
  new Monster("The Minotaur", 220, 40, 48),
  // King Spider 170hp 26power 35xp
  new Monster("King Spider", 170, 26, 35),
  // Alpha Dire Wolf 130hp 19power 28xp
  new Monster("Alpha Dire Wolf", 130, 19, 28),
]

const locations = [
  new Location("The Cave", 0),
  new Location("The Old Bridge", 2),
  new Location("The Twilight Forest", 4)
]