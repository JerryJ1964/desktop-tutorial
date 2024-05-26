"use strict";

export { }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@prisma/client");

var _NotFoundError = _interopRequireDefault(require("../../../errors/NotFoundError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUsers = function getUsers(usersId) {
  var prisma, users;
  return regeneratorRuntime.async(function getUsers$(_context) {
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

          throw new _NotFoundError["default"]('Users', usersId);

        case 6:
          return _context.abrupt("return", users);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = getUsers;
exports["default"] = _default;