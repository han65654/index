function openPopup6() {
    var myWindow = window.open("", "myPopup6", " width=500, height=400");
    myWindow.document.write(`
      <html>
      <head>
        <title>Coding & Python</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            line-height: 1.5;
          }
  
          h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }
  
          p {
            font-size: 16px;
          }
        </style>
      </head>
      <body>
        <h1>Coding & Python</h1>
        <p>
          I have taken the initiative to self-learn the Python programming language. During my time at a previous company, I recognized the importance of automation, which motivated me to start learning coding. Currently, I apply my coding skills to projects involving robotic process automation (RPA), web development, macro, and data analysis. Furthermore, I am currently expanding my knowledge in the field of machine learning, with the goal of applying it in practice in the near future.
        </p>
      </body>
      </html>
    `);
  }
  