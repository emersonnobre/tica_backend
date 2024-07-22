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
 *     ProductShortResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Product id
 *         name:
 *           type: string
 *           description: Product name
 *         stock:
 *           type: number
 *           description: Stock
 *         isFeedstock:
 *           type: boolean
 *           description: if is feedstock or not
 *         categoryId:
 *           type: number
 *           description: Product category
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
 *         createdById:
 *           type: string
 *           description: Employee id
 *           required: true
 *           example: c04b94f0-46d2-11ef-b732-5fe90ce03fc6
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
 *     TransactionResponse:
 *       type: object
 *       properties:
 *         reason:
 *           type: string
 *           description: Transaction reason
 *         id:
 *           type: string
 *           description: Transaction quantity
 *         createdAt:
 *           type: string
 *           description: Created at date
 *         type:
 *           type: number
 *           description: Type of transaction (0 for in and 1 for out)
 *         createdBy:
 *           $ref: '#/components/schemas/EmployeeResponse'
 *           description: Id from employee who's created the transaction
 *         product:
 *           $ref: '#/components/schemas/ProductShortResponse'
 *           description: Product
 *     CreateAddressRequest:
 *       type: object
 *       properties:
 *         street:
 *           required: true
 *           type: string
 *           description: Street and number
 *           example: Tv Egon Maner, 78
 *         neighborhood:
 *           required: true
 *           type: string
 *           description: Neighborhood
 *           example: Piratonaso
 *         cep:
 *           type: string
 *           description: CEP
 *           example: 79008976
 *     CreateCustomerRequest:
 *       type: object
 *       properties:
 *         name:
 *           required: true
 *           type: string
 *           description: Name
 *           example: Emerson Gabriel Rocha Nobre
 *         cpf:
 *           required: true
 *           type: string
 *           description: CPF without mask
 *           example: 06369196177
 *         phone:
 *           type: string
 *           description: Phone without mask and with DDD
 *           example: 67991280181
 *         email:
 *           type: string
 *           description: E-mail
 *           example: emerson@asa.com
 *         socialMedia:
 *           type: string
 *           description: Social media
 *           example: emerson_nobre
 *         birthday:
 *           type: string
 *           description: Birthday date
 *           example: 2003-03-10
 *         wishList:
 *           type: string
 *           description: wishList
 *           example: pratos e copos
 *         createdById:
 *           type: string
 *           description: Employee id
 *           example: exampleid
 *         addresses:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/CreateAddressRequest'
 *           description: Addresses
 *     GetAddressResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Id
 *         street:
 *           type: string
 *           description: Street and number
 *         neighborhood:
 *           type: string
 *           description: Neighborhood
 *         cep:
 *           type: string
 *           description: CEP
 *     GetCustomerResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Id
 *         name:
 *           type: string
 *           description: Name
 *         cpf:
 *           type: string
 *           description: CPF without mask
 *         phone:
 *           type: string
 *           description: Phone without mask and with DDD
 *         email:
 *           type: string
 *           description: E-mail
 *         socialMedia:
 *           type: string
 *           description: Social media
 *         birthday:
 *           type: string
 *           description: Birthday date
 *         wishList:
 *           type: string
 *           description: wishList
 *         createdAt:
 *           type: string
 *           description: Created at date
 *         updatedAt:
 *           type: string
 *           description: Updated at date
 *         createdBy:
 *           $ref: '#/components/schemas/EmployeeResponse'
 *           description: Id from employee who's created the customer
 *         updatedBy:
 *           $ref: '#/components/schemas/EmployeeResponse'
 *           description: Id from employee who's updated the customer
 *         addresses:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/GetAddressResponse'
 *           description: Addresses
 *     GetCustomerShortResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Id
 *         name:
 *           type: string
 *           description: Name
 *         cpf:
 *           type: string
 *           description: CPF
 *         createdAt:
 *           type: string
 *           description: Created date
 *         updatedAt:
 *           type: string
 *           description: Updated date
 *     UpdateAddressRequest:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Id
 *           example: 1
 *         street:
 *           type: string
 *           description: Street and number
 *           example: Tv egn renner, 66
 *         neighborhood:
 *           type: string
 *           description: Neighborhood
 *           example: Jardim Parati
 *         cep:
 *           type: string
 *           description: CEP
 *           example: 79088654
 *     UpdateCustomerRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           required: true
 *           description: Name
 *           example: Emerson Nobre
 *         phone:
 *           type: string
 *           description: Phone without mask and with DDD
 *           example: 06369196177
 *         email:
 *           type: string
 *           description: E-mail
 *           example: emerson@exampl3.com
 *         socialMedia:
 *           type: string
 *           description: Social media
 *           example: user_emerson
 *         birthday:
 *           type: string
 *           description: Birthday date
 *           example: 2003-03-20
 *         wishList:
 *           type: string
 *           description: wishList
 *           example: prato azul, copos...
 *         updatedById:
 *           type: string
 *           description: Employee id
 *           example: 0a512151-46ec-11ef-8b5c-29dfdea92ef1
 *         addresses:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/UpdateAddressRequest'
 *           description: Addresses
 */