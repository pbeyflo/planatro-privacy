# Kraal en el iPhone

Aplicación de reparto de secciones, en un solo fichero HTML. No usa servidor:
todo se calcula y se guarda en el propio dispositivo.

## Cómo instalarla en el iPhone

1. Abre **Safari** (tiene que ser Safari, no Chrome) en esta dirección:
   `https://pbeyflo.github.io/planatro-privacy/kraal/`
2. Toca el botón de **Compartir** (el cuadrado con la flecha hacia arriba).
3. Elige **Añadir a pantalla de inicio**.

Queda como una app más: se abre a pantalla completa, sin barra del navegador, y
funciona sin cobertura.

> La dirección solo responde cuando la rama con estos ficheros está en `main`,
> que es de donde publica GitHub Pages.

## Cómo se maneja con el dedo

- **Tocar una ficha**: la coge y aparece abajo una barra con todas las secciones;
  toca la sección de destino y listo. Es la forma cómoda en pantalla pequeña.
- **Mantener pulsada una ficha** (un cuarto de segundo) y arrastrar: la ficha
  sigue al dedo y se suelta encima de la columna que quieras. Si acercas la ficha
  al borde superior o inferior, la página se desplaza sola.
- **Deslizar** sobre una ficha sin mantenerla pulsada mueve la página, como
  siempre.
- Al mover a mano, la ficha queda con candado para que el siguiente reparto la
  respete.

Con ratón y teclado no cambia nada: se arrastra igual, y con una ficha cogida los
números del 1 al 9 la mandan a esa sección.

## Los datos

Se guardan en el almacenamiento local del navegador y no salen del teléfono. Dos
avisos que conviene saber:

- Si borras el historial y los datos de Safari, se borran también.
- Instalada en la pantalla de inicio, iOS los conserva; abierta como una pestaña
  suelta y sin usarla durante semanas, el sistema puede limpiarlos.

Por eso está **Exportar JSON** en la pestaña *Datos*: en el iPhone abre la hoja de
compartir, y desde ahí puedes guardar la copia en Archivos o mandártela por
correo. **Importar JSON** la recupera.

## Ficheros

| Fichero | Para qué |
|---|---|
| `index.html` | La aplicación entera: interfaz, reparto y datos |
| `manifest.webmanifest` | Nombre, color e iconos al instalarla |
| `sw.js` | Copia local para poder abrirla sin conexión |
| `icono-*.png` | Icono de la pantalla de inicio |

Las pruebas del algoritmo de reparto siguen ahí: abre la consola del navegador y
escribe `pruebas()`.
