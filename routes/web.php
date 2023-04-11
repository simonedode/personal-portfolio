<?php

use App\Http\Controllers\HomeController;
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

Route::get('/', HomeController::class)
    ->name('home');

Route::post('/', [HomeController::class, 'sendEmail'])->name('send-email');

Route::post('/lang/{locale}', static function ($locale) {
    session()->put('locale', $locale);
    app()->setLocale($locale);
    return redirect()->route('home');
})->whereIn('locale', ['en', 'it']);
