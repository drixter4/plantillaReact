# 🚀 Uso de Snippets en VSCode y Conversión de Plantillas HTML a React

Este documento explica cómo agregar un snippet personalizado en **Visual
Studio Code**, cómo usarlo para generar componentes en React y cómo
convertir el HTML de una plantilla en JSX.

------------------------------------------------------------------------

## 📌 1. Agregar Snippet Personalizado a VSCode

Para usar el snippet que genera automáticamente la estructura base de un
componente React:

### **Pasos para agregarlo:**

1.  Abre **VSCode**
2.  Presiona **CTRL + Shift + P**
3.  Escribe: `Preferences: Configure User Snippets`
4.  Selecciona: **javascriptreact.json**
5.  Pega el siguiente contenido:

``` json
{
  "Print React Component": {
    "prefix": "reactcom",
    "body": [
      "export default function ${TM_FILENAME/\\..+$//}() {",
      "  return(",
      "    <section className=''>",
      "      ",
      "    </section>",
      "  );",
      "}"
    ],
    "description": "Print the structure of a react component"
  }
}
```

------------------------------------------------------------------------

## 🧪 2. Cómo usar el snippet

1.  Crea un archivo: `MiComponente.jsx`
2.  Escribe el comando:

```{=html}
<!-- -->
```
    reactcom

3.  Presiona **TAB**
4.  Se generará automáticamente esta estructura:

``` jsx
export default function MiComponente() {
  return (
    <section className="">

    </section>
  );
}
```

------------------------------------------------------------------------

## 📁 3. Preparar la plantilla correctamente

### ✔️ Copiar `index.js`

Copia el archivo de JavaScript de tu plantilla dentro de tu proyecto,
normalmente en:

    /src/assets/js/index.js

### ✔️ Cargar los estilos *solo con loadCss()*

No se deben agregar `<link>` en `public/index.html`.\
Todo debe cargarse mediante tu función `loadCss`.

Ejemplo:

``` js
loadCss('/assets/css/plantilla.css');
```

### ✔️ Cargar scripts *solo con loadScript()*

No se deben poner `<script src="">` en el HTML.\
Tu proyecto debe cargar los scripts así:

``` js
loadScript('/assets/js/index.js');
```

Esto asegura que React cargue los recursos correctamente al iniciar.

------------------------------------------------------------------------

## 🛠 4. Convertir HTML de la plantilla a JSX

Cuando uses el snippet, pega tu HTML en el `<section>` y adáptalo a JSX.

### ✔️ 1. Pegar HTML dentro del componente

``` jsx
<section className="">
  <!-- Aquí pega tu HTML -->
</section>
```

### ✔️ 2. Cambiar `class` por `className`

HTML:

``` html
<div class="card">
```

JSX:

``` jsx
<div className="card">
```

### ✔️ 3. Cerrar etiquetas

React requiere:

``` jsx
<img />
<input />
<br />
<hr />
```

### ✔️ 4. Convertir estilos

HTML:

``` html
<div style="color: red; margin-top: 10px;">
```

React:

``` jsx
<div style={{ color: "red", marginTop: "10px" }}>
```

------------------------------------------------------------------------

## ✔️ Ejemplo Final

``` jsx
export default function Home() {
  return (
    <section className="container">
      <div className="card">
        <img src="/img/banner.png" alt="Banner" />
        <input type="text" placeholder="Nombre" />
      </div>
    </section>
  );
}
```

------------------------------------------------------------------------

Si necesitas agregar más snippets, loaders o un ejemplo completo
convertido, te lo preparo.
