export function orderByProps(obj, orders) {
  const arr = [];
  const sortedProps = [];
  const copyObj = { ...obj };
  orders.forEach((el) => {
    // eslint-disable-next-line no-prototype-builtins
    if (copyObj.hasOwnProperty(el)) {
      arr.push({ key: el, value: copyObj[el] });
      delete copyObj[el];
    }
  });
  // eslint-disable-next-line guard-for-in
  for (const i in copyObj) {
    sortedProps.push({ key: i, value: copyObj[i] });
  }
  sortedProps.sort((a, b) => a.key.localeCompare(b.key));
  return [...arr, ...sortedProps];
}

export function specialPower({ special }) {
  const arr = [];
  for (const item of special) {
    const {
      description = 'Описание не доступно', icon, id, name,
    } = item;
    arr.push({
      description, icon, id, name,
    });
  }
  return arr;
}
