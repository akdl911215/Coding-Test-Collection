import swaggereJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export const options = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "Test API",
      version: "1.0.0",
      description: "Test API with express",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["/routes/*.js", "./swagger/*", "./models/*.js"],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
