export default class Hand{
    constructor(config) {
        this.cards = config.cards;
        this.limit = config.limit;
    }

    addCard(card){
        if(this.cards.length > 7 || typeof card == "undefined" || card == null){
            return false;
        }
        else{
            this.cards.push(card);
            return true;
        }
    }

    removeCard(position){
        const delatedCard = this.cards[position];
        if(this.cards.length == 0 || !Number.isInteger(position)){            
            return false
        }
        else{
            this.cards.splice(position,1);
            return delatedCard;
        }
    }

    getAllCards(){
        if(this.cards.length <= 7){
        return this.cards;
        }
        else{
            return false
        }
    }

    getCardsCount () {
        const countCard = this.cards.length;
        return countCard;
    }

}