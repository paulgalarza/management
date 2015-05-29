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
		Schema::create('projects', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->string('description');
			$table->dateTime('start');
			$table->dateTime('end');
			$table->decimal('cost', 7, 6);
			$table->foreign('projectStatus_id')
      			->references('id')->on('project_status')
      			->onDelete('cascade');
      		$table->foreign('customer_id')
      			->references('id')->on('customers')
      			->onDelete('cascade');
      		$table->foreign('company_id')
      			->references('id')->on('companies')
      			->onDelete('cascade');
      		$table->foreign('materialResource_id')
      			->references('id')->on('material_resources')
      			->onDelete('cascade');
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
