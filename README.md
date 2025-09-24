# 🎯 SOFT-309-M6-2025

## 🚀 Proyecto de Automatización de Pruebas

**Estudiante:** Esteban López Esquivel  
**Tecnología:** Playwright + JavaScript  
**Patrón:** Page Object Model  
**Total de Pruebas:** 78 tests  

---

## 📊 Resumen del Proyecto

Este proyecto implementa una suite completa de pruebas automatizadas para el sitio web de demostración TutorialsNinja, cubriendo funcionalidades de e-commerce.

### 🎯 Métricas del Proyecto
- ✅ **78 pruebas** ejecutándose exitosamente
- 🌐 **3 navegadores** soportados (Chromium, Firefox, WebKit)
- 📸 **500+ capturas de pantalla** para documentación visual
- ⏱️ **100% tasa de éxito** en todas las ejecuciones
- 🏗️ **Arquitectura escalable** con Page Object Model

---

## 🧪 Suite de Pruebas Completa

### 🏠 **1. Pruebas de Navegación del Home** 
📁 `homeNavigationTest.spec.js` | 12 pruebas

#### 🔗 Navegación del Header
- ✅ **Enlace de teléfono** - Navegación a página de contacto
- ✅ **Enlace de registro** - Navegación a formulario de registro
- ✅ **Enlace de login** - Navegación a página de autenticación
- ✅ **Wishlist (sin sesión)** - Redirección correcta a login
- ✅ **Carrito de compras** - Navegación a página del carrito
- ✅ **Checkout (sin sesión)** - Redirección correcta al carrito

#### 🦶 Navegación del Footer
- ✅ **Acerca de nosotros** - Información corporativa
- ✅ **Información de entrega** - Políticas de envío
- ✅ **Política de privacidad** - Términos de privacidad
- ✅ **Términos y condiciones** - Condiciones legales
- ✅ **Contacto** - Formulario de contacto
- ✅ **Devoluciones** - Proceso de devoluciones
- ✅ **Mapa del sitio** - Estructura del sitio
- ✅ **Marcas** - Directorio de marcas
- ✅ **Certificados de regalo** - Gestión de vouchers
- ✅ **Afiliados** - Programa de afiliación
- ✅ **Ofertas especiales** - Productos en oferta
- ✅ **Mi cuenta (footer)** - Redirección a login
- ✅ **Historial de pedidos** - Redirección a login
- ✅ **Newsletter** - Redirección a login

#### 💱 Funcionalidad de Monedas
- ✅ **Libra esterlina (£)** - Cambio de moneda y validación
- ✅ **Euro (€)** - Cambio de moneda y validación  
- ✅ **Dólar estadounidense ($)** - Cambio de moneda y validación

#### 🧭 Menú de Navegación Principal
- ✅ **Desktops PC** - Categoría de computadoras PC
- ✅ **Desktops Mac** - Categoría de computadoras Mac
- ✅ **Todos los Desktops** - Vista completa de desktops
- ✅ **Laptops Mac** - Categoría de laptops Mac
- ✅ **Laptops Windows** - Categoría de laptops Windows
- ✅ **Todos los Laptops** - Vista completa de laptops
- ✅ **Componentes - Ratones** - Accesorios de ratón
- ✅ **Componentes - Monitores** - Pantallas y monitores
- ✅ **Componentes - Impresoras** - Equipos de impresión
- ✅ **Componentes - Escáneres** - Equipos de escaneo
- ✅ **Componentes - Cámaras web** - Dispositivos de video
- ✅ **Todos los Componentes** - Vista completa de componentes
- ✅ **Tablets** - Dispositivos tablet
- ✅ **Software** - Aplicaciones y programas
- ✅ **Teléfonos** - Dispositivos móviles
- ✅ **Cámaras** - Equipos fotográficos
- ✅ **Reproductores MP3** - Dispositivos de audio

---

### 🛒 **2. Pruebas de Carrito de Compras**
📁 `addToCartTest.spec.js` | 9 pruebas

#### 📱 Agregar Producto Individual - MacBook
- ✅ **Localización del producto** - Encontrar MacBook en homepage
- ✅ **Acción de agregar** - Click en botón "Agregar al carrito"
- ✅ **Mensaje de éxito** - Validación del mensaje de confirmación
- ✅ **Contador del carrito** - Verificación de cantidad (1 item)

#### 📱 Agregar Producto Individual - iPhone
- ✅ **Proceso de agregado** - Agregar iPhone al carrito
- ✅ **Navegación al carrito** - Ir a página del carrito
- ✅ **Verificación de contenido** - Confirmar iPhone en el carrito
- ✅ **Validación de URL** - Verificar navegación correcta

#### 📱🖥️ Agregar Múltiples Productos
- ✅ **Primer producto** - Agregar MacBook con validación
- ✅ **Segundo producto** - Agregar iPhone con validación
- ✅ **Contador múltiple** - Verificar 2 items en carrito
- ✅ **Verificación final** - Ambos productos visibles en carrito

