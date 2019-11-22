import Pawn from '../src/models/pawn';

const life = 100;
const lifeUndefined = undefined;
const lifeNull = null;

const strength = 100;
const strengthUndefined = undefined;
const strengthNull = null;

const def = 100;
const defUndefined = undefined;
const defNull = null;

  describe("getLife", function() {

    it("getLife is OK !", function() {
        let pawn = new Pawn(life,strength,def);

       expect(pawn.getLife(life)).not.toBe(false);
    });
    it("life is not undefined !", function() {
      let pawn = new Pawn(life,strength,def);

     expect(pawn.getLife(lifeUndefined)).toBe(false);
    });
    it("life is not null !", function() {
      let pawn = new Pawn(life,strength,def);

     expect(pawn.getLife(lifeNull)).toBe(false);
    });
  });
  
  describe("getStrength", function() {

    it("getStrength is OK !", function() {
        let pawn = new Pawn(life,strength,def);

       expect(pawn.getStrength(strength)).not.toBe(false);
    });
    it("strength is not undefined !", function() {
      let pawn = new Pawn(life,strength,def);

     expect(pawn.getStrength(strengthUndefined)).toBe(false);
    });
    it("strength is not null !", function() {
      let pawn = new Pawn(life,strength,def);

     expect(pawn.getStrength(strengthNull)).toBe(false);
    });
  });

  describe("getDef", function() {

    it("getDef is OK !", function() {
        let pawn = new Pawn(life,strength,def);

       expect(pawn.getDef(def)).not.toBe(false);
    });
    it("def is not undefined !", function() {
      let pawn = new Pawn(life,strength,def);

     expect(pawn.getDef(defUndefined)).toBe(false);
    });
    it("def is not null !", function() {
      let pawn = new Pawn(life,strength,def);

     expect(pawn.getDef(defNull)).toBe(false);
    });
  });