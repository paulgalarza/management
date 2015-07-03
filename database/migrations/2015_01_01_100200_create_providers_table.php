<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProvidersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('providers');
		Schema::create('providers', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->default('');
			$table->string('address')->nullable()->default('');
			$table->string('phone')->nullable()->default('');
			$table->string('RFC')->nullable()->default('');
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
		Schema::drop('providers');
	}

}
