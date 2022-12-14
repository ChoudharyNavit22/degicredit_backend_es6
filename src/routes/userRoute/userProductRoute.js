import UniversalFunctions from "../../utils/universalFunctions";
import Joi from "joi";
import Controller from "../../controllers";
import Config from '../../config';

const getProducts = {
  method: "GET",
  path: "/api/user/products",
  options: {
    description: "get user products",
    auth: "UserAuth",
    tags: ["api", "user"],
    handler: (request) => {
      const userData = (request.auth && request.auth.credentials && request.auth.credentials.userData) || null;
      return new Promise((resolve, reject) => {
        Controller.UserProductController.getProducts(userData, request.query, (error, success) => {
          if (error) {
            reject(UniversalFunctions.sendError(error));
          } else {
            resolve(
              UniversalFunctions.sendSuccess(
                Config.APP_CONSTANTS.STATUS_MSG.SUCCESS
                  .DEFAULT,
                success
              )
            );
          }
        });
      });
    },
    validate: {
      query: {
        skip: Joi.number().required(),
        limit: Joi.number().required(),
      },
      failAction: UniversalFunctions.failActionFunction
    },
    plugins: {
      "hapi-swagger": {
        security: [{ 'user': {} }],
        responseMessages:
          Config.APP_CONSTANTS.swaggerDefaultResponseMessages
      }
    }
  }
};

const createProducts = {
  method: "POST",
  path: "/api/user/products",
  options: {
    description: "create user products",
    auth: "UserAuth",
    tags: ["api", "user"],
    handler: (request) => {
      const userData = (request.auth && request.auth.credentials && request.auth.credentials.userData) || null;
      const payloadData = request.payload;
      return new Promise((resolve, reject) => {
        Controller.UserProductController.createProducts(userData, payloadData, (error, success) => {
          if (error) {
            reject(UniversalFunctions.sendError(error));
          } else {
            resolve(
              UniversalFunctions.sendSuccess(
                Config.APP_CONSTANTS.STATUS_MSG.SUCCESS
                  .DEFAULT,
                success
              )
            );
          }
        });
      });
    },
    validate: {
      payload: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        type: Joi.string().required(),
        sellValue: Joi.number().required(),
        originalValue: Joi.number().required(),
        expiryDate: Joi.date().required(),
      }).label("User: Create Products"),
      failAction: UniversalFunctions.failActionFunction
    },
    plugins: {
      "hapi-swagger": {
        security: [{ 'user': {} }],
        responseMessages:
          Config.APP_CONSTANTS.swaggerDefaultResponseMessages
      }
    }
  }
};

const getProductTypes = {
  method: "GET",
  path: "/api/user/products/types",
  options: {
    description: "get all product types",
    auth: "UserAuth",
    tags: ["api", "user"],
    handler: (request) => {
      const userData = (request.auth && request.auth.credentials && request.auth.credentials.userData) || null;
      return new Promise((resolve, reject) => {
        Controller.UserProductController.getProductTypes(userData, (error, success) => {
          if (error) {
            reject(UniversalFunctions.sendError(error));
          } else {
            resolve(
              UniversalFunctions.sendSuccess(
                Config.APP_CONSTANTS.STATUS_MSG.SUCCESS
                  .DEFAULT,
                success
              )
            );
          }
        });
      });
    },
    validate: {
      failAction: UniversalFunctions.failActionFunction
    },
    plugins: {
      "hapi-swagger": {
        security: [{ 'user': {} }],
        responseMessages:
          Config.APP_CONSTANTS.swaggerDefaultResponseMessages
      }
    }
  }
};

