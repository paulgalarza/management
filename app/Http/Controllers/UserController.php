<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Input;

class UserController extends BaseController {

    public function load() {
        return json_encode(Users::all());
    }

    public function create() {
        return json_encode(parent::baseCreate(new Users));
    }

    public function update($id) {
        $user = Users::find($id);
        return json_encode(parent::baseUpdate($user));
    }

    public function destroy($id) {
        $user = Users::find($id);
        $user->delete();
        return json_encode($id);
    }

}