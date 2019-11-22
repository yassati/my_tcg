"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
    function Deck(config) {
        _classCallCheck(this, Deck);

        this.cards = config.cards;
    }

    _createClass(Deck, [{
        key: "shuffle",
        value: function shuffle() {
            if (this.cards.length == 0 || this.cards.some(isNaN)) {
                return false;
            } else {
                this.cards.sort(function () {
                    return 0.5 - Math.random();
                });
                return true;
            }
        }
    }, {
        key: "draw",
        value: function draw() {
            var firstCard = this.cards.shift();
            return firstCard;
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            var countCard = this.cards.length;
            return countCard;
        }
    }]);

    return Deck;
}();

exports.default = Deck;