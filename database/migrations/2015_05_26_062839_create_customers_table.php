<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('customers');
		Schema::create('customers', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->string('phone')->nullable();
			$table->string('email')->nullable();
			$table->boolean('status')->nullable();
			$table->integer('company_id')->unsigned()->nullable();
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
		Schema::drop('customers');
	}

}
