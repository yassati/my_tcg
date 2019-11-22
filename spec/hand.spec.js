import Hand from '../src/models/hand';

const config = { cards : [1,2,3,4],limit: 7 };
describe("addCard", function() {

    it("addCard is OK !", function() {
        const newCard = 5;
        let hand = new Hand(config);

       expect(hand.addCard(newCard)).toBe(true);
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
    
  });

  describe("getAllCards", function() {

    it("getAllCards is OK !", function() {
        let hand = new Hand(config);

       expect(hand.getAllCards()).not.toBe(false);
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
