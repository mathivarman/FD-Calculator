<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" herf="style.css">
    <title>Document</title>
</head>
<body>
    <h1>mathivarman</h1>
    <form action="">
        <textarea placeholder="enter number in meter" id="textarea"></textarea>
        <br>
        <button type="submit" onclick="calmeter()">Calculate</button>
        <div id="meter"></div>
    </form>
    <script>
        let x;
       let num;
        function calmeter(
            num=number(document.getElementById("textarea").value)
            
        )
        console.log(num);
    </script>
</body>
</html>