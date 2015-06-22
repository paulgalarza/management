<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Customers;
use Input;

class CustomerController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(Customers::all());
        }
        return json_encode(Customers::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new Customers));
    }

    public function update($id) {
        $customer = Customers::find($id);
        return json_encode(parent::baseUpdate($customer));
    }

    public function destroy($id) {
        $customer = Customers::find($id);
        $customer->delete();
        return json_encode($id);
    }

}