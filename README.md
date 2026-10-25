# ReVuelta — PWA para GitHub Pages (todo en la raíz)

Este ZIP **no trae carpetas**: son 9 archivos sueltos. Así se suben directo a la raíz del
repositorio, que es justo lo que GitHub acepta sin complicaciones.

---

## 1. Contenido (9 archivos)

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El sitio completo (13 productos, ~2.5 MB, todo incrustado: fotos, estilos y lógica) |
| `manifest.webmanifest` | Nombre, colores, íconos y atajos de la app |
| `sw.js` | Service worker: permite abrirla sin internet |
| `icon-192.png` | Ícono de la app (192×192) |
| `icon-512.png` | Ícono grande (512×512) |
| `icon-maskable-512.png` | Ícono con zona segura para Android |
| `apple-touch-icon.png` | Ícono 180×180 para iPhone |
| `.nojekyll` | Opcional: evita que GitHub Pages procese el repo con Jekyll |
| `README.md` | Este archivo (puedes borrarlo del repo si quieres) |

Todas las rutas son **relativas** (`manifest.webmanifest`, `sw.js`, `icon-192.png`), así que
funciona igual en `usuario.github.io/revuelta/` que en un dominio propio.

---

## 2. Subirlo a GitHub (3 pasos)

1. Crea el repositorio, por ejemplo **`revuelta`**, público.
2. Entra al repo → botón **“Add file” → “Upload files”**.
3. **Descomprime el ZIP en tu compu y arrastra los archivos sueltos** (no el ZIP) a esa
   ventana → **Commit changes**.

   > No necesitas crear carpetas: los 8 archivos quedan uno al lado del otro en la raíz.

4. Ve a **Settings → Pages**:
   - *Source*: `Deploy from a branch`
   - *Branch*: `main` · carpeta `/ (root)`
   - **Save**

5. Espera 1–2 minutos. Tu enlace:
   `https://TU-USUARIO.github.io/revuelta/`

**Con terminal** (si prefieres):
```bash
git clone https://github.com/TU-USUARIO/revuelta.git
# copia los 9 archivos dentro de esa carpeta
cd revuelta
git add .
git commit -m "ReVuelta PWA"
git push
```

> El archivo `.nojekyll` empieza con punto: si tu compu lo oculta o el arrastre no lo toma,
> créalo con **Add file → Create new file** y nómbralo `.nojekyll` (vacío). No es
> obligatorio, la app funciona igual sin él.

---

## 3. Instalarla en el teléfono

**Android (Chrome)**
1. Abre el enlace `https://TU-USUARIO.github.io/revuelta/`
2. Aparece abajo el aviso *“Agregar ReVuelta a la pantalla principal”* → **Instalar**
3. Si no aparece: menú ⋮ → **Instalar aplicación**

**iPhone (Safari)** — tiene que ser Safari, no Chrome
1. Abre el enlace en Safari
2. Botón **Compartir** → **Añadir a pantalla de inicio**
3. Se abre a pantalla completa, con su ícono

> Solo se puede instalar en **HTTPS** (GitHub Pages ya lo da) o en `localhost`.
> Si abres `index.html` con doble clic se ve igual, pero **no** se instala.

---

## 4. Actualizar productos o precios

**Opción rápida (sin programas):** en GitHub abre `index.html` → lápiz ✏️ → busca
`const PRODUCTOS =` → cambia nombre/precio/estado → **Commit changes**.
En el teléfono, cierra y abre la app dos veces para que tome la versión nueva.

**Opción recomendada:** pídeme el ZIP de la carpeta `fuente/` (trae `productos.json`,
`template.html`, `build.py` y las fotos). Ahí editas `productos.json`, corres
`python3 build.py --pwa` y subes solo el `index.html` nuevo.

**Si cambias íconos o el diseño**, sube la versión del service worker en `sw.js`:
```js
const VERSION = "revuelta-v2";   // cámbialo para forzar la actualización en los teléfonos
```

---

## 5. Qué trae la app

- **13 productos** de segunda mano con precio: 5 collares, 3 de calzado, 3 juguetes, 2 peluches
- Carrito de pedido que se guarda en el teléfono
- Confirmación por **WhatsApp al 7947 0124** con el mensaje ya escrito
- Filtros por estado y categoría, fichas con galería de fotos
- Entrega en el **Parque Central de Jiquilisco**
- Ícono propio, pantalla completa y uso sin internet

## 6. Verificación después de subir

| Revisa | Cómo |
|---|---|
| Instalable | Chrome → menú ⋮ debe ofrecer *“Instalar aplicación”* |
| Ícono correcto | En la pantalla de inicio: etiqueta crema sobre café |
| Modo app | Al abrirla no se ve la barra de direcciones |
| Sin internet | Modo avión y ábrela: debe cargar |
| Service worker | DevTools → *Application → Service Workers* → **activated** |
| Manifest | DevTools → *Application → Manifest* → sin errores en rojo |

