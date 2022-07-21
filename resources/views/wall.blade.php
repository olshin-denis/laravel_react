<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>Стена:{{$user->name}}</h1>
<a href="{{route('get.post', [$user->name])}}">создать пост</a>
@foreach($posts as $post)
    <div style="border: 1px solid black; margin: 5px; padding: 20px">
        <div>
            {{$post->title}}
        </div>
        <div>
            {{$post->text}}
        </div>
        <div>
            <a href="{{route('get.redaction', [$post ->id])}}">Edit</a>
        </div>
        <div>
            @can('delete-post', $post)
                <form action="{{route('post.deletePost', [$post ->id])}}" method="POST">
                    @csrf
                    <button type="submit"> delete</button>
                </form>
            @endcan
        </div>
    </div>
@endforeach
</body>
</html>
