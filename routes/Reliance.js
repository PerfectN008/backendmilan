const router = require ('express').Router();
const {Finance,Production,Resdev,Sales} = require('../model/Reliance.model');


router.route('/getfinance').get((req, res) => {
  Finance.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getproduction').get((req, res) => {
  Production.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getresdev').get((req, res) => {
  Resdev.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getsales').get((req, res) => {
  Sales.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/addfinance').post((req, res) => {
   
    const question = req.body.question;
    const option1 = req.body.option1;
    const option2 = req.body.option2;
    const option3 = req.body.option3;
    const option4 = req.body.option4;
    const answer = req.body.answer;


    const newFinance = new Finance({
     question,
     option1,
     option2,
     option3,
     option4,
     answer,
    });
  
    newFinance.save()
    .then(() => res.send('Finance data added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addproduction').post((req, res) => {
   
  const question = req.body.question;
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const option3 = req.body.option3;
  const option4 = req.body.option4;
  const answer = req.body.answer;


  const newProduction = new Production({
   question,
   option1,
   option2,
   option3,
   option4,
   answer,
  });

  newProduction.save()
  .then(() => res.send('Production data added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addresdev').post((req, res) => {
   
  const question = req.body.question;
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const option3 = req.body.option3;
  const option4 = req.body.option4;
  const answer = req.body.answer;


  const newResdev = new Resdev({
   question,
   option1,
   option2,
   option3,
   option4,
   answer,
  });

  newResdev.save()
  .then(() => res.send('Resdev data added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/addsales').post((req, res) => {
   
  const question = req.body.question;
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const option3 = req.body.option3;
  const option4 = req.body.option4;
  const answer = req.body.answer;


  const newSales = new Sales({
   question,
   option1,
   option2,
   option3,
   option4,
   answer,
  });

  newSales.save()
  .then(() => res.send('Sales data added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;