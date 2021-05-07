const pug = require('pug');


const tpl = `
html
  head
    title=titulo
  body
    header
      h1=titulo
    div.clasess
      div#id
        p=mensaje
`;
const params = {
  titulo: 'Hola mundo',
  mensaje: 'Hola desde pug',
}

console.log(pug.render(tpl, params));