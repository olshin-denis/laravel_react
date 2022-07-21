<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\WallController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});
Route::get('/', [WallController::class, 'home']);

//Route::get('/register', [AuthController::class, 'getRegister'])->name('get.register');
//Route::post('/register', [AuthController::class, 'postRegister'])->name('post.register');

//Route::get('/login', [AuthController::class, 'getLogin'])->name('get.login');
//Route::post('/login', [AuthController::class, 'postLogin'])->name('post.login');

//Route::get('/wall/{user:name}', [WallController::class, 'wall'])->name('wall.user');
//Route::get('/walls', [WallController::class, 'walls'])->name('walls');

//Route::get('/wall/{user:name}/post', [PostController::class, 'getPost'])-> name('get.post');
//Route::post('/wall/{user:name}/post', [PostController::class, 'postPost'])-> name('post.post');

//Route::get('/wall/post/{post:id}', [PostController::class, 'getRedaction'])-> name('get.redaction');
//Route::post('/wall/post/{post:id}', [PostController::class, 'postRedaction'])-> name('post.redaction');

//Route::post('/wall/delete/{post:id}', [PostController::class, 'postDeletePost'])-> name('post.deletePost');


//Route::get( '/{?}', function(){
//    return view( 'home' );
//} )->where('', '.*');

//Route::get('/{path?}', [
//    'uses' => [WallController::class, 'home'],
//    'as' => 'react',
//    'where' => ['path' => '.*']
//]);

Route::view('{path}', 'Home')->where('path', '([A-z\d\-\/_.]+)?');
