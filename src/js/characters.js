export class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Invalid name. Name must be a string with length between 2 and 10 characters.');
    }

    const validTypes = ['Archer', 'Swordsman', 'Mage', 'Demon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Invalid type. Type must be one of: Archer, Swordsman, Mage, Demon, Undead, Zombie.');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Archer');
    this.attack = 25;
    this.protection = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.protection = 10;
  }
}

export class Mage extends Character {
  constructor(name) {
    super(name, 'Mage');
    this.attack = 10;
    this.protection = 40;
  }
}

export class Demon extends Character {
  constructor(name) {
    super(name, 'Demon');
    this.attack = 10;
    this.protection = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.protection = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.protection = 10;
  }
}
