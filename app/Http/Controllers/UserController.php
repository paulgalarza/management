<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Input;

class UserController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(Users::with('role')->get());
        }
        return json_encode(Users::find($id));
    }

    public function create() {
        $user = new Users();
        $user->username = Input::get('username');
        $user->email = Input::get('email');
        $user->userRoles_id = Input::get('userRoles_id');
        $user->password = bcrypt(Input::get('password'));
        $user->project_id = null;
        $user->save();
        return json_encode($user);
    }

     public function update() {
      $id = Input::get('id');
      $user = Users::find($id);
      $user->project_id = Input::get('project_id');
      $user->save();
      return json_encode($user);
  }

    public function destroy() {
        $id = Input::get('id');
        $user = Users::find($id);
        if(is_object($user)){
            $user->delete();    
        }
        return json_encode($id);
    }

}