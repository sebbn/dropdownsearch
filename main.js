const inputElement = document.getElementById("inputField");
const inputHelp = document.getElementById("inputHelp");
const dropdown = document.getElementById("dropdownDiv");

let arr = ["Choice A", "Random", "Third pick", "Choice B", "Pick this"]

inputElement.addEventListener("focus", (event) =>
{
    fillDropdown(inputElement.value);
    dropdown.style.visibility = "visible";
});

inputElement.addEventListener("blur", (event) =>
{
    setTimeout(function () {
        dropdown.style.visibility = "hidden";
    }, 100);
});

inputElement.addEventListener("input", (event) =>
{
    fillDropdown(inputElement.value);

    setInputHelp();
});

function setInputHelp()
{
    if (inputElement.value == "")
    {
        inputHelp.innerHTML = "Text that will change depending on if input exists in list or not";
    }
    else if (arr.includes(inputElement.value))
    {
        inputHelp.innerHTML = "Input exists: <b>" + inputElement.value + "</b>";
    }
    else
    {
        inputHelp.innerHTML = "<b>" + inputElement.value + "</b> is a new input";
    }
}

function fillDropdown(input)
{
    if (input == "")
    {
        dropdown.innerHTML = "";
        for (let a of arr)
        {
            addToDropdown(a);
        }
    }
    else
    {
        dropdown.innerHTML = "";
        for (let a of arr)
        {
            if (a.toLowerCase().includes(input.toLowerCase()))
            {
                addToDropdown(a);
            }
        }
    }
}

function addToDropdown(text)
{
    let item = document.createElement("p");
    item.classList.add('dropdownItem');
    item.innerHTML = text;
    dropdown.append(item);

    item.addEventListener("click", () =>
    {
        inputElement.value = text;
        setInputHelp();
    });
}