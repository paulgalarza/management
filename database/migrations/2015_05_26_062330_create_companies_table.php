<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('companies');
		Schema::create('companies', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->string('address')->nullable();
			$table->string('phone')->nullable();
			$table->string('RFC')->nullable();
			$table->boolean('status')->default(true);
			$table->string('manager')->nullable();
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
		Schema::drop('companies');
	}

}
