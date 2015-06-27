<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('users');
		Schema::create('users', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->nullable()->default('');
			$table->string('username')->unique()->default('');
			$table->string('email')->unique()->default('');
			$table->string('password', 60)->default('');
			$table->string('address')->default('');
			$table->string('phone')->default('');
			$table->boolean('status')->default(true);
			$table->integer('userRoles_id')->unsigned()->nullable()->default(0);
			$table->integer('project_id')->unsigned()->nullable()->default(0);
			$table->foreign('userRoles_id')
      			->references('id')->on('user_roles')
      			->onDelete('cascade');
      		$table->foreign('project_id')
      			->references('id')->on('projects')
      			->onDelete('cascade');
			$table->rememberToken();
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
		Schema::drop('users');
	}

}
