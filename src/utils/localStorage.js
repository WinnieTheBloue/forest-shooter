if (!localStorage.getItem("easy")) {
    localStorage.setItem("easy", 0);
}
if (!localStorage.getItem("normal")) {
    localStorage.setItem("normal", 0);
}
if (!localStorage.getItem("hard")) {
    localStorage.setItem("hard", 0);
}

/**
 * Retrieves the score for a specified item (game level) from localStorage.
 * @param {string} item - The name of the game level (e.g., "easy", "normal", "hard").
 * @returns {string|null} The score as a string, or null if the item does not exist.
 */
export const getItems = (item) => {
    return localStorage.getItem(item);
}

/**
 * Updates the score for a specified item (game level) in localStorage.
 * @param {string} item - The name of the game level (e.g., "easy", "normal", "hard").
 * @param {number} value - The new score to set for the specified game level.
 */
export const updateItems = (item, value) => {
    localStorage.setItem(item, value);
}

/**
 * Retrieves the score for a specified item (game level) from localStorage.
 * This function is essentially an alias for getItems, demonstrating an alternative naming convention or potential refactor.
 * @param {string} item - The name of the game level (e.g., "easy", "normal", "hard").
 * @returns {string|null} The score as a string, or null if the item does not exist.
 */
export const getItem = (item) => {
    return localStorage.getItem(item);
}