const getMarketProducts = {
  method: "GET",
  path: "/api/user/market",
  options: {
    description: "get Market Products",
    auth: "UserAuth",
    tags: ["api", "user"],
    handler: (request) => {
      const userData = (request.auth && request.auth.credentials && request.auth.credentials.userData) || null;
      return new Promise((resolve, reject) => {
        Controller.UserProductController.getMarketProducts(userData, request.query, (error, success) => {
          if (error) {
            reject(UniversalFunctions.sendError(error));
          } else {
            resolve(
              UniversalFunctions.sendSuccess(
                Config.APP_CONSTANTS.STATUS_MSG.SUCCESS
                  .DEFAULT,
                success
              )
            );
          }
        });
      });
    },
    validate: {
      query: {
        skip: Joi.number().required(),
        limit: Joi.number().required(),
      },
      failAction: UniversalFunctions.failActionFunction
    },
    plugins: {
      "hapi-swagger": {
        security: [{ 'user': {} }],
        responseMessages:
          Config.APP_CONSTANTS.swaggerDefaultResponseMessages
      }
    }
  }
};

const addSellerKyc = {
  method: "PUT",
  path: "/api/user/products/{id}/seller/kyc",
  options: {
    description: "add Seller Kyc",
    auth: "UserAuth",
    tags: ["api", "user"],
    handler: (request) => {
      const userData = (request.auth && request.auth.credentials && request.auth.credentials.userData) || null;
      const payloadData = request.payload;
      payloadData.id = request.params.id;
      return new Promise((resolve, reject) => {
        Controller.UserProductController.addSellerKyc(userData, payloadData, (error, success) => {
          if (error) {
            reject(UniversalFunctions.sendError(error));
          } else {
            resolve(
              UniversalFunctions.sendSuccess(
                Config.APP_CONSTANTS.STATUS_MSG.SUCCESS
                  .DEFAULT,
                success
              )
            );
          }
        });
      });
    },
    validate: {
      params: {
        id: Joi.string().required()
      },
      payload: Joi.object({
        sectionA: Joi.object({
          a1: Joi.string().required(),
          a2: Joi.number().required(),
          a3: Joi.string().required(),
          a4: Joi.string().required(),
          a5: Joi.bool().required(),
          a6: Joi.string().required(),
          a7: Joi.bool().required(),
        }),
        kycDocument: Joi.string().required(),
        kycSignature: Joi.string().required(),
        ibanNumber: Joi.number().required(),
      }).label("User: add Seller Kyc"),
      failAction: UniversalFunctions.failActionFunction
    },
    plugins: {
      "hapi-swagger": {
        security: [{ 'user': {} }],
        responseMessages:
          Config.APP_CONSTANTS.swaggerDefaultResponseMessages
      }
    }
  }
};

const addSellerKycPayment = {
  method: "PUT",
  path: "/api/user/products/{id}/seller/kyc/payment",
  options: {
    description: "add Seller Kyc Payment",
    auth: "UserAuth",
    tags: ["api", "user"],
    handler: (request) => {
      const userData = (request.auth && request.auth.credentials && request.auth.credentials.userData) || null;
      const payloadData = request.payload;
      payloadData.id = request.params.id;
      return new Promise((resolve, reject) => {
        Controller.UserProductController.addSellerKycPayment(userData, payloadData, (error, success) => {
          if (error) {
            reject(UniversalFunctions.sendError(error));
          } else {
            resolve(
              UniversalFunctions.sendSuccess(
                Config.APP_CONSTANTS.STATUS_MSG.SUCCESS
                  .DEFAULT,
                success
              )
            );
          }
        });
      });
    },
    validate: {
      params: {
        id: Joi.string().required()
      },
      payload: Joi.object({
        cardSource: Joi.string().required()
      }).label("User: add Seller Kyc Payment"),
      failAction: UniversalFunctions.failActionFunction
    },
    plugins: {
      "hapi-swagger": {
        security: [{ 'user': {} }],
        responseMessages:
          Config.APP_CONSTANTS.swaggerDefaultResponseMessages
      }
    }
  }
};

