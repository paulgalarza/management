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
			$table->string('name');
			$table->string('address')->nullable();
			$table->string('phone')->nullable();
			$table->string('RFC')->nullable();
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
