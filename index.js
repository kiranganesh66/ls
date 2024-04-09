// const xlsx = require("xlsx");
// const sqlite3 = require("sqlite3").verbose();

// // Function to convert Excel to JSON
// function readExcelFile(filePath) {
//   const workbook = xlsx.readFile(filePath);
//   const sheetNames = workbook.SheetNames;

//   const dataSheets = {};

//   sheetNames.forEach((sheet) => {
//     const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
//     dataSheets[sheet] = jsonData;
//   });

//   return dataSheets;
// }

// // Replace 'your_excel_file.xlsx' with the path to your Excel file
// const excelData = readExcelFile("assignment_data.xlsx");

// // // Establish a connection to the SQLite database
// const db = new sqlite3.Database(
//   "database.db",
//   sqlite3.OPEN_READWRITE,
//   (err) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log("Connected to the SQLite database.");
//     }
//   }
// );

// // Prepare SQL statement to insert data
// const sql = `INSERT INTO sale (date, web_sales, offline_sales) VALUES (?,?,?)`;

// // Insert data into the table
// excelData[].forEach((item) => {
//   db.run(sql, [item.date, item.web_sales, item.offline_sales], function (err) {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log(`A row has been inserted with rowid ${this.lastID}`);
//   });
// });

// // Close the database connection
// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log("Closed the SQLite database connection.");
//   }
// });
