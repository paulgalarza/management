<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ProjectTypes;
use Input;

class ProjectTypeController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(ProjectTypes::all());
        }
        return json_encode(ProjectTypes::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new ProjectTypes));
    }

    public function update() {
        $id = Input::get('id');
        $projectType = ProjectTypes::find($id);
        return json_encode(parent::baseUpdate($projectType));
    }

    public function destroy() {
        $id = Input::get('id');
        $projectType = ProjectTypes::find($id);
        if(is_object($projectType)){
            $projectType->delete();    
        }
        return json_encode($id);
    }

}