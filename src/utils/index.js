/* eslint-disable no-nested-ternary */

export const sortLists = (key, list, inverse) => (
  inverse
    ? [...list].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
    : [...list].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)));

export const flatByPages = (list, cutIndex) => {
  if (cutIndex && list) {
    const pages = [];
    let page = [];
    list.forEach((v, i) => {
      if (i === 0 || i % cutIndex !== 0) {
        page.push(v);
      } else {
        pages.push([...page]);
        page = [v];
      }
    });
    if (page.length >= 1) {
      pages.push([...page]);
    }
    return pages;
  }
  return null;
};

export const filterSearch = (array, queryToFilter, listFieldToSearch) => {
  const cs = listFieldToSearch; // por ej: ['id','name','status']
  // const cs = Object.keys(rs[0]);
  const queryLower = queryToFilter.toLowerCase();
  const findQuery = (r) => cs.some((c) => r[c].toString().toLowerCase().indexOf(queryLower) > -1);
  return array.filter(findQuery);
};

export const deleteFromArrayId = (array, idToDelete) => array.filter((el) => el.id !== idToDelete);

export const checkInArrayByName = (arr, name) => {
  arr.some((el) => el.name === name);
};

export const getDDMMAA = (date) => {
  const newDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateText = newDate.toLocaleDateString('es-ES', options);
  const dateSplited = dateText.split(' de ');
  return `${dateSplited[1].charAt(0).toUpperCase()}${dateSplited[1].slice(
    1,
  )} ${dateSplited[0]}, ${dateSplited[2]}`;
};
