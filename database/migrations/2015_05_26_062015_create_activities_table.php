<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('activities');
		Schema::create('activities', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->default('');
			$table->dateTime('start')->nullable()->default(date("Y-m-d H:i:s"));
			$table->dateTime('end')->nullable()->default(date("Y-m-d H:i:s"));
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('activities');
	}

}
