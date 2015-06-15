<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Companies;
use Input;

class CompanyController extends BaseController {

    public function load() {
        return json_encode(Companies::all());
    }

    public function create() {
        return json_encode(parent::baseCreate(new Companies));
    }

    public function update($id) {
        $company = Companies::find($id);
        return json_encode(parent::baseUpdate($company));
    }

    public function destroy($id) {
        $company = Companies::find($id);
        $company->delete();
        return json_encode($id);
    }

}