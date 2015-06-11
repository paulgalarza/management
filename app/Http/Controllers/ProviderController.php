<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Providers;

class ProviderController extends BaseController {
	public function create($Model = null){
		parent::create('Provider');
	}

	public function load($id = 0){
		$items;
		if($id > 0){
			$items = Providers::find($id);
		}
		else{
			$items = Providers::all();	
		}
		return json_encode($items);
	}
}