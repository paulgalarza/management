<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\UserRoles;
use Input;

class UserRoleController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(UserRoles::all());
        }
        return json_encode(UserRoles::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new UserRoles));
    }

    public function update($id) {
        $id = Input::get('id');
        $userRole = UserRoles::find($id);
        return json_encode(parent::baseUpdate($userRole));
    }

    public function destroy($id) {
        $userRole = UserRoles::find($id);
        $userRole->delete();
        return json_encode($id);
    }

}