// prisma.config.js

const path = require("node:path");

module.exports = {
  earlyAccess: true,
  schema: path.join("prisma", "schema.prisma"),
};