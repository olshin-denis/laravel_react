<?php


namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Models\Wall;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use function GuzzleHttp\Promise\all;

class WallController extends BaseController
{
    public function home(): Factory|View|Application
    {
        return view('home');
    }

    public function cabinet(User $user): JsonResponse
    {
//        $wall = Wall::where('user_id', $user_id)->first();
        return response()->json(['wall' => $user->wall]);
    }

    public function wall(Wall $wall): JsonResponse
    {
//        dd($name);

//        $user = User::where('name',$name)->first();
//        $posts = Post::where('wall_id', $user->id)->get();
//        $user->load('post');
//        return response()->json(['user' => $user->load('wall')]);
//        $post = Post::where('wall_id', $wall_id)->first();
        return response()->json(['wall' => $wall->posts]);
    }

    public function walls(): JsonResponse
    {
//        dd(Auth::user());
        $users = User::all();
        $users->load('posts');
        return response()->json([
            'users' => $users->load('wall'),
        ]);
    }

    public function postWall(User $user, Wall $wall): JsonResponse
    {
        $post = Post::create([
            'author_id' => Auth::user()->id,
            'wall_id' => $wall->id,
            'title' => request()->get('title'),
            'text' => request()->get('text'),
        ]);
//        dd($post);
//        return redirect()->route('wall.user', $user->name);
        return response()-> json(['post'=>$post]);
//        return $post;
    }

}
