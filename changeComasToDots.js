function changeDotsToComas() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = sheet.getSheets();
  for (var k = 0; k < sheets.length; k++){
    var nameOfSheet = sheets[k].getName();
    var range = sheet.getSheetByName(nameOfSheet).getRange('B2:O100');
    var data = range.getValues();
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].length; j++) {
        if (data[i][j].toString().length > 0){
          data[i][j] = data[i][j].toString().replace(/\./g, ',');
        }
      }
    }
    range.setValues(data);
  }
}

