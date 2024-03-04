if(!localStorage.getItem("easy")) {
    localStorage.setItem("easy", 0);
}
if(!localStorage.getItem("normal")) {
    localStorage.setItem("normal", 0);
}
if(!localStorage.getItem("hard")) {
    localStorage.setItem("hard", 0);
}

export const getItems = (item) => {
    return localStorage.getItem(item);
}

export const updateItems = (item, value) => {
    localStorage.setItem(item, value);
}

export const getItem = (item) => {
    return localStorage.getItem(item);
}
