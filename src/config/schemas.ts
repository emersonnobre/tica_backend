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
 */