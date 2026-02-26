/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
function renderPage(ctx) {
  return ctx.view.render('pages/home')
}
function renderFormstudent(ctx) {
  return ctx.view.render('pages/form_student')
}
router.on('/').render('pages/home')
router.on('/form-student').render('pages/form_student')
