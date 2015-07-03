<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Processes extends Model {

	public function activities(){
		return $this->hasMany('App\Models\Activities', 'process_id');
	}

}
