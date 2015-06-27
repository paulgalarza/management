<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProjectStatus;

class DatabaseSeeder extends Seeder {
	public function run()
	{
		Model::unguard();
		DB::statement('SET FOREIGN_KEY_CHECKS=0;');
		$this->call('UserRoles');
		$this->call('UserTableSeeder');
        $this->call('ProjectStatusSeeder');
        $this->call('RequirementsStatus');
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

class ProjectStatusSeeder extends Seeder {
	public function run(){
		DB::table('project_statuses')->truncate();
		DB::table('project_statuses')->insert([
            'id' 		=> ProjectStatus::PROSPECTO,
            'name'		=> 'prospecto'
        ]);
        DB::table('project_statuses')->insert([
            'id' 		=> ProjectStatus::APROBADO,
            'name'		=> 'aprobado'
        ]);
        DB::table('project_statuses')->insert([
            'id' 		=> ProjectStatus::DESARROLLO,
            'name'		=> 'desarrollo'
        ]);
        DB::table('project_statuses')->insert([
            'id' 		=> ProjectStatus::FINALIZADO,
            'name'		=> 'finalizado'
        ]);
        DB::table('project_statuses')->insert([
            'id' 		=> ProjectStatus::CANCELADO,
            'name'		=> 'prospecto'
        ]);
	}
}

class RequirementsStatus extends Seeder {
    public function run(){
        DB::table('Requirements_status')->truncate();
        DB::table('Requirements_status')->insert([
            'id'        => 1,
            'name'      => 'Prospecto'
        ]);
        DB::table('Requirements_status')->insert([
            'id'        => 2,
            'name'      => 'Aceptado'
        ]);
    }
}

