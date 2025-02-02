type Recipe = {
  variantKeys: string[];
  variantMap: { [key: string]: unknown };
};

export const getArgumentTypes = <R extends Recipe>(recipe: R) => {
  const keys = recipe.variantKeys;
  const values = recipe.variantMap;

  return keys.reduce(
    (acc, key) => {
      acc[key] = {
        control: "inline-radio",
        options: values[key],
      };
      return acc;
    },
    {} as Record<string, (typeof values)[string]>
  );
};

// type Recipe = {
//   variantKeys: string[];
//   variantMap: { [key: string]: string[] };
// };

// export const getArgumentTypes = <R extends Recipe>(recipe: R) => {
//   const { variantKeys, variantMap } = recipe;

//   return variantKeys.reduce(
//     (acc, key) => {
//       acc[key] = {
//         control: "inline-radio",
//         options: variantMap[key],
//       };
//       return acc;
//     },
//     {} as { [K in R["variantKeys"][number]]: { control: "inline-radio"; options: string[] } }
//   );
// };
