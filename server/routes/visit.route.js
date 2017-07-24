const router = require('express').Router();
const db = require('../models');

router.get('/', function(request, response){
  //return all visits in the database
  var promise = db.Visit.findAll()

  promise.then(function(visits){
    response.json(visits);
  });
});

router.get('/:id', function(request,response){
  db.Visit.findById(request.params.id).then(function(visit){
    if (visit === null){
      response.sendStatus(404);
    } else{
      response.json(visit);
    }
  });
});

router.post('/', function(request, response){
  const visit = db.Visit.build(request.body);

  visit.save().then(function(newvisit){

    response.status(201).send(newvisit);
  });
});


router.put('/:id', function(request, response){

  db.Visit.findById(request.params.id).then(function(visit){
   visit.update(request.body).then(function(visit){
      if (visit === null){
      response.sendStatus(404);
    } else{
      response.sendStatus(204);
    }
   });
  });


});

router.delete('/:id', function(request,response){
  db.Visit.findById(request.params.id).then(function(visit){
    visit.destroy().then(function(){
      response.json(visit);
    });
  });

});


module.exports = router;
