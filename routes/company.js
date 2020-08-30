const router = require ('express').Router();
const Company = require('../model/company.model');
const verify = require('../routes/verifytoken')

router.get('/info',(req,res)=>
{
  Company.find()
    .then(info => res.json(info))
    .catch(err => res.status(400).json('Error: ' + err));
  
})

router.route('/add').post((req, res) => {
    
    const name = req.body.name;
    const info = req.body.info;
    const finance = req.body.finance;
    const production = req.body.production;
    const rnd = req.body.rnd;
    const sales = req.body.sales;
   
  
    const newCompany = new Company({
      name,
      info,
      finance,
      production,
      rnd,
      sales,
    });
  
    newCompany.save()
    .then(() => res.json('Company data added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
