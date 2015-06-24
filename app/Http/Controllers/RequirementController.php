<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Requirement;
use Input;

class RequirementController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(Requirement::all());
        }
        return json_encode(Requirement::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new Requirement));
    }

    public function update() {
        $id = Input::get('id');
        $customer = Requirement::find($id);
        return json_encode(parent::baseUpdate($customer));
    }

    public function destroy($id) {
        $customer = Requirement::find($id);
        $customer->delete();
        return json_encode($id);
    }

}