// Paso #1 Tener el arreglo de las excusas

const columnaA = [
  "En cuanto terminemos de ajustar el concept art",
  "Apenas logremos coherencia en el storyboard",
  "Cuando el estilo visual quede definido",
  "En cuanto optimicemos los modelos 3D",
  "Cuando compile correctamente el proyecto",
  "Apenas integremos todas las escenas",
  "Cuando resolvamos los bugs de interacción",
  "En cuanto tengamos feedback del profesor",
  "Cuando terminemos de texturizar los assets",
  "Apenas ajustemos la iluminación final"
];

const columnaB = [
  "del personaje principal",
  "del entorno 3D",
  "del prototipo jugable",
  "del sistema de animación",
  "del motor gráfico",
  "del pipeline de render",
  "del storyboard animado",
  "del sistema de partículas",
  "del rig de personajes",
  "del código de interacción"
];

const columnaC = [
  "subimos la entrega final",
  "exportamos la versión definitiva",
  "renderizamos todo en alta calidad",
  "dejamos listo el build jugable",
  "entregamos el proyecto completo",
  "actualizamos la documentación visual",
  "presentamos el demo funcional",
  "publicamos los assets finales",
  "cerramos el proyecto para revisión",
  "entregamos sin errores (esperemos)"
];

function generarExcusa() {
    const excusaA = columnaA[Math.floor(Math.random() * columnaA.length)];
    const excusaB = columnaB[Math.floor(Math.random() * columnaB.length)];
    const excusaC = columnaC[Math.floor(Math.random() * columnaC.length)];
    
    const excusaFinal = `Mi excusa es: ${excusaA} ${excusaB} ${excusaC}.`;
    
    document.getElementById("excusa").textContent = excusaFinal;
}

generarExcusa();