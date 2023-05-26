function openPopup7() {
    var myWindow = window.open("", "myPopup7", " width=500, height=400");
    myWindow.document.write(`
      <html>
      <head>
        <title>E-commerce</title>
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
        <h1>E-commerce</h1>
        <p>
          In my previous company, I gained experience in managing an e-commerce platform. As we were selling agricultural vehicles, it was challenging to handle spare part sales through traditional mail or phone channels. To overcome this, we established an online shop in collaboration with an external company. Here are the specific responsibilities I had: <br><br>
          - Managing master data <br>
          - Implementing customer-level permissions (Dealer/B2B/B2C) <br>
          - Processing and transferring order data to SAP <br>
          - Handling shipment of goods <br>
          - Managing refund and coupon issuance processes <br>
          - Collaborating with the manufacturer's product search system <br>
          - Incorporating incoming quantity updates into the system
        </p>
      </body>
      </html>
    `);
  }