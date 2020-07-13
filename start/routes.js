/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/auth/register', 'UserController.register')
  Route.get('/auth/list', 'UserController.index')

  Route.get('/auth/list/:id', 'UserController.show')
  Route.patch('/auth/update/:id', 'UserController.update')
  Route.delete('/auth/delete/:id', 'UserController.destroy')
})
  .prefix('api')
