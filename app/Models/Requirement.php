<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Requirement extends Model {

	public function project(){
		return $this->belongsTo('App\Models\Projects');
	}

	public function requirementStatus(){
		return $this->belongsTo('App\Models\RequirementsStatus');
	}

}
