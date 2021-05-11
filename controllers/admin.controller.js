const {Admin, Product} = require('../models');
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const secretWord = process.env.JWT_SECRET || 'admin'

class AdminController {

    async createAdmin(admin) {

        console.log("crea un admin mamón")
        let adminEmail = admin.email
        let adminExist = await Admin.findOne({where:{email:adminEmail}})
        if(adminExist) {
        return;
        };
        admin.password = await bcrypt.hash(admin.password, 5)
        return Admin.create(admin)
    };

    async login(email,password) {
  
        const admin =  await Admin.findOne({where:{email}});
      
        if(!admin){
            throw new Error('Admin does not exist')
        };

        if(!await bcrypt.compare( password, admin.password )) {
            throw new Error('Wrong password')
        };

        const payload = {
            adminId: admin.id,
            tokenCreationDate: new Date,
        };

        let token = jwt.sign(payload, secretWord);
        return {
            token,
            admin
        }
    };   

    async indexAll(admin) {
        return Admin.findAll(admin);
    }


    // LogOut Admin
    async logOut(id) {
        return Admin.findByPk(id);
    };
    
      // Update Admin
    async updateAdmin(admin, id) {
        return Admin.update(admin,{where:{id}})
    };
    
      // Delete Admin
    async deleteAdmin(id) {
        return Admin.destroy({where:{id}})
    };

    // Admin CRUD with Products
    //Create Products

    async createProduct(product) {
    
        let productName = product.name
    

        // let productExist = await Product.findOne({where:{product:productName}})
        // if(productExist) {
        //     return;
        // }
        return Product.create(product)
    }

    //Get all Customers

    async indexAllProduct() {
        return Product.findAll();
    }

    // Delete Products

    async deleteProduct(id) {
        return Product.destroy({where:{id}})
    };
}

let adminController = new AdminController();

module.exports = adminController;