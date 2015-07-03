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
			$table->string('name')->default('');
			$table->string('address')->nullable()->default('');
			$table->string('phone')->nullable()->default('');
			$table->string('RFC')->nullable()->default('');
			$table->boolean('status')->default(true);
			$table->string('manager')->nullable()->default('');
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
