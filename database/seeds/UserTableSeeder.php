<?php  namespace Database\seeds;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class UserTableSeeder extends Seeder {
	
	public function run(){
		DB::table('users')->delete();
		DB::table('users')->insert([
            'name' 		=> 'admin',
            'username'	=> 'admin',
            'email' 	=> 'paulgalarza@gmail.com',
            'password' 	=> bcrypt('admin'),
            'address'	=> '',
            'phone'		=> '',
            'status'	=> true
        ]);
	}

}