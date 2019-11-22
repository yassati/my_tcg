import Hand from '../src/models/hand';

const config = { cards : [1,2,3,4],limit: 7 };
describe("addCard", function() {

    it("addCard is OK !", function() {
        const newCard = 5;
        let hand = new Hand(config);

       expect(hand.addCard(newCard)).toBe(true);
    });

    it("card is not null !", function() {
      const newCard = null;
      let hand = new Hand(config);

     expect(hand.addCard(newCard)).toBe(false);
  });

  it("card is not undefined !", function() {
    const newCard = undefined;
    let hand = new Hand(config);

   expect(hand.addCard(newCard)).toBe(false);
});
    
  });

  describe("removeCard", function() {

    it("removeCard is OK !", function() {
        const result = 4;
        let hand = new Hand(config);

       expect(hand.removeCard(3)).toEqual(result);
    });
    it("deck is not empty !", function() {
      const config2 = { cards : [] }
      let hand = new Hand(config2);

      expect(hand.removeCard()).toBe(false);
  });
  it("position is not float !", function() {
      let hand = new Hand(config);

      expect(hand.removeCard(3.1)).toBe(false);
  });
  it("position is not null !", function() {
    const config3 = { cards : [null,null,null] }
    let hand = new Hand(config3);
    expect(hand.removeCard()).toBe(false);
});
  it("position is not string !", function() {
    const config3 = { cards : ["lol","mdr","hihih"] }
    let hand = new Hand(config3);
    expect(hand.removeCard()).toBe(false);
});
it("position is not undefined !", function() {
    const config3 = { cards : [undefined,undefined,undefined] }
    let hand = new Hand(config3);
    expect(hand.removeCard()).toBe(false);
});
    
  });

  describe("getAllCards", function() {

    it("getAllCards is OK !", function() {
        let hand = new Hand(config);

       expect(hand.getAllCards()).not.toBe(false);
    });
    it("getAllCards 2 is OK !", function() {
      let hand = new Hand(config);

     expect(hand.getAllCards()).toEqual(jasmine.arrayContaining([2, 3, 1]));
  });
  });

  describe("getCardsCount",function(){

    it("getCardsCount is OK !",function(){
        const config = { cards: [1,2,3] }
        const result = 3;
        let hand = new Hand(config);

        expect(hand.getCardsCount(config)).toEqual(result);
    });
});
