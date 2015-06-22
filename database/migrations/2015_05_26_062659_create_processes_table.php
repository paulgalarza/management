<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcessesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('processes');
		Schema::create('processes', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->dateTime('start')->nullable();
			$table->dateTime('end')->nullable();
			$table->integer('activity_id')->unsigned()->nullable();
			$table->foreign('activity_id')
      			->references('id')->on('activities')
      			->onDelete('cascade');
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
		Schema::drop('processes');
	}

}
