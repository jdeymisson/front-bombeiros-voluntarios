export const formatTime = (value, outputFormat = 'time') => {
  if (outputFormat === 'time') {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  } else if (outputFormat === 'minutes') {
    const [hours, minutes] = value.split(':').map((val) => parseInt(val, 10));
    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
      throw new Error('Formato de hora:minutos inválido. Certifique-se de usar o formato correto: "hora:minutos"');
    }
    return hours * 60 + minutes;
  } else {
    throw new Error('Formato de saída inválido. Use "time" ou "minutes".');
  }
};
