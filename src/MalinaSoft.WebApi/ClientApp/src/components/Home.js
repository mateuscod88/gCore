import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Rejestrowanie napraw.</h1>
            <p>Jeżeli auto istnieje kliknij w zakładkę Auta</p>
            <p>Gdy zarejestrowałeś auto wejdz w zakładkę Auta zaznacz i kliknij dodaj naprawe.</p>
            <p>W celu wyszukania naprawy kliknij w zakładkę Naprawa.</p>
      </div>
    );
  }
}
