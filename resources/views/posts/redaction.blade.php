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
<form action="{{route('post.redaction', [$post->id])}}" method="POST">
    @csrf
    <div>
        <input type="text" name="title" placeholder="title" value="{{$post->title}}">
    </div>
    <div>
        <textarea name="text" id="" cols="30" rows="10" placeholder="text">{{$post->text}}</textarea>
    </div>
    <button type="submit">Redaction</button>
</form>
</body>
</html>