Si Chrome no ofrece instalarla, casi siempre es porque el `manifest.webmanifest` o el
`sw.js` no quedaron en la raíz del repo (revisa que la URL
`https://TU-USUARIO.github.io/revuelta/manifest.webmanifest` abra el archivo).

---

## 7. Si ya tienes otra app instalada del mismo GitHub (caso "Sopas y Asados")

**Qué significa el aviso de Chrome:** cuando instalas una web como app, Chrome la identifica
por su **dirección** (el origen + la ruta del `start_url`), no por el nombre. Si publicas otra
app en **la misma dirección** que una que ya estaba instalada, Chrome detecta que el nombre y
el ícono cambiaron y te pregunta:

> *"Revisa las actualizaciones del logotipo y el nombre: Sopas y Asados El Tortio → ReVuelta"*

No es un virus ni una app fantasma: es Chrome pidiendo permiso para **renombrar/recambiar el
ícono de la app que ya tenías instalada**, porque ahora esa dirección sirve otra cosa.

**Tus opciones:**

| Botón | Qué pasa |
|---|---|
| **Actualizar** | El ícono viejo pasa a ser ReVuelta. La app "Sopas y Asados" desaparece de la pantalla de inicio |
| **Desinstalar** | Quita la app vieja; después instalas ReVuelta con su propio ícono |
| **Ignorar** | Todo queda como está; el aviso puede volver a salir |

**Lo recomendable: darle a ReVuelta su propia dirección.** No necesitas carpetas, solo otro
repositorio:

1. Crea un repo nuevo llamado **`revuelta`**.
2. Sube ahí los mismos 9 archivos sueltos (raíz del repo `revuelta`).
3. Settings → Pages → `main` / `(root)`.
4. Nueva dirección: `https://stevealejo124.github.io/revuelta/`

Ahora cada app tiene su propia URL, así que **pueden convivir las dos** en la pantalla de
inicio sin que Chrome pregunte nada, y el catálogo de ReVuelta queda más fácil de compartir.

> ⚠️ **Atención:** si subiste ReVuelta al repositorio **`stevealejo124.github.io`** (el que
> sirve en la raíz), tu `index.html` anterior —el de Sopas y Asados— quedó reemplazado.
> Puedes recuperarlo desde el historial: abre el commit anterior en GitHub → *View file* →
> copiar el contenido, o `git revert` si trabajas por terminal. Mientras más pronto, mejor.

---

## 7. El aviso de Chrome ("Sopas y Asados -> ReVuelta")

**No reemplazaste nada**: los repos son distintos. La causa era el campo `id` del manifest.

Chrome identifica una app instalada por el campo **`id`** del manifest, no por el nombre ni
por la carpeta. El manifest traia:

    "id": "/"      ->  significa "la raiz del dominio" = stevealejo124.github.io

Si la otra app (Sopas y Asados / El Torito) tambien tiene `"id": "/"`, para Chrome **son la
misma app** aunque vivan en repos distintos. Por eso pide "actualizar el logotipo y el nombre".

**Ya esta corregido** en este manifest:

    "id": "./"     ->  identidad de ESTA carpeta (este repositorio)

Con `"./"` cada repo tiene su propia identidad: `.../ReVenta-Cosas-buenas-otra-vuelta/` es una
app y `.../El-torito-negocio-/` es otra. Pueden convivir en la pantalla de inicio.

### Pasos para que quede bien

1. Sube el `manifest.webmanifest` nuevo al repo (reemplaza el anterior).
2. En el telefono: **desinstala** la app ReVuelta instalada antes (mantener presionado ->
   Desinstalar). Ese icono quedo asociado al id viejo `"/"`.
3. Abre `https://stevealejo124.github.io/ReVenta-Cosas-buenas-otra-vuelta/` e instalala de
   nuevo: ahora aparece como app independiente.
4. Si el aviso vuelve a salir, revisa el manifest de la otra app y ponle tambien `"id": "./"`.
   Con uno de los dos corregido, el conflicto desaparece.

> Si la otra app tambien tiene `"id": "./"` y aun asi aparece el aviso, dale a **Ignorar**: no
> rompe nada y ambas siguen funcionando.

---

## 8. Si Chrome SIGUE diciendo que la app es de "El Torito"

El sitio ya está bien publicado. Lo que queda es que **Chrome está leyendo un manifiesto
viejo** que su propio service worker guardó en caché. Este ZIP lo arregla:

- `sw.js` sube a **`revuelta-v2`** y ahora pide el manifest **siempre a la red**
  (antes lo servía de caché, por eso seguía viendo `"id": "/"`).
- El `<link rel="manifest">` apunta a **`manifest.webmanifest?v=2`**, así Chrome trata el
  manifiesto como nuevo y lo relee en lugar de usar el guardado.
- El manifest mantiene **`"id": "./"`** (identidad propia de esta carpeta).

