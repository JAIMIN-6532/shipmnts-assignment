import TransactionRepository from "../repository/transaction.repository.js";

export default class TransactionController {
  constructor() {
    this.transactionRepository = new TransactionRepository();
  }

  async createTransactionForProducts(req, res, next) {
    try {
      const created = createTransactionForProducts(req.body);
      if (!created) {
        return res.status(400).json({
          message: "transaction not created",
          success: false,
        });
      }

      return res.status(201).json({
        message: "transaction created success",
        success: true,
        data: created,
      });
    } catch (err) {
      return next(err);
    }
  }
}
