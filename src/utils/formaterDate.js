import { utcToZonedTime, format } from 'date-fns-tz';

export const formaterDate = (dataStr) => {

  const saoPauloTime = utcToZonedTime(dataStr, 'America/Sao_Paulo');
  return format(saoPauloTime, 'dd/MM/yyyy HH:mm:ss');
};
