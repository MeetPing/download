
    var myWindow = window.open("", "myWindow", "width=230,height=300");
    myWindow.document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>PenguWiki</title>
        <style>
        body {
            background-color: black;
            color: white;
        }
        .navbar {
            position: relative;
            top: -60px;
            background-color: black;
            color: white;
            
        }
        .navbar button:hover{
            background-color: rgb(53, 52, 52);
            color: white;
        }
        .navbar button {
            border: none;
            background-color: black;
            height: 50px;
            color: white;
        }
        .content {
            position: relative;
        
        }</style>
    </head>
    <body>
        <img src="MiPengu.jpg" alt="PenguWiki" width="80px">
        <span class="navbar"><button>Home</button><button onclick="dictionaryopen()">Dictionary</button></span>
        <div class="content" id='content'>
                Hi! <br>
                Its a me PenguWiki!<br>
                We are a free Dictionary!<br>
                <button onclick="dictionaryopen()">Open dictionary!</button>
        </div>
    </body>
    <script>
    function dictionaryopen() {
        document.getElementById('content').innerHTML = '<input type="text" placeholder="Whatcha gonna do?!"></input><button>Search!</button>';
    }
    </script>
    </html>`);
    myWindow.opener.document.write("<p>Opened penguwiki!</p>");