const addBuyerToProduct = {
  method: "PUT",
  path: "/api/user/products/{id}/buyer",
  options: {
    description: "add Buyer to product",
    auth: "UserAuth",
    tags: ["api", "user"],
    handler: (request) => {
      const userData = (request.auth && request.auth.credentials && request.auth.credentials.userData) || null;
      return new Promise((resolve, reject) => {
        Controller.UserProductController.addBuyerToProduct(userData, request.params, (error, success) => {
          if (error) {
            reject(UniversalFunctions.sendError(error));
          } else {
            resolve(
              UniversalFunctions.sendSuccess(
                Config.APP_CONSTANTS.STATUS_MSG.SUCCESS
                  .DEFAULT,
                success
              )
            );
          }
        });
      });
    },
    validate: {
      params: {
        id: Joi.string().required()
      },
      failAction: UniversalFunctions.failActionFunction
    },
    plugins: {
      "hapi-swagger": {
        security: [{ 'user': {} }],
        responseMessages:
          Config.APP_CONSTANTS.swaggerDefaultResponseMessages
      }
    }
  }
};

const addBuyerKyc = {
  method: "PUT",
  path: "/api/user/transaction/{id}/buyer/kyc",
  options: {
    description: "add Buyer Kyc",
    auth: "UserAuth",
    tags: ["api", "user"],
    handler: (request) => {
      const userData = (request.auth && request.auth.credentials && request.auth.credentials.userData) || null;
      const payloadData = request.payload;
      payloadData.id = request.params.id;
      return new Promise((resolve, reject) => {
        Controller.UserProductController.addBuyerKyc(userData, payloadData, (error, success) => {
          if (error) {
            reject(UniversalFunctions.sendError(error));
          } else {
            resolve(
              UniversalFunctions.sendSuccess(
                Config.APP_CONSTANTS.STATUS_MSG.SUCCESS
                  .DEFAULT,
                success
              )
            );
          }
        });
      });
    },
    validate: {
      params: {
        id: Joi.string().required()
      },
      payload: Joi.object({
        sectionA: Joi.object({
          a1: Joi.string().required(),
          a2: Joi.number().required(),
          a3: Joi.string().required(),
          a4: Joi.string().required(),
          a5: Joi.bool().required(),
          a6: Joi.string().required(),
          a7: Joi.bool().required(),
        }),
        kycDocument: Joi.string().required(),
        kycSignature: Joi.string().required(),
        cassetteNumber: Joi.number().required(),
      }).label("User: add Buyer Kyc"),
      failAction: UniversalFunctions.failActionFunction
    },
    plugins: {
      "hapi-swagger": {
        security: [{ 'user': {} }],
        responseMessages:
          Config.APP_CONSTANTS.swaggerDefaultResponseMessages
      }
    }
  }
};

const addBuyerKycPayment = {
  method: "PUT",
  path: "/api/user/transaction/{id}/buyer/kyc/payment",
  options: {
    description: "add Buyer Kyc Payment",
    auth: "UserAuth",
    tags: ["api", "user"],
    handler: (request) => {
      const userData = (request.auth && request.auth.credentials && request.auth.credentials.userData) || null;
      const payloadData = request.payload;
      payloadData.id = request.params.id;
      return new Promise((resolve, reject) => {
        Controller.UserProductController.addBuyerKycPayment(userData, payloadData, (error, success) => {
          if (error) {
            reject(UniversalFunctions.sendError(error));
          } else {
            resolve(
              UniversalFunctions.sendSuccess(
                Config.APP_CONSTANTS.STATUS_MSG.SUCCESS
                  .DEFAULT,
                success
              )
            );
          }
        });
      });
    },
    validate: {
      params: {
        id: Joi.string().required()
      },
      payload: Joi.object({
        cardSource: Joi.string().required()
      }).label("User: add Buyer Kyc Payment"),
      failAction: UniversalFunctions.failActionFunction
    },
    plugins: {
      "hapi-swagger": {
        security: [{ 'user': {} }],
        responseMessages:
          Config.APP_CONSTANTS.swaggerDefaultResponseMessages
      }
    }
  }
};


export default [
  createProducts,
  getProductTypes,
  getProducts,
  getMarketProducts,
  addSellerKyc,
  addSellerKycPayment,
  addBuyerToProduct,
  addBuyerKyc,
  addBuyerKycPayment
];
