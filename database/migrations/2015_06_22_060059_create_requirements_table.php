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
			$table->string('folio')->nullable();
			$table->integer('project_id')->nullable()->unsigned();
			$table->integer('company_id')->nullable()->unsigned();
			$table->string('file')->nullable();
			$table->integer('status')->nullable();
			$table->foreign('project_id')
      			->references('id')->on('projects')
      			->onDelete('cascade');
      		$table->foreign('company_id')
      			->references('id')->on('companies')
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
