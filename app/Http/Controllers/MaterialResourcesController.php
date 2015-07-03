<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\MaterialResources;
use Input;

class MaterialResourcesController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(MaterialResources::all());
        }
        return json_encode(MaterialResources::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new MaterialResources));
    }

    public function update($id) {
        $materialResource = MaterialResources::find($id);
        return json_encode(parent::baseUpdate($materialResource));
    }

    public function destroy($id) {
        $materialResource = MaterialResources::find($id);
        $materialResource->delete();
        return json_encode($id);
    }

}