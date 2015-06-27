<?php

Route::get('providers', 'ProviderController@load');
Route::put('providers', 'ProviderController@update');
Route::post('providers', 'ProviderController@create');
Route::delete('providers', 'ProviderController@destroy');

Route::get('materialresources', 'MaterialResourcesController@load');
Route::put('materialresources', 'MaterialResourcesController@update');
Route::post('materialresources', 'MaterialResourcesController@create');
Route::delete('materialresources', 'MaterialResourcesController@destroy');

Route::get('activities', 'ActivityController@load');
Route::put('activities', 'ActivityController@update');
Route::post('activities', 'ActivityController@create');
Route::delete('activities', 'ActivityController@destroy');

Route::get('companies', 'CompanyController@load');
Route::put('companies', 'CompanyController@update');
Route::post('companies', 'CompanyController@create');
Route::delete('companies', 'CompanyController@destroy');

Route::get('customers', 'CustomerController@load');
Route::put('customers', 'CustomerController@update');
Route::post('customers', 'CustomerController@create');
Route::delete('customers', 'CustomerController@destroy');

Route::get('processes', 'ProcessController@load');
Route::put('processes', 'ProcessController@update');
Route::post('processes', 'ProcessController@create');
Route::delete('processes', 'ProcessController@destroy');

Route::get('projects', 'ProjectController@load');
Route::put('projects', 'ProjectController@update');
Route::post('projects', 'ProjectController@create');
Route::delete('projects', 'ProjectController@destroy');

Route::get('projecttypes', 'ProjectTypeController@load');
Route::put('projecttypes', 'ProjectTypeController@update');
Route::post('projecttypes', 'ProjectTypeController@create');
Route::delete('projecttypes', 'ProjectTypeController@destroy');

Route::get('projectstatuses', 'ProjectStatusController@load');
Route::put('projectstatuses', 'ProjectStatusController@update');
Route::post('projectstatuses', 'ProjectStatusController@create');
Route::delete('projectstatuses', 'ProjectStatusController@destroy');

Route::get('userroles', 'UserRoleController@load');
Route::put('userroles', 'UserRoleController@update');
Route::post('userroles', 'UserRoleController@create');
Route::delete('userroles', 'UserRoleController@destroy');

Route::get('users', 'UserController@load');
Route::put('users', 'UserController@update');
Route::post('users', 'UserController@create');
Route::delete('users', 'UserController@destroy');

Route::post('login','LoginController@authenticate');
Route::post('logout','LoginController@logout');
Route::get('isLoggedIn','LoginController@isLoggedIn');

Route::get('requirements', 'RequirementController@load');
Route::put('requirements', 'RequirementController@update');
Route::post('requirements', 'RequirementController@create');
Route::delete('requirements', 'RequirementController@destroy');
Route::get('requirements/print', 'RequirementController@printPdf');
