<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model {

	public function hasAttribute($atribute){
		return property_exists($this, $atribute);
	}

}
