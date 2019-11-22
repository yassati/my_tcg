import EventManager from '../eventManager';

export default class Pawn extends EventManager{

    constructor(life,strength,def){
        if (new.target === Abstract) {
            throw new TypeError("Cannot construct Abstract instances directly");
          }
        super();
        this.getLife(life);
        this.getStrength(strength);
        this.getDef(def);
    }
    getLife(life){
        return this.life = life;
    }

    getStrength(strength){
        return this.strength = strength;
    }

    getDef(def){
        return this.def = def;
    }
    attack(target){
        target.receiveAttack(this);
    }

    receiveAttack(opponent, strikeBack = false){

    }
}