/**
 * @swagger
 * components:
 *   schemas:
 *     CreateProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Product name
 *           required: true
 *           example: prato chique
 *         purchasePrice:
 *           type: number
 *           description: Purchase price
 *           required: true
 *           example: 18.99
 *         salePrice:
 *           type: number
 *           description: Sale price
 *           example: 28.99
 *         stock:
 *           type: number
 *           description: Stock
 *           required: true
 *           example: 10
 *         isFeedstock:
 *           type: boolean
 *           description: if is feedstock or not
 *           required: true
 *           example: false
 *         categoryId:
 *           type: number
 *           description: Product category
 *           required: true
 *           example: 1
 *         createdById:
 *           type: string
 *           description: Employee id
 *           required: true
 *           example: c04b94f0-46d2-11ef-b732-5fe90ce03fc6
 *     ProductResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Product id
 *         name:
 *           type: string
 *           description: Product name
 *         purchasePrice:
 *           type: number
 *           description: Purchase price
 *         salePrice:
 *           type: number
 *           description: Sale price
 *         stock:
 *           type: number
 *           description: Stock
 *         barcode:
 *           type: string
 *           description: barcode for sale
 *         createdAt:
 *           type: string
 *           description: Creation date
 *         createdBy:
 *           $ref: '#/components/schemas/EmployeeResponse'
 *           description: Id from employee who's created the product
 *         isFeedstock:
 *           type: boolean
 *           description: if is feedstock or not
 *         categoryId:
 *           type: number
 *           description: Product category
 *         updatedAt:
 *           type: string
 *           description: Update date
 *         updatedBy:
 *           $ref: '#/components/schemas/EmployeeResponse'
 *           description: Id from employee who's updated the product
 *         active:
 *           type: boolean
 *           description: if the product is active or not
 *     UpdateProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Product name
 *           required: true
 *           example: prato chique
 *         purchasePrice:
 *           type: number
 *           description: Purchase price
 *           required: true
 *           example: 18.99
 *         salePrice:
 *           type: number
 *           description: Sale price
 *           example: 28.99
 *         isFeedstock:
 *           type: boolean
 *           description: if is feedstock or not
 *           required: true
 *           example: false
 *         categoryId:
 *           type: number
 *           description: Product category
 *           required: true
 *           example: 1
 *         updatedById:
 *           type: string
 *           description: Id from employee who's updated the product
 *           required: true
 *           example: c04b94f0-46d2-11ef-b732-5fe90ce03fc6
 *     CreateTransaction:
 *       type: object
 *       properties:
 *         reason:
 *           type: string
 *           description: Transaction reason
 *           required: true
 *           example: compra
 *         quantity:
 *           type: number
 *           description: Quantity of products
 *           required: true
 *           example: 4
 *         type:
 *           type: number
 *           description: Type of transaction (0 for in and 1 for out)
 *           example: 1
 *         createdBy:
 *           type: number
 *           description: Id from employee who's created the product
 *           required: true
 *           example: 1
 *     CreateEmployee:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Employee name
 *           required: true
 *           example: Douglas
 *     EmployeeResponse:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Employee name
 *         id:
 *           type: string
 *           description: Employee id
 *         createdAt:
 *           type: string
 *           description: Created at date
 */