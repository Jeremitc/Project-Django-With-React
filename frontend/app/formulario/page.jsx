"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


function FormTask() {
  const [formData, setFormData] = useState({
    nombre: '',
    cantidad: '',
    dni: '',
    ruc: '',
    direccion: '',
    telefono_fijo: '',
    numero_celular: '',
    local: '',
    ubicacion: '',
    area: '',
    uso_exclusivo: '',
    correo: '',
    renta_mensual: '',
    garantia: '',
    mes_adelantado: '',
    dias_alquiler: '',
    total_recibo_provisional: '',
    fecha_inicio: '',
    mantenimiento: '',
    suministro_luz: '',
    observacion: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };



const handleSubmit = async (event) => {
  event.preventDefault();
  console.log('Formulario enviado:', formData);
  try {
    const res = await fetch('http://localhost:2000/recibos/', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    

    if (res.ok) {
      const data = await res.json();
      console.log('Registro guardado:', data);
    } else {
      const errorData = await res.json();
      console.error('Error al guardar el formulario:', errorData);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};



  useEffect(() => {
    const inputs = document.querySelectorAll("input[required]");
    inputs.forEach(input => {
      input.addEventListener("input", function () {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (input.value.trim() !== "") {
          input.classList.remove("invalid");
          input.classList.add("valid");
          label.classList.add("valid");
          label.classList.remove("required");
        } else {
          input.classList.remove("valid");
          input.classList.add("invalid");
          label.classList.remove("valid");
          label.classList.add("required");
        }
      });
    });
  }, []);

  return (
    <div>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div><h2>Formulario de Recibo Provisional</h2></div>
          <div className="row">
            <div className="column">
              <label htmlFor="nombre" className="required">Recibimos del Sr(a):</label>
              <input type="text" id="nombre" name="nombre" placeholder="Nombre del cliente" required onChange={handleInputChange} />
            </div>
            <div className="column">
              <label htmlFor="cantidad" className="required">La cantidad de:</label>
              <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad en dólares" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="dni" className="required">DNI:</label>
              <input type="text" id="dni" name="dni" placeholder="Número de identidad" required onChange={handleInputChange} />
            </div>
            <div className="column">
              <label htmlFor="ruc" className="required">RUC:</label>
              <input type="text" id="ruc" name="ruc" placeholder="Número de la empresa" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="direccion" className="required">Domicilio legal en:</label>
              <input type="text" id="direccion" name="direccion" placeholder="Dirección de la empresa" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="telefono_fijo" className="required">Teléfono fijo N°:</label>
              <input type="text" id="telefono_fijo" name="telefono_fijo" placeholder="Número Fijo" required onChange={handleInputChange} />
            </div>
            <div className="column">
              <label htmlFor="numero_celular" className="required">Número de celular:</label>
              <input type="text" id="numero_celular" name="numero_celular" placeholder="Número celular" required onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="local" className="required">Separación de local</label>
              <input type="text" id="local" name="local" placeholder="Número del local" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="ubicacion" className="required">Ubicacion</label>
              <input type="text" id="ubicacion" name="ubicacion" placeholder="Piso donde queda" required onChange={handleInputChange} />
            </div>
            <div className="column">
              <label htmlFor="area" className="required">Área (m²):</label>
              <input type="text" id="area" name="area" placeholder="area total" required onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="uso_exclusivo" className="required">Para giro o venta exclusivo de:</label>
              <input type="text" id="uso_exclusivo" name="uso_exclusivo" placeholder="Actividad de ingreso" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="correo" className="required">Correo electrónico:</label>
              <input type="email" id="correo" name="correo" placeholder="Correo electrónico" required onChange={handleInputChange} />
            </div>
            <div className="column">
              <label htmlFor="renta_mensual" className="required">Renta Mensual:</label>
              <input type="text" id="renta_mensual" name="renta_mensual" placeholder="Costo de la renta por mes" required onChange={handleInputChange} />
            </div>
          </div>
          <label>El local se encuentra ubicado en el Centro Comercial de Gamarra, entre la esquina del Jr. Antonio Bazzo y Jr. Sebastián Barranca del distrito de la Victoria - provincia y departamento de Lima.</label>
          <h3>Formas de pago</h3>
          <div className="row">
            <div className="column">
              <label htmlFor="garantia" className="required">Garantía ($):</label>
              <input type="text" id="garantia" name="garantia" placeholder="Costo de la Garantia" required onChange={handleInputChange} />
            </div>
            <div className="column">
              <label htmlFor="mes_adelantado" className="required">Mes Adelantado ($):</label>
              <input type="text" id="mes_adelantado" name="mes_adelantado" placeholder="Costo del mes adelantado" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="dias_alquiler" className="required">Días de Alquiler:</label>
              <input type="text" id="dias_alquiler" name="dias_alquiler" placeholder="Número de dias" required onChange={handleInputChange} />
            </div>
            <div className="column">
              <label htmlFor="total_recibo_provisional" className="required">Total Recibo Provisional ($):</label>
              <input type="text" id="total_recibo_provisional" name="total_recibo_provisional" placeholder="Carga Total" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Nota: Días libre o gracia de alquiler del<input type="date" onChange={handleInputChange} /> al <input type="date" onChange={handleInputChange} /></label>
            </div>
          </div>
          <label>El presente recibo provisional tendra una vigencia de 07 dias hábiles a partir de la fecha, el cual deberá ser canjeado por su factura y el contrato definitivo de arrendamiento.</label>
          <br />
          <label>En caso de desistir de arrendamiento deberá de abonar el 50% de lo pagado, el cual se le facturará por concepto de gastos administrativos</label>
          <h3>Referencias de Contrato</h3>
          <div className="row">
            <div className="column">
              <label htmlFor="fecha_inicio" className="required">Fecha de inicio:</label>
              <input type="date" id="fecha_inicio" name="fecha_inicio" required onChange={handleInputChange} />
            </div>
            <div className="column">
              <label htmlFor="mantenimiento" className="required">Mantenimiento Incluido de IGV (US $):</label>
              <input type="text" id="mantenimiento" name="mantenimiento" placeholder="Costo de mantenimiento" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="suministro_luz" className="required">Suministro de Luz N°:</label>
              <input type="text" id="suministro_luz" name="suministro_luz" placeholder="Número de suministro" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="observacion" className="required">Observaciones:</label>
              <input type="text" id="observacion" name="observacion" placeholder="Añadir observaciones..." required onChange={handleInputChange} />
            </div>
          </div>
          <label>Para cualquier consulta o requerimiento, contactarse con: 992 506 137</label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default FormTask;
