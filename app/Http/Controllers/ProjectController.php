<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Input;

class ProjectController extends BaseController {

    public function load() {
        return json_encode(Projects::all());
    }

    public function create() {
        return json_encode(parent::baseCreate(new Projects));
    }

    public function update($id) {
        $project = Projects::find($id);
        return json_encode(parent::baseUpdate($project));
    }

    public function destroy($id) {
        $project = Projects::find($id);
        $project->delete();
        return json_encode($id);
    }

}