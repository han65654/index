function openPopup8() {
    var myWindow = window.open("", "myPopup8", " width=500, height=400");
    myWindow.document.write(`
      <html>
      <head>
        <title>Team-Work</title>
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
        <h1>Team-Work</h1>
        <p>
          Throughout the past seven years, I have gained valuable experience working both as a manager and a team member. This experience has allowed me to collaborate with colleagues from Germany, other countries, and Korea, highlighting the importance of diversity and fostering teamwork towards a shared objective. <br><br>
          From my observations, I believe my role is to facilitate seamless collaboration within the team and enhance the efficiency of individual team members' work, rather than solely taking on a leadership position. An instance of this is the platform I developed using Google Sheets, which provided a comprehensive overview for myself, the sales team, and salesmen. This platform greatly facilitated the process of product sales.
        </p>
      </body>
      </html>
    `);
  }