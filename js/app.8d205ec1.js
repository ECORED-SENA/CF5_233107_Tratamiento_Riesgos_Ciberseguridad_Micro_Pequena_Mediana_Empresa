(function(e){function n(n){for(var o,i,c=n[0],s=n[1],d=n[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"3e68f0cb","chunk-0206bfa0":"d7585eee","chunk-0c047e41":"7a1e8d4a","chunk-13a6037e":"2c3d5d7a","chunk-18f95272":"be20e8ae","chunk-25b302c8":"caed8dfb","chunk-26fc7596":"dac12bef","chunk-2c06842c":"f79121cc","chunk-2d0e96ec":"49006d13","chunk-2d208d90":"049e4150","chunk-2d21d0e2":"147624b9","chunk-2d22c123":"07108589","chunk-2d2747e2":"1504af81","chunk-2e80bb9a":"bbdb6215","chunk-319206de":"470a7f77","chunk-32334cb6":"21c12fcb","chunk-3c57cd7b":"ac248d9a","chunk-3d6834f6":"9e4fd6a9","chunk-4cdd78c0":"cc0ccbd6","chunk-4f2d402a":"ee3ef10e","chunk-4fde0a08":"4da81014","chunk-515a8379":"57f3a8de","chunk-53ccb27e":"ee38b6d3","chunk-55d286b8":"b8e12a63","chunk-59974754":"497635d8","chunk-6e1e538a":"e45c7fb5","chunk-766a929b":"800a38e6","chunk-c796899c":"96b97720","chunk-e8a7823a":"40d6a537","chunk-f2df7d2c":"99ea6ccd","chunk-fde47172":"c4c6ee0f",comple:"ae7dde95",creditos:"44b5ab34",glosario:"32520349",intro:"7d0b8d1f",referencias:"40fd1d0c",sintesis:"88904cee",tema1:"b11aa1ee",tema2:"ae52618b",tema3:"cfbbba94",tema4:"75fcc27b",tema5:"0d031b36"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"d1c45cdd","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"0375a043","chunk-6e1e538a":"126808df","chunk-766a929b":"baf7d6d6","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"c534efb1",creditos:"6d92266f",glosario:"2ed0b68b",intro:"31d6cfe0",referencias:"f147dee8",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===t))return n()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===t)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],f.parentNode.removeChild(f),a(r)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(f);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}t[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var f=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"0e4a":function(e,n,a){e.exports=a.p+"img/punto_2.114bcb87.svg"},"22da":function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.e10b92d1.svg"},"49a4":function(e,n,a){e.exports=a.p+"img/circle.3abe685d.svg"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=a("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),l=d.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");u["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return a.e("tema5").then(a.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Evaluación de la ciberseguridad en la organización",descripcionCurso:"El componente aborda conceptos clave para la generación de métricas de seguridad: el <i>Testing</i>, y su propósito en la seguridad de la información, el SIEM, una forma de hacer gestión para prevenir problemas de seguridad, el SOC, sitio para centralizar la operación de seguridad de los sistemas computacionales, y por último el concepto de recopilación de información para el entorno de seguridad informática.",fondoBannerPrincipal:a("22da"),imagenBannerPrincipal:a("698f"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("e8e1")},{clases:["banner-principal-decorativo-2"],imagen:a("ebaa")},{clases:["banner-principal-decorativo-3"],imagen:a("0e4a")},{clases:["banner-principal-decorativo-4"],imagen:a("49a4")},{clases:["banner-principal-decorativo-5"],imagen:a("49a4")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Métodos de métricas e indicadores de monitoreo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Características",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Tipos",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"<i>Testing</i> y monitoreo de la seguridad digital",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Tipos",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Características",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Software",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Fundamentos de SIEM - <i>Security Information and Event Management</i>",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Tipos",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Características",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Aplicación",hash:"t_3_3"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Fundamentos de SOC - <i>Security Operation Center</i>",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Objetivos",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Alcance",hash:"t_4_2"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Técnicas de recopilación de información (<i>Information gathering</i>)",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Tipos",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Características",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:"Aplicación",hash:"t_5_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Johnson, L. (2019). Security controls evaluation, testing, and assessment handbook. Academic Press."},{referencia:"National Institute of Standards and Technology. (2010). Guide for assessing the security controls in federal information systems and organizations  U.S. Department of Commerce."},{referencia:"<em>Harpersbazaar</em>. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.",link:"https://www.oracle.com/es/database/security/que-es-un-soc.html"}],glosario:[{termino:"AWS",significado:"Nube de Amazon."},{termino:"AZURE",significado:"Nube de Microsoft."},{termino:"DOS",significado:"Ataque de negación de servicio."},{termino:"SCI",significado:"Sistema de control interno."},{termino:"SCD",significado:"Sistema de control distribuido.."},{termino:"ACL",significado:"Listas de control de acceso."},{termino:"AAA",significado:"Autenticación, autorización y contabilidad."},{termino:"IDS",significado:"Sistemas de detección de intrusos."},{termino:"Sistemas ERP",significado:"Estaciones de trabajo de usuarios finales."},{termino:"PLC",significado:"Controlador lógico programable."},{termino:"DNS",significado:"Protocolo de sistema de nombres de dominio."},{termino:"DHCP",significado:"Protocolo de configuración dinámica de host."},{termino:"UI",significado:"Interfaz de usuario."},{termino:"Dockerfile",significado:"Archivo para configurar contenedores de Docker."}],complementario:[{tema:"Testing y monitoreo de la seguridad digital",referencia:"Mo, Y.  Hyun-Jin, T., Brancik, K., Dickinson, D., Lee, H., Perrig, A. and Sinopoli, B.  Cyber–Physical Security of a Smart Grid Infrastructure.  Proceedings of the IEEE, 100 (1), 195-209. ",tipo:"Artículo",link:"https://www.researchgate.net/profile/Yilin-Mo/publication/224257991_Cyber-Physical_Security_of_a_Smart_Grid_Infrastructure/links/004635395d2f66a584000000/Cyber-Physical-Security-of-a-Smart-Grid-Infrastructure.pdf "},{tema:"Técnicas de recopilación de información",referencia:"Owasp Foundation. (2021). Vulnerability scanning tools. Owasp.",tipo:"Página Web",link:"https://owasp.org/www-community/Vulnerability_Scanning_Tools"},{tema:"Estrategias para la segmentación de mercados",referencia:"Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas",tipo:"Video",link:"https://www.google.com/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable del equipo de Diseño Instruccional",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Joaquín Fernando Sánchez",cargo:"Experto temático",centro:"Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander"},{nombre:"Maribel Avellaneda Nieves",cargo:"Diseñadora instruccional",centro:"Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Asesora metodológica y pedagógica",centro:"Centro de Diseño y Metrología. - Regional Distrito Capital "},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Corrector de estilo",centro:"Centro de Diseño y Metrología. - Regional Distrito Capital "}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Angelo Andres Reina Montañez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gustavo Adolfo Marún Suárez",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Mayra Alejandra Alvarez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"698f":function(e,n,a){e.exports=a.p+"img/banner-principal.138a6e95.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},e8e1:function(e,n,a){e.exports=a.p+"img/candado.7a1f2595.svg"},ebaa:function(e,n,a){e.exports=a.p+"img/punto_1.30204422.svg"}});
//# sourceMappingURL=app.8d205ec1.js.map