export default class Deck {
    constructor (config) {
        this.cards = config.cards;
    }
    
    shuffle () {
        if(this.cards.length == 0 || this.cards.some(isNaN)){            
            return false
        }
        else{
            this.cards.sort(function() { return 0.5 - Math.random() });
            return true;
        }
    }

    draw () {
        const firstCard = this.cards.shift();
        return firstCard;
    }

    getCardsCount () {
        const countCard = this.cards.length;
        return countCard;
    }
}