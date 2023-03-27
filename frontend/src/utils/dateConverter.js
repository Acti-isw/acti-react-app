export default function DateConverter (){
  const date = new Date();
  const options = {
      timeZone: 'America/Mexico_City',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
  };
  const formattedDate = date
      .toLocaleDateString('es-MX', options)
      .replace(/\//g, '-');

      return formattedDate;
}