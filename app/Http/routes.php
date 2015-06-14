<?php

Route::get('providers', 'ProviderController@load');
Route::put('providers/{id}', 'ProviderController@update');
Route::post('providers', 'ProviderController@create');
Route::delete('providers/{id}', 'ProviderController@destroy');

Route::get('materialresources', 'MaterialResourcesController@load');
Route::put('materialresources/{id}', 'MaterialResourcesController@update');
Route::post('materialresources', 'MaterialResourcesController@create');
Route::delete('materialresources/{id}', 'MaterialResourcesController@destroy');

Route::post('login','LoginController@authenticate');
Route::post('logout','LoginController@logout');
Route::get('isLoggedIn','LoginController@isLoggedIn');
