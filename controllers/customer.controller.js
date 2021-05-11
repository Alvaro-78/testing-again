const {Customer} = require('../models');
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const secretWord = process.env.JWT_SECRET || 'customer'

class CustomerController {

    // Get all Customers

    async indexAll(customer) {
      return Customer.findAll(customer);
    }

    // Create Customer
    async createCustomer(customer) {
		console.log("dentro de createCustomer",customer)
        let customerEmail = customer.email
        let customerExist = await Customer.findOne({where:{email:customerEmail}})
        if(customerExist) {
        return;
        };
        customer.password = await bcrypt.hash(customer.password, 5)
        return Customer.create(customer)
    };
  
	
  
    // CREATE LOGIN
  
    async login(email,password) {
  
        const customer =  await Customer.findOne({where:{email}});
      
        if(!customer){
            throw new Error('User does not exist')
        };

        if(!await bcrypt.compare( password, customer.password )) {
            throw new Error('Wrong password')
        };

        const payload = {
            customerId: customer.id,
            tokenCreationDate: new Date,
        };

        let token = jwt.sign(payload, secretWord);
        return {
            token,
            customer
        }
    };   
  
    // LOGOUT 
  
    async logOut(id) {
      return Customer.findByPk(id);
    };
  
    // Update Customer
    
    async updateCustomer(customer, id) {
      return Customer.update(customer,{where:{id}})
    };
  
    // Delete Customer

    async deleteCustomer(id) {
      return Customer.destroy({where:{id}})
    };

    // Guardar productos en el Carrito

    
};
  
  
let customerController = new CustomerController();

module.exports = customerController;