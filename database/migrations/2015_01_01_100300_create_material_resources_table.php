<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMaterialResourcesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('material_resources');
		Schema::create('material_resources', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->default('');
			$table->integer('provider_id')->unsigned()->nullable()->default(0);
			$table->foreign('provider_id')->references('id')->on('providers')
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
		Schema::drop('material_resources');
	}

}
