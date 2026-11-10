# Impulse AI Agency — sitio web

Sitio estático bilingüe (ES/EN) en HTML, CSS y JavaScript, con un formulario de contacto en PHP.

## Estructura

```
index.html        Página principal (textos en español)
privacidad.html   Aviso de privacidad (ES + EN)
contact.php       Envía el formulario a tu correo
css/styles.css    Estilos
js/main.js        Idioma, menú, animaciones, formulario y traducciones al inglés
img/              Logo y favicon
.cpanel.yml       Instrucciones de despliegue para cPanel
```

## Antes de publicar: edita esto

1. **js/main.js → `CONFIG`**: tu enlace de calendario, tu correo y tu LinkedIn.
2. **contact.php**: `$TO_EMAIL` (quién recibe los contactos).
3. **.cpanel.yml**: cambia `TU_USUARIO_CPANEL` por tu usuario de cPanel.
4. **Garantía (sección "Compromiso de resultados")**: revisa que estés de acuerdo con ofrecerla, o cámbiala en `index.html` y en `js/main.js` (`guarantee.text`).

## Idiomas

- Visitantes con navegador en español ven la web en español; el resto (por ejemplo, EE.UU.) en inglés.
- El botón ES / EN cambia el idioma y se recuerda.
- Enlaces directos: `https://impulseaiagency.com/?lang=en` y `?lang=es`.
- Para editar textos: el español está en `index.html`, el inglés en `js/main.js` (objeto `EN`).

## Despliegue: GitHub → BanaHosting

1. Sube esta carpeta a un repositorio de GitHub (por ejemplo `impulseaiagency-web`).
2. En cPanel abre **Git™ Version Control** → **Create**.
   - Activa **Clone a Repository** y pega la URL del repositorio.
     - Si es privado, primero agrega una clave SSH de cPanel (*SSH Access*) como *Deploy key* en GitHub y usa la URL SSH (`git@github.com:...`).
   - Repository Path: por ejemplo `/home/TU_USUARIO_CPANEL/repositories/impulseaiagency-web` (**no** dentro de `public_html`).
3. Entra a **Manage** → pestaña **Pull or Deploy**:
   - **Update from Remote** trae los últimos cambios de GitHub.
   - **Deploy HEAD Commit** copia los archivos a `public_html` según `.cpanel.yml`.
4. Cada vez que cambies algo en GitHub, repite el paso 3.

## Para que el formulario no caiga en spam

El formulario envía el correo desde el servidor de BanaHosting. Para que Google lo acepte, el SPF debe autorizar también ese servidor. En **Zone Editor**, deja el registro SPF así:

```
v=spf1 a include:_spf.google.com ~all
```

(La `a` autoriza la IP de tu hosting, que es la misma de tu sitio).
