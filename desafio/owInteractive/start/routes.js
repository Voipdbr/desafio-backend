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

Route.post('/createUser', 'UserController.create');

Route.put('/updateUser/:id', 'UserController.update');

Route.delete('/deleteUser/:id', 'UserController.delete');

Route.get('/saldoUser', 'UserController.getSal');

Route.post('/createSaldo', 'UserController.createSaldo');

Route.get('/debitos', 'MovimentoController.get');

Route.get('/debitos/:id', 'MovimentoController.findById');

Route.post('/criarDebitos', 'MovimentoController.create');

Route.put('/updateDebitos/:id', 'MovimentoController.update');

Route.delete('/deleteDebitos/:id', 'MovimentoController.delete');

Route.get('/somaDebitos', 'MovimentoController.getSoma');

Route.get('/csv', 'MovimentoController.csv');
