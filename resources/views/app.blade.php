<!DOCTYPE html>
<html>
<head>
	<title>SaviorLabs</title>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css')  }}">
</head>
<body>

	<div id="app"></div>

	<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</body>
</html>