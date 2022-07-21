<?php


namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Models\Wall;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class PostController extends BaseController
{
//    public function __construct()
//    {
//        $this->authorizeResource(Post::class, 'post');
//    }

    public function getPost(User $user): Factory|View|Application
    {
        return view('posts.posts', ['user' => $user]);

    }

    public function postPost(User $user): JsonResponse
    {
        $post = Post::create([
            'author_id' => $user->id,
            'wall_id' => $user->wall->user_id,
            'title' => request()->get('title'),
            'text' => request()->get('text'),
        ]);
//        dd($post);
//        return redirect()->route('wall.user', $user->name);
        return response()-> json(['post'=>$post]);
//        return $post;
    }

    public function getRedaction(Post $post): Factory|View|Application
    {
        return view('posts.redaction', ['post' => $post]);
    }

    public function postGetRedaction (Post $post): JsonResponse
    {
        return response()->json(['post'=>$post]);
    }

    public function postRedaction(Post $post, Request $request): JsonResponse
    {
        $user = User::find($post->author_id);

        $post->fill($request->all());

        $post->save();
//        dd($post);
        return response()->json(['post'=>$post, 'user'=>$user]);
    }

    public function postDeletePost(Post $post): JsonResponse
    {
        $user = User::find($post->author_id);

        $post->delete();

        return response()-> json(['post'=>$post, 'user'=>$user]);
//        return redirect()->route('wall.user', $user->name);
    }
}
