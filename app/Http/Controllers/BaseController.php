<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Input;

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
    public function baseCreate($Model) {
        $params = Input::all();
        foreach($params as $key => $value) {
            $Model[$key] = $value;    
        }
        $Model->save();
        return $Model;
    }

    public function baseUpdate($Model) {
        $params = Input::all();
        foreach($params as $key => $value) {
            $Model[$key] = $value;    
        }
        $Model->save();
        return $Model;
    }

    public function destroy($id) {
        $customers = Customer::find($id);
        $cliente->delete();
        
    }

}