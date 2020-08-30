//VALIDATION DONT USE THIS FILE
const Joi = require('@hapi/joi');


//REGISTER-VALIDATE
const registervalidate = (data)=>
{
    const schema =Joi.object( {
        
        email :Joi.string().required().email(),
        password :Joi.string().required(),
        company:Joi.string().required(),
    });

    return schema.validate(data)
}


//LOGIN-VALIDATE
const loginvalidate = (data)=>
{
    const schema = Joi.object({
       
        email :Joi.string().min(6).required().email(),
        password :Joi.string().min(6).required()
    });

    return schema.validate(data)
}

module.exports.registervalidate = registervalidate;
module.exports.loginvalidate = loginvalidate;