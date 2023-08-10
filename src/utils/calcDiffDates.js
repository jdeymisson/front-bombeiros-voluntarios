export const calcDiffDates = (entry, exit) => {
  const entryDate = new Date(entry);
  const exitDate = new Date(exit);

  if(entry > exit) {
    return 0;
  };

  if(entry && exit) {
    const diffMilisecs = Math.abs(exitDate - entryDate);
    const minutes = Math.floor(diffMilisecs / (1000 * 60));
    return minutes;
  };
};
