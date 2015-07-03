<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Models\ProjectStatus;

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
			$table->string('name')->default('');
			$table->string('description')->nullable()->default('');
			$table->dateTime('start')->nullable()->default(date("Y-m-d H:i:s"));
			$table->dateTime('end')->nullable()->default(date("Y-m-d H:i:s"));
			$table->decimal('cost', 7, 6)->nullable()->default(0);
			$table->integer('projectStatus_id')->unsigned()->nullable()->default(ProjectStatus::PROSPECTO);
      		$table->integer('customer_id')->unsigned()->nullable()->default(0);
      		$table->integer('project_type')->unsigned()->nullable()->default(0);
      		$table->foreign('customer_id')
      			->references('id')->on('customers')
      			->onDelete('cascade');
      		$table->foreign('project_type')
      			->references('id')->on('project_types')
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
