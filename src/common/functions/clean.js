export default function clean(o) {
    const obj = { ...o };
    for (var propName in obj) {
      if (
        obj[propName] === null ||
        obj[propName] === undefined ||
        obj[propName] === "" ||
        obj[propName] === "Columns"
      ) {
        delete obj[propName];
      }
    }
    return obj;
  }