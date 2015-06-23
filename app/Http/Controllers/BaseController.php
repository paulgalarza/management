<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Companies;
use Input;

class BaseController extends Controller {

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */

    public function baseLoad($Model, $id){
        if($id){
            return $Model::find($id);
        }
        else{
            return $Model::all();
        }
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
            if($this->isValidKey($key) && isset($Model[$key]))
                $Model[$key] = $value; 
        }
        $Model->save();
        return $Model;
    }

    public function destroy($id) {
        $customers = Customer::find($id);
        $cliente->delete();
        
    }

    private function isValidKey($key){
        return $key !== 'updated_at'  && $key !== 'created_at';
    }
}