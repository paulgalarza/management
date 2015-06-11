<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {
	public function run()
	{
		Model::unguard();
		DB::statement('SET FOREIGN_KEY_CHECKS=0;');
		$this->call('UserRoles');
		$this->call('UserTableSeeder');
		DB::statement('SET FOREIGN_KEY_CHECKS=1;');
	}
}	

class UserRoles extends Seeder {
	public function run(){
		DB::table('user_roles')->truncate();
		DB::table('user_roles')->insert([
            'name' 		=> 'admin'
        ]);
	}
}

class UserTableSeeder extends Seeder {
	public function run(){
		DB::table('users')->truncate();
		DB::table('users')->insert([
            'name' 		=> 'admin',
            'username'	=> 'admin',
            'email' 	=> 'paulgalarza@gmail.com',
            'password' 	=> bcrypt('admin'),
            'address'	=> '',
            'phone'		=> '',
            'status'	=> true,
            'userRoles_id'=> 1
        ]);
	}
}

