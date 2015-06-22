<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ProjectStatus;
use Input;

class ProjectStatusController extends BaseController {

    public function load() {
        $id = Input::get('id');
        if($id == 0){
            return json_encode(ProjectStatus::all());
        }
        return json_encode(ProjectStatus::find($id));
    }

    public function create() {
        return json_encode(parent::baseCreate(new ProjectStatus));
    }

    public function update($id) {
        $projectStatus = ProjectStatus::find($id);
        return json_encode(parent::baseUpdate($projectStatus));
    }

    public function destroy($id) {
        $projectStatus = ProjectStatus::find($id);
        $projectStatus->delete();
        return json_encode($id);
    }

}