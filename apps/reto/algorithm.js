
function getnDoctors(doctorsCapacities = [], attentionHours, nDoctors = 0) {
  if (attentionHours === 0 || !doctorsCapacities.length) return nDoctors;

  let newnDoctors = nDoctors;
  let newAttentionHours = attentionHours;
  let idxToDelete = 0;
  let existCombination = false;

  const lessCapacities = doctorsCapacities.filter((v) => v <= attentionHours);
  const dividers = lessCapacities.map((v) => attentionHours / v);

  for (let i = 0; i < dividers.length; i++) {
    const value = lessCapacities[i];
    const divider = dividers[i];
    const remainder = attentionHours % value;

    if (remainder === 0) {
      newnDoctors = nDoctors + divider;
      newAttentionHours = 0;
      idxToDelete = i;
      existCombination = true;
      break
    }

    const arrayWithoutValue = lessCapacities.slice(i + 1);

    if (!arrayWithoutValue.length) break;

    // Verificar si al menos 1 elemento de capacities es menor que el residuo
    const existEleLeast = arrayWithoutValue.some((v) => v <= remainder);

    if (existEleLeast) {
      newnDoctors = nDoctors + Math.floor(divider);
      newAttentionHours = remainder;
      existCombination = true;
      break
    }
  }

  if (!existCombination) return -1;

  const copyDoctorsCapacities = lessCapacities.slice(idxToDelete + 1);

  return getnDoctors(copyDoctorsCapacities, newAttentionHours, newnDoctors);
}

export function minDoctoresRequeridos(doctorsCapacities, attentionHours) {
 //desarrollo del algoritmo
 const sortDoctorsCapacities = [...doctorsCapacities].sort((a, b) => b - a);
  return getnDoctors(sortDoctorsCapacities, attentionHours, 0);
}

//ejemplo de prueba - atencion la suite de pruebas está en el archivo  .test.js
const doctorsCapacities = [3, 5, 8];
const attentionHours = 14;
console.log(minDoctoresRequeridos(doctorsCapacities, attentionHours)); // Salida: 3 (doctor de 8 horas + 2 doctores de 3 horas = 14 horas)
 
