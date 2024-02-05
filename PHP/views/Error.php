<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="./Resources/Tailwind.css">
  <title>BBC News Network</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
  <style>
    .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .sect {
      margin-left: 2.5px;
      margin-right: 2.5px;
    }
  </style>
</head>

<body>

  <script src="./Resources/Alert.js"></script>
  <script>
    swal({
      title: "There was Some error",
      text: "Please check your input and try again",
      icon: "error",
      button: "CLOSE"
    });
  </script>

  <section class="text-gray-500 bg-gray-900 body-font"
    style="background-image: url('./Resources/Image.jpg'); background-repeat: no-repeat;">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black" style="text-align: center;">BBC News
          Network <br><u>In search of Fake News</u></h1>
        <p class="mb-8 leading-relaxed" align="justify"
          style="background: rgba(0,0,0,0.45); padding: 10px; border-radius: 10px;"><b>
            <font color="white">BBC News is an operational business division of the British Broadcasting Corporation
              (BBC) responsible for the gathering and broadcasting of news and current affairs. The department is the
              world's largest broadcast news organisation and generates about 120 hours of radio and television output
              each day, as well as online news coverage. The service maintains 50 foreign news bureaux with more than
              250 correspondents around the world. Fran Unsworth has been Director of News and Current Affairs since
              January 2018. The BBC is a quasi-autonomous corporation authorised by royal charter, making it
              operationally independent of the government, who have no power to appoint or dismiss its director general,
              and require it to report impartially. However, as with all major media outlets, it has been accused of
              political bias from across the political spectrum, both within the UK and abroad. The department's annual
              budget is in excess of £350 million.</font>
          </b></p>
        <div class="flex justify-center">
          <a href="https://www.facebook.com/bbcnews" target="_blank"><button
              class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Like
              our Facebook Page</button></a>
          <a href="https://www.youtube.com/user/bbcnews" target="_blank"><button
              class="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-white rounded text-lg">Link
              to our Youtube Channel</button></a>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" src="./Resources/News.png"
          style="width: 60%; height: 60%; display: block; margin: auto;">
      </div>
    </div>
  </section>


  <section style="background-color: #101826;">
    <br>
    <div class="NewClass" style="padding-left: 30px;">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onclick="General()">
        General
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onclick="Business()">
        Business
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onclick="Entertainment()">
        Entertainment
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onclick="Health()">
        Health
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onclick="Science()">
        Science
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onclick="Sports()">
        Sports
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onclick="Technology()">
        Technology
      </button>
      <div style="text-align: right; padding-right: 10px;">
        <b style="color: white;">Number of Articles per Page: </b>
        <select id="no_of_articles">
        </select>
      </div>
  </section>
  </div>

  <section class="text-gray-500 bg-gray-900 body-font overflow-hidden" id="NEWS"></section>
  <div style="text-align: center; width: 100%; background-color: #101826; display: block;">
    <div style="width: fit-content; display: inline-flex;">
      <h3 id="indexes"></h3>
    </div>
  </div>

  <section class="text-gray-400 bg-gray-900 body-font"
    style="background-image: url('./Resources/FooterIMG.jpg'); background-repeat: no-repeat;">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"
        style="background: rgba(0,0,0,0.45); padding: 10px; border-radius: 10px; color: white;">
        <h1 class="title-font font-medium text-3xl text-white">Created & Designed by Saptarshi Dey</h1>
        <p class="leading-relaxed mt-4"><b>Hello. My name is Saptarshi Dey and I am currently studying B.Tech Computer
            Science in Guru Nanak Institute of Technology
            <br><a href="https://github.com/Saptarshi-Dey" target="_blank">GitHub</a> <a
              href="https://www.facebook.com/Dey.Saptarshi.Dey/" target="_blank">Facebook</a></b></p>
      </div>
      <div class="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <form id="Submits" action="Submit.php" method="POST">
          <h2 class="text-white text-lg font-medium title-font mb-5"><u>Sign Up for NewsLetter</u></h2>
          <input
            class="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            style="width: 100%;" name="userName" placeholder="Enter your Name" type="text" required />
          <div style="display: inline-block;">
            <b>D.O.B:-</b>
            <input
              class="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              style="width: 100%;" name="DOB" type="date" required id="DOB" />
          </div>
          <div style="display: inline-block;"><b>Subscription:-</b>
            <select
              class="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              name="subs" style="width: 100%;">
              <option value="Times of India">Times of India</option>
              <option value="The Economic Times" selected="selected">The Economic Times</option>
              <option value="The Telegraph">The Telegraph</option>
              <option value="The New York Times">The New York Times</option>
              <option value="The Times Network">The Times Network</option>
            </select>
          </div>
          <input
            class="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            style="width: 100%;" placeholder="Enter your Email" type="email" name="mail" required />
          <input
            class="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            style="width: 100%;" placeholder="Enter password" type="password" name="pass" required />
          <input type="submit"
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            style="width: 100%;" value="Sign Up">
        </form>
      </div>
  </section>

  <a class="weatherwidget-io" href="https://forecast7.com/en/22d5788d36/kolkata/" data-label_1="KOLKATA"
    data-label_2="WEATHER" data-theme="original">KOLKATA WEATHER</a>
  <script>
    !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');
  </script>
  <script src="./Resources/SCRIPT.js"></script>
</body>

</html>