<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Providers;
use Input;

class ProviderController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(Providers::all());
        }
        return json_encode(Providers::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new Providers));
    }

    public function update($id) {
        $provider = Providers::find($id);
        return json_encode(parent::baseUpdate($provider));
    }

    public function destroy($id) {
        $provider = Providers::find($id);
        $provider->delete();
        return json_encode($id);
    }

}