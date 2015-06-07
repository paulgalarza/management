<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class CustomerController extends Controller {

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function show() {

    }
    public function create() {
        $customers = new Customer;
        $customers->name = Input::get('name');
        $customers->company_id = Input::get('company_id');
        $customers->phone = Input::get('phone');
        $customers->email = Input::get('email');
        $customers->save();

        return Response::json(
            DB::table('customers')
                ->join('companies','customers.company_id','=','companies.id')
                ->select('customers.*','companies.name AS companyName')
                ->get()
        );
    }

    public function update($id) {
        $customers = Customer::find($id);
        $customers->name = Input::get('name');
        $customers->company_id = Input::get('company_id');
        $clientes->phone = Input::get('phone');
        $clientes->email = Input::get('email');
        $clientes->save();

        return Response::json(
            DB::table('customers')
                ->join('companies','customers.company_id','=','companies.id')
                ->select('customers.*','companies.name AS companyName')
                ->get()
        );
    }

    public function destroy($id) {
        $customers = Customer::find($id);
        $cliente->delete();
        return Response::json(
            DB::table('customers')
                ->join('companies','customers.company_id','=','companies.id')
                ->select('customers.*','companies.name AS companyName')
                ->get()
        );
    }

}