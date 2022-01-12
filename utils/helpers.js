module.exports = {
  //formate the date that comes forom the default model date values to MM/DD/YYYY
  format_date: (date) => {
    return date.toLocaleDateString();
  }
};