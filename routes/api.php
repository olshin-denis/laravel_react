<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\WallController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::get('/user', function (Request $request)
{
    return
        $request->user();
})
    ->middleware('auth:sanctum')
;

//Route::get('/users', function(){
//    return \Illuminate\Support\Facades\Auth::user() ?? "adasd";
//})
//    ->middleware('auth:sanctum')
//;

//Route::get('/', [WallController::class, 'home']);

Route::get('/walls', [WallController::class, 'walls']);
Route::post('/register', [AuthController::class, 'postRegister']);
Route::post('/login', [AuthController::class, 'postLogin'])
    ->middleware('guest')
;
Route::get('/logout', [AuthController::class, 'postLogout'])
    ->middleware('auth')
;
Route::get('/{user:id}', [WallController::class, 'cabinet']);
Route::get('/wall/{wall:id}', [WallController::class, 'wall']);
Route::post('/wall/{wall:id}/post', [WallController::class, 'postWall'])->middleware('can:update,post');
//Route::post('/login', [AuthController::class, 'postLogout'])->name('post.logout');
Route::post('/post/{user:name}/post', [PostController::class, 'postPost'])->middleware('auth');
Route::get('/wall/post/{post:id}', [PostController::class, 'postGetRedaction'])->middleware('can:update,post');
Route::post('/wall/post/{post:id}', [PostController::class, 'postRedaction'])->middleware('can:update,post');
Route::delete('/wall/delete/{post:id}', [PostController::class, 'postDeletePost']);

//Route::view('/{path?}', 'home')->where('path', '([A-z\d\-\/_.]+)?');


