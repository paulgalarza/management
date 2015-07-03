<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Activities;
use Input;
use Response;

class ActivityController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(Activities::all());
        }
        return json_encode(Activities::find($id));
    }

    public function create() {
        $activity = new Activities();
        $activity->name = Input::get('name');
        $activity->process_id = Input::get('process_id');
        $activity->save();
        return Response::json($activity);
    }

    public function update($id) {
        $activity = Activities::find($id);
        return json_encode(parent::baseUpdate($activity));
    }

     public function destroy() {
        $id = Input::get('id');
        $activity = Activities::find($id);
        if(is_object($activity)){
            $activity->delete();    
        }
        return json_encode($id);
    }

}