<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Input;

class ActivityController extends BaseController {

    public function load() {
        return json_encode(Activity::all());
    }

    public function create() {
        return json_encode(parent::baseCreate(new Activity));
    }

    public function update($id) {
        $activity = Activity::find($id);
        return json_encode(parent::baseUpdate($activity));
    }

    public function destroy($id) {
        $activity = Activity::find($id);
        $activity->delete();
        return json_encode($id);
    }

}