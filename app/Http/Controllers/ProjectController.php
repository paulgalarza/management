<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Input;

class ProjectController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(Projects::all());
        }
        return json_encode(Projects::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new Projects));
    }

    public function update() {
        $id = Input::get('id');
        $project = Projects::find($id);
        return json_encode(parent::baseUpdate($project));
    }

    public function destroy() {
        $id = Input::get('id');
        $project = Projects::find($id);
        if(is_object($project)){
            $project->delete();    
        }
        return json_encode($id);
    }

}