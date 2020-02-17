<?php

use Illuminate\Http\Request;

// 会員登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');

// ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');

// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/user', fn() => Auth::user())->name('user');

// 写真投稿
Route::post('/photo', 'PhotoController@create')->name('photo.create');
