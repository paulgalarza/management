<?php

Route::get('providers', 'ProviderController@load');
Route::put('providers/{id}', 'ProviderController@update');
Route::post('providers', 'ProviderController@create');
Route::delete('providers/{id}', 'ProviderController@destroy');

Route::get('materialresources', 'MaterialResourcesController@load');
Route::put('materialresources/{id}', 'MaterialResourcesController@update');
Route::post('materialresources', 'MaterialResourcesController@create');
Route::delete('materialresources/{id}', 'MaterialResourcesController@destroy');

Route::get('activities', 'ActivityController@load');
Route::put('activities/{id}', 'ActivityController@update');
Route::post('activities', 'ActivityController@create');
Route::delete('activities/{id}', 'ActivityController@destroy');

Route::get('companies', 'CompanyController@load');
Route::put('companies', 'CompanyController@update');
Route::post('companies', 'CompanyController@create');
Route::delete('companies/{id}', 'CompanyController@destroy');

Route::get('customers', 'CustomerController@load');
Route::put('customers', 'CustomerController@update');
Route::post('customers', 'CustomerController@create');
Route::delete('customers/{id}', 'CustomerController@destroy');

Route::get('processes', 'ProcessController@load');
Route::put('processes/{id}', 'ProcessController@update');
Route::post('processes', 'ProcessController@create');
Route::delete('processes/{id}', 'ProcessController@destroy');

Route::get('projects', 'ProjectController@load');
Route::put('projects/{id}', 'ProjectController@update');
Route::post('projects', 'ProjectController@create');
Route::delete('projects/{id}', 'ProjectController@destroy');

Route::get('projectstatuses', 'ProjectStatusController@load');
Route::put('projectstatuses/{id}', 'ProjectStatusController@update');
Route::post('projectstatuses', 'ProjectStatusController@create');
Route::delete('projectstatuses/{id}', 'ProjectStatusController@destroy');

Route::get('userroles', 'UserRoleController@load');
Route::put('userroles/{id}', 'UserRoleController@update');
Route::post('userroles', 'UserRoleController@create');
Route::delete('userroles/{id}', 'UserRoleController@destroy');

Route::get('users', 'UserController@load');
Route::put('users', 'UserController@update');
Route::post('users', 'UserController@create');
Route::delete('users/{id}', 'UserController@destroy');

Route::post('login','LoginController@authenticate');
Route::post('logout','LoginController@logout');
Route::get('isLoggedIn','LoginController@isLoggedIn');

Route::get('requirements', 'RequirementController@load');
Route::put('requirements', 'RequirementController@update');
Route::post('requirements', 'RequirementController@create');
Route::delete('requirements', 'RequirementController@destroy');