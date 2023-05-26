function openPopup3() {
    var myWindow = window.open("", "myPopup3", "left=300, top=400, width=500, height=450, scrollbars=no");
    myWindow.document.write(`
      <html>
      <head>
        <title>Trading & Sales & Purchase</title>
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
        <h1>Trading & Sales & Purchase</h1>
        <p>
          As a member of the tractor sales team, I started my career at this company. My main tasks were processing purchase and sales orders, quotations using SAP ERP. I arranged transport orders regarding all movements and managed logistics flows for imports, inland, and exports. From my taska, I had collected diverse expertises and knowledges like EC delivery(Intrastat), Risk-management. I used to control the demo contracts and sales orders and communicated with international customers and vendors. Additionally, I operated an online shop for spare parts with cooperation with an IT provider. I gained experience in customer service, including return products, refunds, and warranty cases within the team. <br><br>
          Since I had been the internal product & development manager, I took over the role of reporting and communicating with the directors. I was responsible for monthly reporting on overdue AR, bad stock, sales revenue, and forecast. I played a role in obtaining permission from the directors when necessary in any case. One of my main roles was to maintain and update various functions in the team, including SAP, Excel Masterfile, Google order book, and online shop. Especially, I optimized the system for the order book to determine the weekly sales plan, control serial numbers of products, and assist in distributing necessary documentation for vehicle registration. The order book provided a simple overview of Tractor Quantity. I also kept an eye on new regulations of the EU Commission related to the tractor business and supported in solving relevant issues, such as SCIP:ECHA.
        </p>
      </body>
      </html>
    `);
  }