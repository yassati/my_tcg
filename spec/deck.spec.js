import Deck from '../src/models/deck';

describe("shuffle", function() {

    it("deck shffle !", function() {
        const config = { cards : [1,2,3,4] };
        let deck = new Deck(config);

       expect(deck.shuffle()).toBe(true);
    });
    
    it("deck not empty !", function() {
        const config2 = { cards : [] }
        let deck = new Deck(config2);

        expect(deck.shuffle()).toBe(false);
    });
    
    it("deck is not bolean !", function() {
        const config3 = { cards : [true,true,true] }
        let deck = new Deck(config3);
        expect(deck.shuffle()).toBe(true);
    });
    it("deck is not null !", function() {
        const config3 = { cards : [null,null,null] }
        let deck = new Deck(config3);
        expect(deck.shuffle()).toBe(true);
    });
    it("deck is not string !", function() {
        const config3 = { cards : ["lol","mdr","hihih"] }
        let deck = new Deck(config3);
        expect(deck.shuffle()).toBe(false);
    });
    it("deck is not undefined !", function() {
        const config3 = { cards : [undefined,undefined,undefined] }
        let deck = new Deck(config3);
        expect(deck.shuffle()).toBe(false);
    });

  });

describe("draw",function(){

    it("draw is OK !",function(){
        const config = { cards: [1,2,3] }
        const result = 1;
        let deck = new Deck(config);

        expect(deck.draw(config)).toEqual(result);
    });
});

describe("getCardsCount",function(){

    it("getCardsCount is OK !",function(){
        const config = { cards: [1,2,3] }
        const result = 3;
        let deck = new Deck(config);

        expect(deck.getCardsCount(config)).toEqual(result);
    });
});