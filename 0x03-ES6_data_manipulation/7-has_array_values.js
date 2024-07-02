/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @returns {Boolean} - Returns true if the set contains all elements in the array, otherwise returns false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
