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
			$table->string('name')->default('');
			$table->dateTime('start')->nullable()->default(date("Y-m-d H:i:s"));
			$table->dateTime('endProcess')->nullable()->default(date("Y-m-d H:i:s"));
			$table->integer('project_id')->unsigned()->nullable()->default(0);
			$table->integer('requirement_id')->unsigned()->nullable()->default(0);
			$table->foreign('project_id')
      			->references('id')->on('projects')
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
