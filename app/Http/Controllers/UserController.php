<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Input;

class UserController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(Users::all());
        }
        return json_encode(Users::find($id));
    }

    public function create() {
        $user = new User();
        $user->name = Input::get('name');
        $user->password = bcrypt(Input::get('password'));
        $user->userRole_id = Input::get('userRole_id');
        Input::get('');
        //return json_encode(parent::baseCreate(new Users));
    }

     public function update() {
        $id = Input::get('id');
        $user = Users::find($id);
        return json_encode(parent::baseUpdate($user));
    }

    public function destroy($id) {
        $user = Users::find($id);
        $user->delete();
        return json_encode($id);
    }

}