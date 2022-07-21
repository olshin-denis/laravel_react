<?php


namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Wall;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Validator;

class AuthController extends BaseController
{
    public function getRegister(): Factory|View|Application
    {
        return view('auth.register');
    }

    public function postRegister(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:225'],
            'email' => ['required', 'string', 'max:225', 'unique:users'],
            'password' => ['required', 'string', 'min:4'],
        ]);
        $user = $this->create($validated);
        $this->guard()->login($user);
        Wall::create([
            'user_id' => $user->id,
        ]);
        return response()->json([
            'user' => $user->load('wall'),
            'message' => 'registration successful'
        ], 200);

//        $user = User::create([
//            'email' => request()->get('email'),
//            'name' => request()->get('name'),
//            'password' => Hash::make(request()->get('password')),
//        ]);
//
//        return $user;
    }


    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);


        return $user;
    }

    protected function guard(): Guard|StatefulGuard
    {
        return Auth::guard();
    }

    public function getLogin(): Factory|View|Application
    {
        return view('auth.login');
    }

//    public function postLogin(Request $request)
//    {
//        $credentials = $request->validate([
//            'email' => 'required',
//            'password' => 'required',
//        ]);
//
//        if (!Auth::attempt($credentials)) {
//            throw ValidationException::withMessages([
//               'email'=>[
//                   __('auth.failed')
//               ]
//            ]);
//        }
//        return $request->user();
//    }

    public function postLogin(Request $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
//            Authentication passed...
            $authuser = auth()->user();
            return response()->json(['message' => 'Login successful', $authuser], 200);
        } else {
            return response()->json(['message' => 'Invaild email or password'], 401);
        }
////        dd('dfsdfs');
//        $auth = Auth::attempt([
//            'email' => request()->get('email'),
//            'password' => request()->get('password'),
//        ]);
//        if ($auth) {
////            return response('success');
//            return Auth::user();
//        }
//        return response('false', 401);
    }

    public function postLogout(): JsonResponse
    {
        Auth::logout();
        return response()->json(['message' => 'Logged Out'], 200);

    }

    public function userStatus(Request $request)
    {
        return $request->user();
    }

}