### Qué subir al repo

Solo estos **3 archivos** (arrástralos sobre los que ya están):

1. `sw.js`
2. `manifest.webmanifest`
3. `index.html`

Espera 1–2 minutos a que GitHub Pages publique.

### Qué hacer en la computadora (Chrome de escritorio)

1. Cierra la app ReVuelta que tengas abierta y **todas** las pestañas del sitio.
2. Abre `chrome://apps` → si ves **Sopas y Asados El Torito** y/o **ReVuelta**, borra la que
   se haya actualizado mal (*clic derecho → Quitar de Chrome*).
3. Entra otra vez a `https://stevealejo124.github.io/ReVenta-Cosas-buenas-otra-vuelta/`
   y recarga con **Ctrl + Shift + R**.
4. Instálala de nuevo desde el ícono de instalar de la barra de direcciones.

> La barra dice **“Abrir en la app”** porque Chrome ya considera esa URL instalada. Ese botón
> es normal en PWAs; lo que había que arreglar era el nombre y el ícono equivocados.

### En el teléfono

Mantén presionado el ícono → **Desinstalar**, y vuelve a instalarla desde el enlace.
Si el aviso “Revisa las actualizaciones…” aparece otra vez, toca **Ignorar**: no rompe nada,
el sitio funciona igual en el navegador.

---

## 9. POR QUÉ SIGUE PASANDO (y cómo se acaba de una vez)

Las dos apps viven en **el mismo dominio**: `stevealejo124.github.io`.
GitHub Pages no da un dominio propio por repositorio: solo cambia la carpeta
(`/ReVenta-Cosas-buenas-otra-vuelta/` y `/El-torito-negocio-/`), pero el **dominio es el
mismo**. Chrome trata cada dominio como "un sitio", así que con dos web apps instaladas en el
mismo dominio se confunde y te ofrece abrir El Torito con la app de ReVuelta.

Eso no lo arregla el manifest: ni el `id`, ni el `scope`, ni reinstalar. El `id: "./"` y el
`sw v2` sí corrigieron el nombre y el ícono, pero **la mezcla entre las dos apps es del
dominio compartido**.

### Solución definitiva: darle a ReVuelta su propio dominio (gratis, 3 minutos)

**Netlify Drop** — no hace falta tarjeta ni instalar nada:

1. Entra a **https://app.netlify.com/drop**
2. Arrastra **la carpeta** donde tengas estos archivos (`index.html`, `manifest.webmanifest`,
   `sw.js` y los 4 íconos).
3. Netlify te da una dirección tipo `https://revuelta-abc123.netlify.app` (puedes cambiarla
   en *Site settings → Change site name* a `https://revuelta-jiquilisco.netlify.app`).
4. Abre ese enlace en el teléfono → **Instalar aplicación**.

Resultado: ReVuelta queda en `netlify.app` y El Torito en `github.io`. **Dominios distintos =
apps totalmente independientes**, sin avisos, sin cruces, y el enlace de ReVuelta es más corto
para mandar por WhatsApp.

> ¿Prefieres que El Torito se mueva? También sirve. Solo tienen que quedar en **dominios
> diferentes**. Alternativas igual de gratis: Cloudflare Pages, Vercel, Firebase Hosting.

### Mientras tanto (si te sale el cartel)

- El botón del cartel es solo **una sugerencia de Chrome**, no un error: la página de El Torito
  sigue funcionando en el navegador. Toca la **✕** y sigue.
- No marques *“Recordar esta opción”* con la app equivocada, o Chrome lo hará siempre.
- La app de El Torito y la de ReVuelta **no se dañan** entre sí: son archivos separados en
  repos separados.

---

## 10. Botón "Instalar app" (nuevo)

Como Chrome no siempre muestra su cartel de instalación, el sitio ahora trae su **propio
botón**: aparece **abajo a la izquierda** (el flotante verde de WhatsApp sigue abajo a la
derecha, no chocan).

**Cómo funciona**

1. Si el navegador **sí** ofrece instalar (`beforeinstallprompt`), el botón lanza el instalador
   nativo de Chrome con un toque.
2. Si el navegador **no** lo ofrece, el botón abre una ventana con los **pasos según el
   dispositivo**:
   - **iPhone/Safari** → Compartir → *Añadir a pantalla de inicio*
   - **Android/Chrome** → menú ⋮ → *Instalar aplicación*
   - **Computadora** → ícono de instalar en la barra de direcciones
3. Cuando la app **ya está instalada** (se abre en modo `standalone`), el botón **no aparece**.
4. Al instalarla, desaparece solo y no vuelve a molestar.

**Qué subir:** solo `index.html` (el botón va dentro del HTML). Los íconos, `sw.js` y el
manifest no cambian.

> Este botón solo existe en la versión PWA (`build.py --pwa`). El `index.html` "normal" del
> proyecto no lo incluye, por si algún día publicas el sitio como web sencilla.
