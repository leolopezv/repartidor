var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Pedido = require('../models').pedido;
const Cliente = require('../models').cliente;

router.get('/findAll/json', function(req, res, next) {  
    Pedido.findAll({  
        attributes: { exclude: ["updatedAt"] },
        include: [{
            model: Cliente,
            as: 'cliente', 
            attributes: { exclude: ["createdAt", "updatedAt"] }
        }]
    })  
    .then(pedidos => {  
        res.json(pedidos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.get('/findAll/view', function(req, res, next) {
    Pedido.findAll({  
      attributes: { exclude: ["updatedAt"] },
      include: [{  
            model: Cliente,
            as: 'cliente', 
            attributes: { exclude: ["createdAt", "updatedAt"] }
      }]  
    }) 
    .then(pedidos => {
      res.render('pedidos', { title: 'Pedidos', arrPedidos: pedidos });
    })
    .catch(error => res.status(400).send(error));
  });

module.exports = router;
