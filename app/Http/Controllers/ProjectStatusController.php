<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ProjectStatus;
use Input;

class ProjectStatusController extends BaseController {

    public function load() {
        return json_encode(ProjectStatus::all());
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