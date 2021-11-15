'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/user', 'UserController.get');

Route.get('/userDec', 'UserController.get2');

Route.get('/user/:id', 'UserController.findById');

Route.post('/user/create', 'UserController.create');

Route.put('/user/update/:id', 'UserController.update');

Route.delete('/user/delete/:id', 'UserController.delete');

Route.get('/user/saldo', 'UserController.getSal');

Route.post('/user/createSaldo', 'UserController.createSaldo');

Route.get('/debitos', 'MovimentoController.get');

Route.get('/debitos/:id', 'MovimentoController.findById');

Route.post('/criarDebitos', 'MovimentoController.create');

Route.put('/updateDebitos/:id', 'MovimentoController.update');

Route.delete('/deleteDebitos/:id', 'MovimentoController.delete');

Route.get('/debitos/somaDebitos', 'MovimentoController.getSoma');

Route.get('/csv', 'MovimentoController.csv');
