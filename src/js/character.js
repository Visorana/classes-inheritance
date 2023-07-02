export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Invalid name. Name must be a string with length between 2 and 10 characters.');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error(`Invalid type. Type must be one of: ${validTypes}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
