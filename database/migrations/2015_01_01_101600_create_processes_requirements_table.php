<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcessesRequirementsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('processes_requirements');
		Schema::create('processes_requirements', function(Blueprint $table)
		{
			$table->increments('id');			
			$table->integer('requirement_id')->nullable()->unsigned()->default(0);
			$table->integer('proccess_id')->nullable()->unsigned()->default(0);
			$table->foreign('requirement_id')
      			->references('id')->on('requirements')
      			->onDelete('cascade');
      		$table->foreign('proccess_id')
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
		Schema::drop('processes_requirements');
	}

}
