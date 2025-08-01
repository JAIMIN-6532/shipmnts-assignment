﻿# shipmnts-assignment

# Warehouse Management System (WMS) API Design

## 📦 Description
You are part of a logistics tech company building a Warehouse Management System (WMS) to manage day‑to‑day inventory and storage operations across multiple warehouses. In our model, each warehouse’s physical space is structured like a tree—starting from the warehouse itself and branching down into nested storage locations (zones, racks, shelves, bins, etc.).


## ⚙️ Installation

```bash
git clone https://github.com/JAIMIN-6532/shipmnts-assignment.git
cd shipmnts-assignment
npm install

```

#### Run the Code: 
```bash 
 npm start
```

## 📁 Project Folder Structure

<div style="font-size:1.5em; line-height:1.4em;">
  <pre>
your-app-root/
├── app.js
├── server.js
├── src/
│   ├── config/
│   │   └── db.js               # Database config
│   ├── error-handler/
│   │   └── errorHandler.js     # Centralized error handling
│   ├── features/
│   │   ├── warehouse/
│   │   │   ├── model/
│   │   │   │   └── warehouse.model.js
│   │   │   ├── repository/
│   │   │   │   └── warehouse.repository.js
│   │   │   ├── controller/
│   │   │   │   └── warehouse.controller.js
│   │   │   └── routes/
│   │   │       └── warehouse.routes.js
│   │   ├── products/
│   │   │   ├── model/
│   │   │       └── product.model.js
│   │   │       
│   │   └── transaction/
│   │       ├── model/
│   │       │   └── transaction.model.js
│   │       ├── repository/
│   │       │   └── transaction.repository.js
│   │       ├── controller/
│   │       │   └── transaction.controller.js
│   │       └── routes/
│   │           └── transaction.routes.js
└── package.json

  </pre>
</div>


### 🧩 Feature-Based Modules
Each domain feature like `warehouse`, `products`, and `transaction` follows this convention:

- `model/` – Data schema definitions
- `repository/` – Database access logic
- `controller/` – Business logic handlers
- `routes/` – Express route definitions

This modular structure ensures **scalability**, **clean separation of concerns**, and better **maintainability** as your project grows.

## 🚀 API Endpoints

All endpoints are mounted under the `/api` prefix. Below is a summary of each route you’ve created:
## 📡 API Endpoints

| Method | Endpoint                     | Description                                                  | Controller Method                                               | Repository Method                                                 |
|--------|------------------------------|--------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| POST   | `/api/create_location`       | Create a new warehouse/location                              | `warehouseController.createWarehouse(req, res, next)`           | `warehouseRepository.createWarehouse(data)`                     |
| GET    | `/api/warehouse/tree`        | Fetch warehouse “tree” based on `locationCode` query param   | `warehouseController.getWarehouseByLocationCode(req, res, next)`| `warehouseRepository.getWarehouseByLocationCode(locationCode)`  |
| POST   | `/api/transaction/receipt`   | Create a new transaction for one or more products            | `transactionController.createTransactionForProducts(req, res, next)` | `transactionRepository.createTransactionForProducts(data)`       |


### 📋 Example Usage

#### Create Warehouse Location
```http
POST /api/create_location
Content-Type: application/json

{
  "locationCode": "WH-001",
  "parentLocation": null
}

---

