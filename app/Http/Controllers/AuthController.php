<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Providers;

class ProviderController extends BaseController {
	
	public function authenticate(){
		$user = [
			'username' => Request::get('username'),
			'password' => Request::get('password')
		];
    	$response = [
    		'status' => Auth::attempt($user)
    	];
		return json_encode($response);
	}
}