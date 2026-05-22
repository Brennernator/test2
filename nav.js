<!-- Used for the creation of this project: Webdev assignments 1-4, Postman API creation tutorial, Google, ChatGPT (for error checking and Mobile assistance, logo design)-->

<!DOCTYPE html>
<html>
<head>

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Brently Giveaway - Home</title>
  <link rel="stylesheet" href="/css/styles.css" />
</head>

<body>
  <header>
    <h1>Brently Motors Corporation 2026 Giveaway</h1>

    <button class="nav-toggle" id="navToggle">Menu</button>

    <nav id="siteNav">
      <a href="/index.html">Home</a>
      <a href="/prizes.html">Prizes</a>
      <a href="/enter.html">Enter</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div>
        <h2>Your Choice: Fast, Luxurious, or Both.</h2>
        <p id="entryCount">Loading entry count...</p>

        <ul>
          <li>Enter once per person</li>
          <li>No purchase necessary</li>
          <li>Winners contacted after the deadline</li>
        </ul>

        <p>
          <a href="https://www.merriam-webster.com/dictionary/sweepstakes" target="_blank" >
            Prize draw info
          </a>
        </p>
      </div>

      <div>
        <img src="/images/brentlylogo.png" alt="Brently Logo" />


      </div>
    </section>

    <section class="cards">
      <div class="card">
        <h3>Fast</h3>
        <p>Effortless power and track-like handling. The 2026 Brently Punisher redefines speed with its 480 horsepower 308 cubic inch V8 engine.</p>
      </div>

      <div class="card">
        <h3>Luxurious</h3>
        <p>Oldschool luxury with new-school features. The 2026 Brently Statesman Mark IX brings the iconic Brently Statesman into the 21st century.</p>
      </div>

      <div class="card">
        <h3>Both</h3>
        <p>And you can have it all. The 2026 Brently Eco-444 combines it all into one sleek, sophisticated package. 4 Doors. 4 Cylinders. 4 Wheel Drive.</p>
      </div>

    </section>
  </main>

  <footer>
    <main>
      <p>2025 Brently Motors Corporation</p>
    </main>
  </footer>

  <script src="/js/nav.js"></script>
  <script src="/js/home.js"></script>
</body>
</html>
