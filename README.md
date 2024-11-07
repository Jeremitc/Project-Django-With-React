# Proyecto Next.js con Django REST Framework

Este proyecto es una aplicación web que integra un backend desarrollado en Django REST Framework (DRF) con un frontend construido utilizando Next.js, el framework de React. La arquitectura separa claramente el backend y el frontend, facilitando el desarrollo, mantenimiento y escalabilidad de la aplicación.

## Descripción del Proyecto

La aplicación está diseñada para gestionar información y ofrecer una experiencia de usuario moderna y eficiente. Django REST Framework se encarga de manejar las API para operaciones CRUD, mientras que Next.js proporciona una interfaz de usuario optimizada con renderizado del lado del servidor (SSR) y capacidades de SPA (Single Page Application).

- **Backend (Django REST Framework)**: Gestiona la lógica de negocio, la base de datos, y expone endpoints RESTful para que el frontend pueda interactuar con los datos.
- **Frontend (Next.js)**: Proporciona una interfaz de usuario moderna e interactiva, aprovechando el renderizado del lado del servidor para mejorar el rendimiento y la experiencia del usuario.

## Características

- **Frontend moderno con Next.js**: Utiliza las capacidades de SSR y optimización de rutas para mejorar la experiencia del usuario.
- **Backend robusto con DRF**: Maneja la lógica de negocio y proporciona una API RESTful para la interacción con los datos.
- **API RESTful**: Comunicación entre el frontend y el backend a través de API bien estructuradas para operaciones CRUD.
- **Autenticación**: Implementación de autenticación para gestionar el acceso a ciertos recursos y proteger la información del usuario.

## Requisitos Previos

- **Python**: Versión 3.8 o superior.
- **Node.js y npm**: Necesarios para instalar y ejecutar Next.js.
- **Django y Django REST Framework**: Para el backend del proyecto.
- **Next.js**: Para el desarrollo del frontend.

## Instalación y Configuración

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/Jeremitc/Project-Django-With-React.git
   ```

2. **Backend**:
   - Navegar al directorio del backend e instalar las dependencias de Python usando `pip`:
     ```bash
     cd backend
     pip install -r requirements.txt
     ```
   - Realizar migraciones para configurar la base de datos:
     ```bash
     python manage.py makemigrations
     python manage.py migrate
     ```
   - Iniciar el servidor de desarrollo de Django:
     ```bash
     python manage.py runserver
     ```

3. **Frontend (Next.js)**:
   - Navegar al directorio del frontend e instalar las dependencias de Node:
     ```bash
     cd frontend
     npm install
     ```
   - Iniciar el servidor de desarrollo de Next.js:
     ```bash
     npm run dev
     ```

4. **Acceder a la Aplicación**:
   - El backend se ejecutará en `http://localhost:8000` y el frontend se ejecutará en `http://localhost:3000`.

## Estructura del Proyecto

- **backend/**: Contiene el código del servidor desarrollado con Django, incluyendo configuraciones, vistas, modelos y APIs.
  - **form_apli/**: Aplicación principal del backend.
    - **migrations/**: Gestiona los cambios en la base de datos.
    - **static/**: Archivos estáticos como CSS y JavaScript.
    - **templates/**: Plantillas HTML utilizadas en las vistas.
    - **views.py**: Define las vistas para manejar las solicitudes HTTP.
    - **models.py**: Contiene los modelos de datos del proyecto.
    - **forms.py**: Define los formularios usados en la aplicación.
    - **urls.py**: Configuración de rutas para el backend.

- **frontend/**: Contiene la aplicación Next.js para el cliente.
  - **pages/**: Páginas principales de la aplicación, donde cada archivo representa una ruta.
  - **components/**: Componentes reutilizables de la interfaz.
  - **public/**: Archivos públicos como `favicon.ico` y otros recursos estáticos.
  - **services/**: Servicios para interactuar con el backend (llamadas a la API).

## Contribuciones

Las contribuciones son bienvenidas. Si desea mejorar este proyecto:

1. Haga un fork del repositorio.
2. Cree una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realice sus cambios y haga commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haga push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Cree un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo `LICENSE` para más detalles.

---
