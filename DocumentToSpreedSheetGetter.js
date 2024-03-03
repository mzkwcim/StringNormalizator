function kopiujTekstZDokumentuDoArkusza() {
  var dokumentId = '1dWTY8Z5suin4BUPBVRAYJWDZxuS-g70GxkUxAKbvH80';

  var dokument = DocumentApp.openById(dokumentId);

  var tekstZDokumentu = dokument.getBody().getText();

  var regex = /Przysiad ze sztangą z przodu:(.*?)(Przysiad ze sztangą z tyłu \(high bar\)|$)/gs;
  var dopasowanie = tekstZDokumentu.match(regex);

  var fragmentTekstu = (dopasowanie && dopasowanie.length > 0) ? dopasowanie[0] : "";
  fragmentTekstu = fragmentTekstu.toString().replace("Przysiad ze sztangą z tyłu (high bar)", "")
  var arkuszId = '1RxVMwBBjImggdapV5QLu9ng_yPYhQsqyDCeCoz7OHSI';

  var arkusz = SpreadsheetApp.openById(arkuszId);

  arkusz.getActiveSheet().getRange('A1').setValue(fragmentTekstu);
}
