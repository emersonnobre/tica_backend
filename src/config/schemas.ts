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
 *           type: number
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
 *           type: number
 *           description: Id from employee who's updated the product
 *         active:
 *           type: boolean
 *           description: if the product is active or not
 */