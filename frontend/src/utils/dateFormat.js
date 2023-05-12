export default function dateFormat(fechaHora){
  let fecha = new Date(fechaHora);
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let anio = fecha.getFullYear() % 100;
  dia = ('0' + dia).slice(-2);
  mes = ('0' + mes).slice(-2);
  anio = ('0' + anio).slice(-2);
  let formatoDeseado = dia + '/' + mes + '/' + anio;
  return formatoDeseado;
}