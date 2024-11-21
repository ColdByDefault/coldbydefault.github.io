import React from "react";

function Impressum() {
  return (
    <div className="p-6 bg-gray-100 text-gray-900 rounded-lg shadow-lg mt-6">
      <h1 className="text-2xl font-bold mb-4">Impressum</h1>
      <p>
        <strong>Angaben gemäß § 5 TMG</strong>
      </p>
      <p>
        Yazan Abo-Ayash <br />
        Invalidengasse  <br />
        68723 Schwetzingen <br />
        Germany
      </p>
      <p className="mt-4">
        <strong>Kontakt</strong> <br />
        Telefon: +49 15115890708 <br />
        E-Mail: abo.ayash.yazan@gmail.com
      </p>
      <p className="mt-4">
        <strong>Haftung für Inhalte</strong> <br />
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>
    </div>
  );
}

export default Impressum;