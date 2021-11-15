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

Route.get('/get', 'UserController.get');

Route.get('/get2', 'UserController.get2');

Route.get('/get/:id', 'UserController.findById');

Route.post('/create', 'UserController.create');

Route.put('/update/:id', 'UserController.update');

Route.delete('/delete/:id', 'UserController.delete');

Route.get('/debts', 'MovimentoController.get');

Route.get('/debts2', 'MovimentoController.get');

Route.get('/debts/:id', 'MovimentoController.findById');

Route.post('/debtsExec', 'MovimentoController.create');

Route.put('/debtsUpdate/:id', 'MovimentoController.update');

Route.delete('/debtsDelete/:id', 'MovimentoController.delete');

Route.get('/csv', 'MovimentoController.csv');

Route.get('/user/salario', 'UserController.getSal');

Route.get('/soma', 'MovimentoController.getSoma');
