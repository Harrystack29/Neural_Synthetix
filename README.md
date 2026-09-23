# NEURAL SYNTHETIX — Sitio corporativo

## Arquitectura
Sitio corporativo estático, mobile-first y preparado para crecer hacia un backend. HTML5 semántico, CSS3 y JavaScript ES2022+, sin framework obligatorio.

## Archivos principales
- `index.html`: estructura y contenido.
- `css/style.css`: sistema visual, responsive y accesibilidad.
- `js/script.js`: navegación, scroll, animaciones, FAQ y validación del formulario.
- `pages/privacidad.html`: política base para adaptar legalmente.
- `pages/terminos.html`: términos base para adaptar legalmente.

## Ejecutar localmente
Puedes abrir `index.html` directamente en un navegador. Para una experiencia más cercana a producción, utiliza un servidor estático local, por ejemplo:
- VS Code + Live Server
- `python -m http.server 8000`

Luego visita `http://localhost:8000`.

## Formulario
El formulario actualmente valida en el navegador y muestra un estado informativo. NO simula un envío real.
Para producción:
1. Crear un endpoint HTTPS.
2. Repetir la validación en servidor.
3. Aplicar rate limiting y antispam.
4. Implementar CSRF si el esquema de sesión lo requiere.
5. Usar un proveedor de correo/CRM mediante credenciales del servidor.
6. Mantener secretos fuera del frontend.
7. Registrar únicamente los datos necesarios.

## Seguridad
Implementada en el frontend:
- Validación de campos.
- No uso de `innerHTML` para datos del formulario.
- No claves API públicas.
- Navegación por teclado.
- `prefers-reduced-motion`.
- Estados de foco.
- Enlaces legales.

Configuración recomendada en producción:
- HTTPS + HSTS.
- CSP adaptada a los recursos realmente utilizados.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy`.
- Permissions-Policy.
- Cookies Secure/HttpOnly/SameSite si se agregan sesiones.
- WAF/rate limiting según infraestructura.
- Actualización de dependencias y monitoreo.

## SEO
La página incluye title, description, robots, canonical base, Open Graph, jerarquía de headings y HTML semántico.
Antes de publicar:
- Cambiar `canonical` por el dominio real.
- Añadir `og:image` real.
- Crear `robots.txt` y `sitemap.xml` con el dominio real.
- Añadir datos estructurados solo con información empresarial real.

## Identidad
El isotipo del código es una marca geométrica provisional construida en CSS. Sustitúyelo por el isotipo oficial de NEURAL SYNTHETIX cuando esté disponible.

## Producción
No publicar los archivos legales sin revisión jurídica. Completar únicamente datos empresariales reales: dominio, entidad legal, correo, redes, jurisdicción y proveedores.
