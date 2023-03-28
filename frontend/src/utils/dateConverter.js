export default function DateConverter(date) {
    const newDate = new Date(date);
    const options = {
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };
    const formattedDate = newDate
        .toLocaleDateString('es-MX', options)
        .replace(/\//g, '-');

    return formattedDate;
}
