function openPopup2() {
    var myWindow = window.open("", "myPopup2", "left=300, top=400, width=500, height=400, scrollbars=no");
    myWindow.document.write(`
      <html>
      <head>
        <title>Logistic</title>
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
        <h1>Logistic</h1>
        <p>
          In the first company as an Air Outbound employee, my responsibilities included not only consolidating the shipments but also coordinating with airlines to secure space capacity for export goods, arranging collections of goods from shipper premises in Germany, preparing export declarations (Atlas) and communicating with customers in Korea and Germany. I was also responsible for checking daily prognosis on the quantity. I have also experienced handling some kinds of dangerous goods by checking the proper documents and DG label on packages. <br><br>
          In the second company, I was mainly taking care of processing import goods via air/ocean freight for one of the main customers as an account operator. I communicated with the trucking company to arrange direct trucking to diverse destinations in Europe. I used to provide B2B customer service for those who have a sales corporation in Germany (processing, managing warehouse/storage and stock in/out, issuing proofs for export/EC-delivery, and giving advice to the customer regarding air exporting to third countries including project shipments)
        </p>
      </body>
      </html>
    `);
  }