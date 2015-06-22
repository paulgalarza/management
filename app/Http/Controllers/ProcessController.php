<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Processes;
use Input;

class ProcessController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(Processes::all());
        }
        return json_encode(Processes::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new Processes));
    }

    public function update($id) {
        $process = Processes::find($id);
        return json_encode(parent::baseUpdate($process));
    }

    public function destroy($id) {
        $process = Processes::find($id);
        $process->delete();
        return json_encode($id);
    }

}