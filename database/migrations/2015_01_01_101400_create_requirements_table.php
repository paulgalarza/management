<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequirementsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('requirements');
		Schema::create('requirements', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('folio')->nullable()->default('');
			$table->string('name')->nullable()->default('');
			$table->integer('project_id')->nullable()->unsigned()->default(0);
			$table->string('file')->nullable()->default('');
			$table->integer('status')->nullable()->default(1);
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
		Schema::drop('requirements');
	}

}
