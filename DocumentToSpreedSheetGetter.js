function kopiujTekstZDokumentuDoArkusza() {
  // ID dokumentu Google Docs
  var dokumentId = '1dWTY8Z5suin4BUPBVRAYJWDZxuS-g70GxkUxAKbvH80';

  // Otwórz dokument
  var dokument = DocumentApp.openById(dokumentId);

  // Pobierz tekst z dokumentu
  var tekstZDokumentu = dokument.getBody().getText();

  // Użyj wyrażeń regularnych do wyodrębnienia fragmentu tekstu
  var regex = /Przysiad ze sztangą z przodu:(.*?)(Przysiad ze sztangą z tyłu \(high bar\)|$)/gs;
  var dopasowanie = tekstZDokumentu.match(regex);

  // Jeśli coś zostało dopasowane, pobierz pierwsze dopasowanie
  var fragmentTekstu = (dopasowanie && dopasowanie.length > 0) ? dopasowanie[0] : "";
  fragmentTekstu = fragmentTekstu.toString().replace("Przysiad ze sztangą z tyłu (high bar)", "")
  // ID arkusza kalkulacyjnego Google
  var arkuszId = '1RxVMwBBjImggdapV5QLu9ng_yPYhQsqyDCeCoz7OHSI';

  // Otwórz arkusz kalkulacyjny
  var arkusz = SpreadsheetApp.openById(arkuszId);

  // Wklej wyodrębniony fragment tekstu do wskazanej komórki w arkuszu kalkulacyjnym
  arkusz.getActiveSheet().getRange('A1').setValue(fragmentTekstu);
}
