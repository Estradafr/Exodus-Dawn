// variables
let exp = 0;
let health = 100;
let gold = 0;
let currentWeapon = 0;
let fighting;
let monterHealth;
let inventory = [''];

// classes
class Weapon {
	constructor(_name, _attackPower, _goldPrice) {
		this.name = _name;
		this.attackpower = _attackPower;
		this.goldprice = _goldPrice;
	}
}

class Monster {
	constructor(_name, _health, _attackPower, _exp) {
		this.name = _name;
		this.health = _health;
		this.attackpower = _attackPower;
		this.exp = _exp;
	}
}

class Location {
	constructor(_name, _requiredLvl) {
		this._name = _name;
		this.reqlvl = _requiredLvl;
	}
}

// creating game components
const weapons = [
	// Warrior weapons
	new Weapon('Copper Sword', 15, 0),
	new Weapon('Mace', 24, 30),
	new Weapon('Battle Axe', 33, 60),
	// Mage weapons
	new Weapon('Wand', 12, 0),
	new Weapon('Enchanted Book', 24, 30),
	new Weapon('Grim Scepter', 36, 60),
	// Rogue weapons
	new Weapon('Daggers', 16, 0),
	new Weapon('Rapier', 23, 30),
	new Weapon('Khanjali', 40, 60),
];

const caveMonsters = [
	// Skeleton 30hp 13power 12xp
	new Monster('Skeleton', 45, 13, 12),
	// Goblin 20hp 8power 7xp
	new Monster('Goblin', 30, 8, 7),
	// Slime 15hp 4power 2xp
	new Monster('Slime', 15, 4, 2),
];

const bridgeMonsters = [
	// Giant 70hp 20power 18xp
	new Monster('Giant', 70, 20, 18),
	// Orc 50hp 14power 13xp
	new Monster('Orc', 50, 14, 13),
	// Troll 40hp 9power 8xp
	new Monster('Troll', 40, 9, 8),
];

const forestMonsters = [
	// The Minotaur 220hp 40power 48xp
	new Monster('The Minotaur', 220, 40, 48),
	// King Spider 170hp 26power 35xp
	new Monster('King Spider', 170, 26, 35),
	// Alpha Dire Wolf 130hp 19power 28xp
	new Monster('Alpha Dire Wolf', 130, 19, 28),
];

// game functions and loop
const leftBtn = document.querySelector('#leftBtn');
leftBtn.getElementsByClassName('.buttons');
leftBtn.style.display = 'none';
const midBtn = document.querySelector('#midBtn');
const rightBtn = document.querySelector('#rightBtn');
rightBtn.getElementsByClassName('.buttons');
rightBtn.style.display = 'none';
const level = document.querySelector('#lvlText');
const goldText = document.querySelector('#goldText');
const gameText = document.querySelector('#gameText');

const locations = [
	{
		name: 'Dark Forest',
		text:
			`You wake up in a random dark forest.` +
			`<br />` +
			`You can't remember anything. Yet you know you must get back to the village. Quick!`,
		btnText: `Run!`,
	},
	{
		name: 'The Village',
		text:
			`You get to village and see it's being attacked by Orcs` +
			`<br />` +
			`<br />` +
			`You have to grab a weapon, now!`,
		leftBtnText: `Grab the sword`,
		midBtnText: `Grab the mace`,
		rightBtnText: `Grab the axe`,
	},
	{
		text:
			`You grabbed the sword!` +
			`<br>` +
			`Now you've got to fight that small orc!`,
	},
];

function beginAdventure() {
	gameText.innerHTML = locations[0].text;
	midBtn.innerHTML = locations[0].btnText;
}

midBtn.addEventListener('click', runToVillage);

function runToVillage(promise) {
	leftBtn.style.display = 'block';
	rightBtn.style.display = 'block';
	gameText.innerHTML = locations[1].text;
	leftBtn.innerHTML = locations[1].leftBtnText;
	midBtn.innerHTML = locations[1].midBtnText;
	rightBtn.innerHTML = locations[1].rightBtnText;
}

function weaponGrabbed() {
	gameText.innerHTML = locations[2].text;
}

// I can not figure out how to do a switch case for these options.
// I want to continue the story with fighting an orc, traversing through the village, buying another weapon, a set of armor. and eventually killing a 'boss'
// I've been stuck for days and I know I can figure it out but I don't feel confident enough to create a method or class to do the work for this.
// This project was supposed to be simple but I can't grasp it.
