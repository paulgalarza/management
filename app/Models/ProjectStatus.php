<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectStatus extends Model {

	const PROSPECTO = 1;
	const APROBADO = 2;
	const DESARROLLO = 3;
	const FINALIZADO = 4;
	const CANCELADO = 5;

}
