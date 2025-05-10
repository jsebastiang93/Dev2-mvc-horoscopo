# Consulta de Horóscopo Web - Práctica MVC

Este proyecto es una **práctica de desarrollo web** utilizando el patrón arquitectónico **MVC (Modelo - Vista - Controlador)**, implementado en **Vanilla JavaScript**. Su objetivo es reforzar la separación de responsabilidades en la estructura del código, promoviendo buenas prácticas de diseño y desarrollo frontend.

## 🌟 Historia de Usuario

**Título:** Consultar horóscopo según fecha de nacimiento

**Como** usuario de la aplicación web  
**Quiero** ingresar mi fecha de nacimiento y pulsar “Consultar”  
**Para** recibir mi horóscopo diario en pantalla.

### ✅ Criterios de Aceptación (AC)

- **AC1 – Validación de formato de fecha:**  
  El sistema solo acepta fechas en formato `DD-MM-AAAA`.

- **AC2 – Botón “Consultar” habilitado:**  
  El botón "Consultar" se habilita solo si la fecha es válida.

- **AC3 – Consulta y despliegue del horóscopo:**  
  Al presionar "Consultar", se muestra el horóscopo correspondiente junto con un emoji.

- **AC4 – Duración en pantalla y deshabilitación:**  
  El horóscopo permanece visible por 15 segundos, tiempo durante el cual el botón queda deshabilitado.

- **AC5 – Fade-out y reactivación del botón:**  
  Después de 15 segundos, el mensaje desaparece con un efecto de desvanecimiento y el botón se habilita nuevamente.

## 🧱 Arquitectura MVC

Este proyecto implementa el patrón **MVC** dividiendo el código en tres capas:

- **Modelo (`model.js`)**: Contiene la lógica para determinar el signo zodiacal y obtener el horóscopo.
- **Vista (`view.js`)**: Administra la interfaz del usuario (DOM), mostrando mensajes y controlando interacciones visuales.
- **Controlador (`controller.js`)**: Coordina la lógica entre modelo y vista, gestiona eventos y aplica validaciones.

## 🚀 Despliegue

Este proyecto será desplegado en [Vercel](https://vercel.com/) como parte del entregable de la práctica. Para su uso, solo debe vincularse el repositorio con la plataforma.

---

**Desarrollado como ejercicio académico de arquitectura MVC en desarrollo web.**
