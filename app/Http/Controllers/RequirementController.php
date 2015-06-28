<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Requirement;
use Input;
use App;

class RequirementController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(Requirement::with('project', 'requirementStatus')->get());
        }
        return json_encode(Requirement::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new Requirement));
    }

    public function update() {
        $id = Input::get('id');
        $requirement = Requirement::find($id);
        return json_encode(parent::baseUpdate($requirement));
    }

    public function destroy() {
        $id = Input::get('id');
        $requirement = Requirement::find($id);
        if(is_object($requirement)){
            $requirement->delete();    
        }
        return json_encode($id);
    }

    public function printPdf(){
        $pdf = App::make('dompdf.wrapper');
        $pdf->loadHTML('<h1>Test</h1>');
        return $pdf->stream();
    }

}