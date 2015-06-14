<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\MaterialResources;
use Input;

class MaterialResourcesController extends BaseController {

    public function load() {
        return json_encode(MaterialResources::all());
    }

    public function create() {
        return json_encode(parent::baseCreate(new MaterialResources));
    }

    public function update($id) {
        $provider = MaterialResources::find($id);
        return json_encode(parent::baseUpdate($provider));
    }

    public function destroy($id) {
        $provider = MaterialResources::find($id);
        $provider->delete();
        return json_encode($id);
    }

}