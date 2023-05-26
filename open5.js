function openPopup5() {
    var myWindow = window.open("", "myPopup5", " width=500, height=450");
myWindow.document.write(`
<html>
<head>
<title>SAP and ERPs</title>
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
<h1>SAP and ERPs</h1>
<p>
I have worked with three different ERP systems, which has given me a strong understanding and proficiency in handling such systems. During my experience with SAP System, I was able to identify areas for improvement and collaborate with the IT team to develop specific programs. Some examples of the programs I contributed to include: <br><br>
- Enhancing the packing list by including the storage location information <br>
- Implementing a system for managing interchangeable spare parts <br>
- Streamlining the shipping address management process <br>
- Customizing and adjusting user fields as per specific requirements <br>
- Resolving errors related to search functions through debugging <br>
- Implementing a restriction to prevent the creation of new billing documents after monthly closing <br>
- Developing a daily-based stock list extraction process
</p>
</body>
</html>
`);
  }