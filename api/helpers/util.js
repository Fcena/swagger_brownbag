export const retrieveSwaggerParam = (swagger, prop) =>
  swagger.params[prop].value;

export const removeProperties = properties => obj =>
  Object.keys(obj).reduce(
    (acc, key) =>
      properties.indexOf(key) > -1 ? acc : { ...acc, [key]: obj[key] },
    {}
  );
