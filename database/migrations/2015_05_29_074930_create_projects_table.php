<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('projects');
		Schema::create('projects', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->string('description')->nullable();
			$table->dateTime('start')->nullable();
			$table->dateTime('end')->nullable();
			$table->decimal('cost', 7, 6)->nullable();
			$table->integer('projectStatus_id')->unsigned()->nullable();
			$table->foreign('projectStatus_id')
      			->references('id')->on('project_statuses')
      			->onDelete('cascade');
      		$table->integer('customer_id')->unsigned()->nullable();
      		$table->foreign('customer_id')
      			->references('id')->on('customers')
      			->onDelete('cascade');
      		$table->integer('company_id')->unsigned()->nullable();
      		$table->foreign('company_id')
      			->references('id')->on('companies')
      			->onDelete('cascade');
      		$table->integer('materialResource_id')->unsigned()->nullable();
      		$table->foreign('materialResource_id')
      			->references('id')->on('material_resources')
      			->onDelete('cascade');
      		$table->integer('process_id')->unsigned()->nullable();
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
		Schema::drop('projects');
	}

}
