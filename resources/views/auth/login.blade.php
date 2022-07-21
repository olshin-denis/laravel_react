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
<div>
    <form action="{{route("post.login")}}" method="POST">
        @csrf
        <div>
            <input type="email" name="email" placeholder="email">
        </div>
        <div>
            <input type="password" name="password" placeholder="password">
        </div>
        <div>
            <button type="submit" >Submit</button>
        </div>
    </form>
</div>
</body>
</html>
