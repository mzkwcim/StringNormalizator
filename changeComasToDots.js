function zamienKropkiNaPrzecinki() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetId = sheet.getId();

  var range = sheet.getSheetByName('Bobkacz').getRange('B2:J33');
  var data = range.getValues();

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      data[i][j] = data[i][j].toString().replace(/\./g, ',');
    }
  }
  range.setValues(data);
  
  Logger.log('Zamieniono kropki na przecinki w zakresie ' + range.getA1Notation() + ' w arkuszu o ID: ' + sheetId);
}
