<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class BaseController extends Controller {

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function show() {
        return Response::json(
            
        );
    }
    public function create() {
        $customers = new Customer;
        $customers->name = Input::get('name');
        $customers->company_id = Input::get('company_id');
        $customers->phone = Input::get('phone');
        $customers->email = Input::get('email');
        $customers->save();

        
    }

    public function update($id) {
        $customers = Customer::find($id);
        $customers->name = Input::get('name');
        $customers->company_id = Input::get('company_id');
        $clientes->phone = Input::get('phone');
        $clientes->email = Input::get('email');
        $clientes->save();

       
    }

    public function destroy($id) {
        $customers = Customer::find($id);
        $cliente->delete();
        
    }

}