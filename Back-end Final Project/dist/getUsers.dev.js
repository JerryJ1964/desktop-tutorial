"use strict";

//export { }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@prisma/client");

var _NotFoundError = _interopRequireDefault(require("/src/middleware/NotFoundError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUser = function getUser(usersId) {
  var prisma, users;
  return regeneratorRuntime.async(function getUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          prisma = new _client.PrismaClient();
          _context.next = 3;
          return regeneratorRuntime.awrap(prisma.users.findUnique({
            where: {
              id: usersId
            },
            include: {
              users: true
            }
          }));

        case 3:
          user = _context.sent;

          if (users) {
            _context.next = 6;
            break;
          }

          throw new _NotFoundError["default"]('User', userId);

        case 6:
          return _context.abrupt("return", user);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = getUser;
exports["default"] = _default;