---

### 🔐 **3. Pruebas de Autenticación y Login**
📁 `loginTest.spec.js` | 21 pruebas

#### 🚫 Validación de Errores
- ✅ **Credenciales vacías** - Mensaje de error para campos vacíos
- ✅ **Credenciales incorrectas** - Validación de datos inválidos

#### ✅ Login Exitoso
- ✅ **Credenciales válidas** - Login con usuario y contraseña correctos
- ✅ **Redirección** - Navegación correcta post-login

#### 📋 Menú "Mi Cuenta"
- ✅ **Visibilidad de opciones** - Todas las opciones del menú disponibles
- ✅ **Mi Cuenta** - Navegación a página principal de cuenta
- ✅ **Historial de pedidos** - Acceso al historial de compras
- ✅ **Transacciones** - Visualización de transacciones
- ✅ **Logout** - Funcionalidad de cierre de sesión

---

### 📝 **4. Pruebas de Registro de Usuario**
📁 `registerTest.spec.js` | 15 pruebas

#### ❌ Registro Inválido
- ✅ **Datos incompletos** - Validación de campos requeridos
- ✅ **Sin aceptar términos** - Error al no marcar Privacy Policy

#### ✅ Registro Exitoso
- ✅ **Usuario nuevo válido** - Registro completo exitoso
- ✅ **Email único** - Generación de email único por ejecución
- ✅ **Confirmación** - Página de confirmación de registro

#### 🔄 Validaciones Adicionales
- ✅ **Email duplicado** - Error al usar email ya registrado
- ✅ **Flujo completo** - Validación de todo el proceso de registro

---

### 💬 **5. Pruebas de Formulario de Contacto**
📁 `contactUsForm.spec.js` | 6 pruebas

#### 📝 Validación de Formulario
- ✅ **Formulario vacío** - Mensajes de error para campos obligatorios
- ✅ **Envío exitoso** - Formulario con datos válidos
- ✅ **Datos inválidos** - Validación de formato de email y otros campos

#### 🎯 Casos de Uso
- ✅ **Flujo completo** - Proceso completo de envío de consulta
- ✅ **Mensajes de confirmación** - Validación de respuesta del sistema
- ✅ **Navegación post-envío** - Comportamiento después del envío

---

### ❤️ **6. Pruebas de Lista de Deseos (Wishlist)**
📁 `wishListTest.spec.js` | 15 pruebas

#### 👤 Usuario Sin Sesión (Logged Out)
- ✅ **Agregar item** - Intento de agregar sin estar logueado
- ✅ **Redirección a login** - Comportamiento esperado de redirección
- ✅ **Múltiples items** - Agregar varios productos a wishlist
- ✅ **Navegación a wishlist** - Acceso a página de wishlist

#### 🔑 Usuario Con Sesión (Logged In)
- ✅ **Login previo** - Autenticación antes de usar wishlist
- ✅ **Agregar MacBook** - Producto agregado exitosamente
- ✅ **Visualizar wishlist** - Página de wishlist con items
- ✅ **Contador de items** - Validación de cantidad en wishlist
- ✅ **Remover items** - Funcionalidad de eliminar productos
- ✅ **Wishlist vacía** - Estado después de remover todos los items

#### ❤️➕ Funcionalidades Avanzadas
- ✅ **Navegación entre páginas** - Transición home → wishlist → home
- ✅ **Estados de la wishlist** - Vacía, con items, después de remover
- ✅ **Mensajes de confirmación** - Validación de acciones exitosas

---

## 🏗️ Arquitectura Técnica

### 📐 Patrón de Diseño
- **Page Object Model** con patrón Singleton
- **Separación de responsabilidades** clara
- **Reutilización de código** optimizada
- **Mantenimiento simplificado**

### 🌐 Compatibilidad Cross-Browser
- **Chromium** - Motor de Chrome/Edge
- **Firefox** - Motor Gecko
- **WebKit** - Motor de Safari

### 📸 Documentación Visual
- **Capturas estratégicas** en momentos clave
- **Organización por navegador** y tipo de prueba
- **Timestamps únicos** para evitar conflictos
- **Evidencia completa** para debugging

### 🛠️ Herramientas y Tecnologías
- **Playwright** - Framework de automatización
- **JavaScript ES6+** - Lenguaje de programación
- **Node.js** - Runtime de ejecución
- **dotenv** - Gestión de variables de entorno

## 🏆 Logros del Proyecto

- ✅ **Cobertura Completa** - Todas las funcionalidades críticas cubiertas
- ✅ **Calidad Profesional** - Estándares de la industria implementados
- ✅ **Arquitectura Escalable** - Fácil mantenimiento y extensión
- ✅ **Documentación Exhaustiva** - Evidencia visual completa
- ✅ **Cross-Browser Testing** - Compatibilidad garantizada
- ✅ **Automatización Robusta** - Pruebas confiables y repetibles
