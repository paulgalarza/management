<?php namespace App\Http\Controllers;

use Auth;
use Input;
use App\Models\Users;
use App\Http\Controllers\Controller;

class LoginController extends Controller {

    public function authenticate() {
        $user = [
            'username' => Input::get('username'),
            'password' => Input::get('password')
        ];
        $response = [];
        $response['status'] = Auth::attempt($user,true);
        if($response['status']){
            $response['data'] = Users::where('username',$user['username'])->first();        
        }
        return json_encode($response);
    }

    public function logout(){
        Auth::logout();
        return json_encode(Auth::check());
    }

    public function isLoggedIn(){
        $response = [];
        if(Auth::check()){
            $response['status'] = true;
            $response['data']   = Auth::user();
            return json_encode($response);
        }
        $response['status']     = false;
        return json_encode($response);
    }

}