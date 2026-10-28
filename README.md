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

---

## 11. Programa de vendedores (nuevo)

El sitio ahora permite que **otras personas vendan** en ReVuelta. Reglas aplicadas:

- **Comisión: 20%** del precio de venta
- **Mínimo: $1.50** por artículo vendido (aunque el 20% dé menos)
- Sin cuota de inscripción: solo se cobra cuando el artículo se vende
- Si no se vende, el vendedor no paga nada

### Qué se agregó

1. **Entrada "Vender" en el menú** y en el footer.
2. Sección **`#vender`** con: tarjeta de la comisión, **calculadora** (precio → comisión → lo que recibe el vendedor) y los 3 pasos del proceso.
3. **Formulario** que arma el mensaje de WhatsApp con: artículo, categoría, estado, precio, comisión calculada, lo que recibe, detalles, nombre y teléfono.
4. **Avisos automáticos** en la calculadora:
   - cuando se aplica el mínimo de $1.50
   - cuando el precio es tan bajo que el vendedor no recibiría nada (bloquea el envío y pide subir el precio, recomendando desde $3)
5. **Dos preguntas nuevas en el FAQ** explicando la comisión con ejemplos ($10 → $2 de comisión, recibe $8; $5 → se aplica el mínimo, recibe $3.50).
6. La tarjeta de "Nosotros" ahora dice la comisión y lleva a la sección, en lugar del enlace genérico anterior.

**Para cambiar la comisión**, en `index.html` busca:

```js
const VENTA = { pct: 0.20, minimo: 1.50 };
```

Y actualiza también los textos de la tarjeta y del FAQ para que digan el número nuevo.

**Qué subir al repo:** solo `index.html` (todo el programa vive dentro).

---

## 12. Vender ahora es una PÁGINA APARTE (`vender.html`)

Ya **no** está como sección con scroll en el catálogo. Es un archivo independiente:

| Archivo | Qué es |
|---|---|
| `index.html` | solo catálogo, compra y pedidos |
| **`vender.html`** | requisitos, costos, material, proceso y solicitud |

**Cómo se llega:** desde el menú (**Vender**), desde la tarjeta de “Nosotros” (“Ver requisitos
para vender”) y desde el footer. El catálogo no muestra la calculadora ni el formulario.

### Estructura de la página de vendedores

1. **Requisitos** (6 tarjetas, la última en rojo = lo prohibido)
   - Comunicarse primero con ReVuelta
   - Aceptar precio y comisión
   - Aceptar el costo de publicación
   - Información 100% real (no decir “nuevo” si es usado)
   - Material de publicación completo
   - Nada obsceno, ilegal, falsificado, robado ni peligroso
2. **Costos** con tabla y calculadora (precio + cantidad → publicación, comisión y lo que le queda)
3. **Material** que debe enviar el vendedor: fotos, flyer, información y precio
4. **Proceso** en 4 pasos
5. **Solicitud**: 4 casillas de aceptación obligatorias + datos. El botón está **desactivado
   hasta que acepta las 4**. El mensaje de WhatsApp va con la aceptación escrita, los datos y el
   resumen de costos calculado por el sitio.

### Precios de publicación que definí (editables)

| Concepto | Precio |
|---|---|
| Publicar 1 artículo (30 días) | **$0.25** |
| Pack 3 artículos | **$0.60** |
| Pack 5 artículos | **$0.90** |
| Renovar 30 días | **$0.15** |
| Comisión al vender | **20%**, mínimo **$1.50** |

Razonamiento: el catálogo mueve artículos de $3 a $15, así que un cobro de publicación alto
espantaría a los vendedores. $0.25 paga el tiempo de armar la ficha y mantenerla 30 días.
La comisión sigue igual (20% / mín. $1.50) porque es lo que ya se acordó por WhatsApp.

**Para cambiar cualquier precio**, en `vender.html` arriba del `<script>`:

```js
const CONFIG = {
  whatsapp: "50379470124",
  comisionPct: 0.20,
  comisionMin: 1.50,
  publicacion: { 1: 0.25, 3: 0.60, 5: 0.90 },
  renovacion: 0.15
};
```

Después de cambiarlos, actualiza también los textos de la tabla y de los requisitos para que
digan el número nuevo.

### Qué subir al repo

Ahora son **2 archivos nuevos/modificados**: `index.html` (ya no tiene la sección) y
**`vender.html`** (nuevo). Además cambió `sw.js` (versión v3 y cachea `vender.html`) y
`manifest.webmanifest` (atajo “Vender mi artículo”).

> El service worker v3 guarda `vender.html` en caché: la página de vendedores también abre
> sin internet.

---

## 13. Inventario: 1 pieza por artículo y estados de venta

Todos los artículos del catálogo son **pieza única**: `"stock": 1`. Cada producto tiene además un
campo nuevo, `"estadoVenta"`, con tres valores posibles:

| Valor | Qué se ve en el catálogo | Se puede comprar |
|---|---|---|
| `"disponible"` | Etiqueta **“Última pieza”** | Sí |
| `"apartado"` | Cinta verde **APARTADO** + precio normal | No (botón “Preguntar”) |
| `"vendido"` | Cinta roja **VENDIDO** + foto en gris + precio tachado | No (botón “Buscar uno similar”) |

**Marcados como vendidos ahora:** RV-004 (collar abalorios morados) y RV-005 (collar artesanal).

### Cómo cambiar el estado de un artículo

