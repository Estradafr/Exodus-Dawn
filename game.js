// variables
let xp = 0;
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
  constructor(name, power, price) {
    this.name = name;
    this.power = power;
    this.price = price;
  }
}

class Monster {
  constructor(name, health, power, xp) {
    this.name = name;
    this.health = health;
    this.power = power;
    this.xp = xp;
  }
}

class Locations {
  constructor(name, reqlvl) {
    this.name = name;
    this.reqlvl = reqlvl;
  }
}