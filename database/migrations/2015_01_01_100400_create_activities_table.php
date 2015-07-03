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
			$table->string('description')->default('');
			$table->integer('duration')->unsigned()->nullable()->default(0);
			$table->integer('progress')->unsigned()->nullable()->default(0);
			$table->integer('process_id')->unsigned()->nullable()->default(0);
			$table->foreign('process_id')
      			->references('id')->on('processes')
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
		Schema::drop('activities');
	}

}
