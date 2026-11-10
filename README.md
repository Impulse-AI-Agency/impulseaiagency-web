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
.github/          Despliegue automático por FTP
```

## Antes de publicar: edita esto

1. **js/main.js → `CONFIG`**: tu enlace de calendario, tu correo y tu LinkedIn.
2. **contact.php**: `$TO_EMAIL` (quién recibe los contactos).
3. **Garantía (sección "Compromiso de resultados")**: revisa que estés de acuerdo con ofrecerla, o cámbiala en `index.html` y en `js/main.js` (`guarantee.text`).

## Idiomas

- Visitantes con navegador en español ven la web en español; el resto (por ejemplo, EE.UU.) en inglés.
- El botón ES / EN cambia el idioma y se recuerda.
- Enlaces directos: `https://impulseaiagency.com/?lang=en` y `?lang=es`.
- Para editar textos: el español está en `index.html`, el inglés en `js/main.js` (objeto `EN`).

## Despliegue: GitHub → BanaHosting (automático por FTP)

Cada vez que se actualiza la rama `main`, GitHub sube la web a BanaHosting
(archivo `.github/workflows/deploy.yml`).

Configuración (una sola vez):
1. En cPanel → **FTP Accounts**, crea una cuenta FTP cuyo directorio sea `public_html`.
2. En GitHub → repositorio → **Settings → Secrets and variables → Actions → New repository secret**, crea:
   - `FTP_SERVER`: `ftp.impulseaiagency.com`
   - `FTP_USERNAME`: el usuario FTP completo (por ejemplo `deploy@impulseaiagency.com`)
   - `FTP_PASSWORD`: la contraseña de esa cuenta FTP
3. En la pestaña **Actions**, abre "Publicar en BanaHosting" → **Run workflow**.

## Para que el formulario no caiga en spam

El formulario envía el correo desde el servidor de BanaHosting. Para que Google lo acepte, el SPF debe autorizar también ese servidor. En **Zone Editor**, deja el registro SPF así:

```
v=spf1 a include:_spf.google.com ~all
```

(La `a` autoriza la IP de tu hosting, que es la misma de tu sitio).
