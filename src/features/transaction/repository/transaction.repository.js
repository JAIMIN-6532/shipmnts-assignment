import TransactionModel from "../model/transaction.model.js";
import ProductModel from "../../products/model/product.model.js";

export default class TransactionRepository {
  async createTransactionForProducts(body) {
    try {
      const products = body.products;
      const addProductsToProductModel = await ProductModel.insertMany(products);
      const createts = await TransactionModel.create(body);
      if (!created) {
        return false;
      }
      return createts;
    } catch (err) {
      next(err);
    }
  }
}
