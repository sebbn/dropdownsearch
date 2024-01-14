// variables
const body = document.querySelector("body"),
    input = document.querySelector("#language"),
    dropdown = document.querySelector(".dropdown"),
    dropdownList = document.querySelector(".dropdown_wrapper"),
    languages = document.querySelector("#languages");

let listItems = [];
const items = ["First", "Second", "Third", "Fourth", "Number 5", "six", "seven"];

// functions
const addActiveClass = (e) =>
{
    // Adds active class to dropdown
    dropdown.classList.toggle("active");
    dropdownList.classList.toggle("active");

    // Reset search input value
    e.target.value !== "" ? (e.target.value = "") : null;

    // fill list
    languages.innerHTML = "";
    listItems = [];
    for (let item of items)
    {
        const element = document.createElement("span");
        element.innerHTML = item;

        element.addEventListener("click", (e) =>
        {
            let val = e.target.innerHTML;
            // Update value of search input to chosen span
            input.value = val;
        });

        languages.append(element);
        listItems.push(element);
    }

    console.log("focused");
};

const rmvActiveClass = () =>
{
    // Removes active class
    dropdown.classList.remove("active");
    dropdownList.classList.remove("active");
};

const filterList = () =>
{
    let filter = input.value.toLowerCase().trim();
    languages.innerHTML = "";
    listItems = [];
    for (let item of items)
    {
        if (item.includes(filter) || filter == "")
        {
            const element = document.createElement("span");
            element.innerHTML = item;

            element.addEventListener("click", (e) =>
            {
                let val = e.target.innerHTML;
                // Update value of search input to chosen span
                input.value = val;
            });

            languages.append(element);
            listItems.push(element);
        }
    }

};

// prevent form submission
document.querySelector('form').addEventListener('submit', e => e.preventDefault());

input.addEventListener("click", addActiveClass);
input.addEventListener("input", () =>
{
    dropdown.classList.add("active");
    dropdownList.classList.add("active");
});
document.addEventListener("click", (e) =>
{
    // Check clicked outside of input
    e.target.id !== "language" &&
        e.target.classList.contains("dropdown_wrapper") === false &&
        e.target.classList.contains("languages_wrapper") === false
        ? rmvActiveClass()
        : null;
});

input.addEventListener("keyup", filterList);