Edita `productos.json` y cambia la línea:

```json
"stock": 1,
"estadoVenta": "disponible"     ← "disponible" | "apartado" | "vendido"
```

Luego `python3 build.py --pwa` (o edita directo el `index.html` publicado).

### Mi recomendación sobre “vendido” vs “apartado”

Como la entrega es el **jueves** y todavía no los has entregado:

- **Si ya te pagaron o te confirmaron firme** → `"vendido"`.
- **Si solo está reservado y podría caerse** → `"apartado"` (se ve la cinta verde y el botón no
  deja comprar, pero no queda como venta cerrada).

Dejé los dos collares en `"vendido"` como pediste. Si el jueves alguno se cae, cambias una
palabra y vuelve a estar disponible.

### Otras cosas que se agregaron con esto

- **Filtro “Solo disponibles”** en la fila de Estado, con el conteo (hoy: 11).
- Los artículos vendidos **no se pueden agregar** al pedido, y si estaban en el carrito guardado
  de un cliente, se quitan automáticamente al abrir la página.
- La foto de cualquier tarjeta abre la ficha, también la de los vendidos, para que se vea el
  detalle y quede el botón “Buscar uno similar”.
- Nota en el catálogo: “Cada uno es pieza única: hay 1 disponible”.
- Pregunta nueva en el FAQ explicando por qué aparece algo vendido.

---

## 14. Producto nuevo: Tablet Samsung Galaxy Tab A (RV-014) · $25.00

Es el primer artículo de la categoría **Electrónica** (el chip aparece solo).

**Se resumió la publicación original sin perder nada importante.** En el sitio quedó:

- **Resumen corto** (lo que se ve en la tarjeta): modelo, RAM, almacenamiento y para qué sirve.
- **Descripción**: hardware bien / software viejo, con lo que sí puede hacer (leer PDFs, música,
  videos descargados, repuesto).
- **10 especificaciones**: modelo SM-T280, 1.5 GB RAM, 8 GB + Micro SD hasta 200 GB,
  Android 5.1.1, pantalla intacta, batería, carga Micro-USB, táctil/botones, altavoz y el
  detalle de la tapita de goma faltante.
- **Bloque nuevo “Importante antes de comprar”** (campo `advertencias` en `productos.json`):
  Android viejo, Gmail/Instagram/Facebook incompatibles, YouTube lento, no multitarea y que
  **no incluye cargador**.
- En la tarjeta se muestra un chip **“⚠ Ojo: lee los detalles”** cuando el producto tiene
  advertencias, para que nadie compre sin leer.

### Cómo usar `advertencias` en otros productos

```json
"notas": "Texto libre.",
"advertencias": [
  "Detalle negativo 1",
  "Detalle negativo 2"
]
```

Si el campo está vacío o no existe, el bloque no aparece.

**También se agregaron 6 fotos** (frontal, pantalla con Play Store, trasera, dos laterales y la
pantalla de ajustes con la versión de Android) como galería del producto.

---

## 15. Lociones Cyzone Nitro (RV-015) · una sola ficha, $15 cada una

Las dos colonias van **juntas en un solo producto**, no en dos publicaciones.

- **Nombre:** Lociones Cyzone Nitro para hombre
- **Precio:** $15.00 cada una
- **Stock:** 2 (1 Nitro + 1 Nitro Night)
- **Estado:** Nuevo
- **Categoría:** Perfumes
- **Fotos:** 2 (portada la caja negra, segunda la caja azul)

### Variantes (bloque nuevo en la ficha)
La ficha muestra dos recuadros con las especificaciones de cada loción:

| | **Nitro** (caja negra) | **Nitro Night** (caja azul) |
|---|---|---|
| Salida | Hojas verdes y cítricos | Jengibre fresco |
| Corazón | Acordes herbales frescos | Vetiver con matiz licoroso |
| Fondo | Pachulí y cedro | Ámbar cálido |
| Duración | ~8 horas | Alta concentración, larga duración |
| Uso | Día | Noche |

Datos generales: marca Cyzone (Colombia), eau de toilette masculina, 100 ml cada una,
familia herbal aromática, tecnología Essent Tech, vegana y libre de crueldad animal,
nuevas y selladas.

### Cómo se hizo (para futuras fichas)
El bloque de variantes se activa con el campo **`variantes`** en `productos.json`:

```json
"variantes": [
  { "nombre": "Nitro (caja negra)", "sub": "Herbal fresco · para el día",
    "specs": [["Salida", "Hojas verdes y cítricos"]] }
]
```
Si un producto no tiene `variantes`, la ficha se ve igual que siempre. Sirve para cualquier
producto con modelos o colores distintos: una sola publicación, varios recuadros.

### Flyer enlazado
El flyer de las lociones vive en el repo como **`flyer-perfumes-nitro.png`** (1080 × 1350,
formato feed de Instagram) y la ficha RV-015 lo abre con el botón **“📸 Ver flyer para redes”**.

- El enlace se activa con el campo **`"flyer": "flyers/flyer-perfumes-nitro.png"`** en `productos.json`.
- `build.py --pwa` copia el archivo a `pwa/` con su nombre plano, para que el enlace
  `./flyer-perfumes-nitro.png` funcione en GitHub Pages.
- `sw.js` (v8) lo precarga, así que también se abre sin internet.
- Si querés flyer de otro producto, se genera un PNG nuevo, se agrega el campo `flyer`
  a ese producto y se vuelve a compilar.
