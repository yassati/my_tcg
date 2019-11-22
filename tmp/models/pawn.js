"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = require("../eventManager");

var _eventManager2 = _interopRequireDefault(_eventManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pawn = function (_EventManager) {
    _inherits(Pawn, _EventManager);

    function Pawn(life, strength, def) {
        _classCallCheck(this, Pawn);

        var _this = _possibleConstructorReturn(this, (Pawn.__proto__ || Object.getPrototypeOf(Pawn)).call(this));
        // if (new.target === Pawn) {
        //     throw new TypeError("Cannot construct Abstract instances directly");
        //   }


        _this.life = life;
        _this.strength = strength;
        _this.def = def;
        // this.getLife(life);
        // this.getStrength(strength);
        // this.getDef(def);
        return _this;
    }

    _createClass(Pawn, [{
        key: "getLife",
        value: function getLife(life) {
            if (typeof life == "undefined" || life == null) {
                return false;
            } else {
                return this.life = life;
            }
        }
    }, {
        key: "getStrength",
        value: function getStrength(strength) {
            if (typeof strength == "undefined" || strength == null) {
                return false;
            } else {
                return this.strength = strength;
            }
        }
    }, {
        key: "getDef",
        value: function getDef(def) {
            if (typeof def == "undefined" || def == null) {
                return false;
            } else {
                return this.def = def;
            }
        }
    }, {
        key: "attack",
        value: function attack(target) {
            target.receiveAttack(this);
        }
    }, {
        key: "receiveAttack",
        value: function receiveAttack(opponent) {
            var strikeBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        }
    }]);

    return Pawn;
}(_eventManager2.default);

exports.default = Pawn;