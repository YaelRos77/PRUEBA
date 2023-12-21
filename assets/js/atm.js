export class CajeroAutomatico {
  cuentas = [
    { nombre: 'Yael Rosas', nDoc: '72678797', clave: '1234', saldo: 700.49 },
    
    { nombre: 'Jose Zuñiga', nDoc: '72123493', clave: '5678', saldo: 899 },
    
    { nombre: 'Antonio Howarks', nDoc: '62678734', clave: '9101', saldo: 100 },
    
    { nombre: 'Josue Leon', nDoc: '74557723', clave: '1213', saldo: 222 },
    
    { nombre: 'Andrew Stevens', nDoc: '72348123', clave: '1415', saldo: 80.99 },
  ];

  usuarioLogeado;

  constructor() {
  }

  iniciarSesion(nDoc, clave) {
    this.usuarioLogeado = this.cuentas.find(cuenta => cuenta.nDoc == nDoc && cuenta.clave == clave);
  

  if (!this.usuarioLogeado) {
    this.mostrarMensajeError('Verifique sus datos. Usuario o contraseña incorrectos.');
  }
}

mostrarMensajeError(mensaje) {
  const mensajeErrorEl = document.getElementById('mensajeError');
  mensajeErrorEl.textContent = mensaje;
}

  consultarSaldo() {
    return `Tu saldo actual es: $ ${this.usuarioLogeado.saldo}`;
  }

  /**
   * 
   * @param {number} monto 
   */
  ingresarMonto(monto) {
    monto = Number(monto);
    if (this.usuarioLogeado.saldo + monto <= 990) {
      this.usuarioLogeado.saldo += monto;
      return `Tu saldo ahora es: $ ${this.usuarioLogeado.saldo}`;
    }
    else return 'El saldo no debe superar los $990';
  }

  /**
   * 
   * @param {number} monto 
   */
  retirarMonto(monto) {
    monto = Number(monto);
    if (this.usuarioLogeado.saldo - monto >= 10) {
      this.usuarioLogeado.saldo -= monto;
      return `Tu saldo ahora es: $ ${this.usuarioLogeado.saldo}`;
    }
    else return 'El saldo no debe ser menor a $10';
  }

  cerrarSesion() {
    this.usuarioLogeado = null;
  }
}