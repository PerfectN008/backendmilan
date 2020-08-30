const mongoose = require('mongoose');

const companyScheme = new mongoose.Schema({

    name: {
    type:String,
    unique: true,
    trim: true,
    },
    info: {
    type: String,
    unique: true,
    trim: true,
    },
    finance: {
    type: String,
    unique: true,
    trim: true,
    },
    production: {
    type: String,
    unique: true,
    trim: true,
    },
    rnd: {
    type: String,
    unique: true,
    trim: true,
    },
    sales: {
    type: String,
    unique: true,
    trim: true,
    },
    
});


const Company = mongoose.model('CompanyData',companyScheme);

module.exports = Company;









/*const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
   
   
    name: {
    type:String,
    unique: true,
    trim: true,
    },
    info: {
    type: String,
    unique: true,
    trim: true,
    },
    finance: {
    type: String,
    unique: true,
    trim: true,
    },
    production: {
    type: String,
    unique: true,
    trim: true,
    },
    rnd: {
    type: String,
    unique: true,
    trim: true,
    },
    sales: {
    type: String,
    unique: true,
    trim: true,
    },
    


});

const Company = mongoose.model('Company-datas', companySchema );

module.exports = Company;
*/