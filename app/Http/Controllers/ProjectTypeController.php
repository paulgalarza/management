<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ProjectTypes;
use Input;

class ProjectTypeController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(ProjectTypes::all());
        }
        return json_encode(ProjectTypes::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new ProjectTypes));
    }

    public function update() {
        $id = Input::get('id');
        $customer = ProjectTypes::find($id);
        return json_encode(parent::baseUpdate($customer));
    }

    public function destroy($id) {
        $customer = ProjectTypes::find($id);
        $customer->delete();
        return json_encode($id);
    }

}