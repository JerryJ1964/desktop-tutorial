"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@prisma/client");

var _NotFoundError = _interopRequireDefault(require("./errors/NotFoundError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUserOrders = function getUserOrders(userId) {
  var prisma, userOrders;
  return regeneratorRuntime.async(function getUserOrders$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          prisma = new _client.PrismaClient();
          _context.next = 3;
          return regeneratorRuntime.awrap(prisma.user.findUnique({
            where: {
              id: userId
            },
            include: {
              orders: true
            }
          }));

        case 3:
          userOrders = _context.sent;

          if (userOrders) {
            _context.next = 6;
            break;
          }

          throw new _NotFoundError["default"]('User', userId);

        case 6:
          return _context.abrupt("return", userOrders);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = getUserOrders;
exports["default"] = _default;