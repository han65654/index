function Popup() {
    var myWindow = window.open("", "popup1", "left=300, top=300, width=600, height=500, scrollbars=no");
    myWindow.document.write(`
      <html>
      <head>
        <title>what to prepare</title>
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
        <h1>What to do on/after delivery</h1>
        <p>
          Deliveries of goods to other EU countries are exempt from sales tax under the conditions you just checked. 
          The next step is to prepare following evidences : <br><br>
          <strong>[1] Documentary evidence for intra-community delivery </strong> <br>
          The supplier is obliged to clearly and easily verifiable evidence that the delivered goods actually arrived in another EU member state <br>
          - <a href="https://datenbank.nwb.de/Dokument/78926_17b/?query=gelangensbest%C3%A4tigung&listPos=0" target="_blank">Gelangensbestätigung (Confirmation of arrival)</a> <br>
          - Spediteurbescheinigung (carrier certificate) <br>
          - Frachtbrief (Bill of landing) <br>
          - Versendungsprotokoll (tracking-and-tracing protocol) <br>
          - Empfangsbescheinigung in Fällen von Postsendungen (proof of receipt in the case of postal items) <br>
          - <a href="https://dejure.org/gesetze/UStDV/17b.html" target="_blank">More evidence</a><br><br>

          ** in case of processing / mounting **<br>
          If the goods have been processed or mounted by one or more agents of the customer before being transported to another EU member state,
          the supplier of the goods must also provide <a href="https://datenbank.nwb.de/Dokument/78926_11/" target="_blank">evidence</a> of this. <br> <br> 

          <strong>[2] Accounting evidence for intra-community delivery </strong> <br>
          The supplier must prove the requirements for the VAT exemption of an intra-Community delivery in the accounts. <br>
          For each customer, the supplier should provide a qualified confirmation of the validity of their VAT ID. from the Federal Central Tax Office. <br> <br>
          
          <strong>[3] Outgoing invoice (Sales invoice) </strong> <br>
          The invoice must contain the following additional information for a tax-free intra-community delivery:<br>
          - The VAT ID no. of the supplier (invoice issuer) <br>
          - the valid foreign VAT ID no. of the customer (invoice recipient) <br>
          - a reference (text) to the tax exemption of the delivery (e.g. "intra-community delivery") <br> <br>
        
          <strong>[4] Reporting (Declaration) obligations </strong> <br>
          The supplier must state the amount of the fees for his VAT-free intra-Community deliveries. <br>
          Furthermore, supplier must transmit these fees - separately for each customer - monthly in <a href="https://www-idev.destatis.de/idev/doc/intra_en/hilfe.html" target="_blank">the summary report (ZM)</a> to the Federal Central Tax Office electronically (§ 18a UStG)
        
          </p>

        
      </body>
      </html>
    `);
  }
