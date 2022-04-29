// my variables
const dahcolor = document.querySelector('#colorPicker')
const dahtable = document.querySelector('#pixelCanvas')



const dahpicker = document.querySelector('#sizePicker');
dahpicker.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // To remove all existing table contents
    dahtable.innerHTML = '';

    let dahheight = document.querySelector('#inputHeight');

    let dahwidth = document.querySelector('#inputWidth');

    for (let e = 0; e < dahheight.value; e++) {
        let dahrow = document.createElement('tr'); // this creates new table row elements
        dahtable.appendChild(dahrow);

        for (let f = 0; f < dahwidth.value; f++) {
            let dahcolumn = document.createElement('td'); //this creates table data elements
            dahrow.appendChild(dahcolumn);

            dahcolumn.addEventListener('click', function (event) {
                event.currentTarget.style.backgroundColor = dahcolor.value;
            });

            dahcolumn.addEventListener('dblclick', function (event) {
                event.currentTarget.style.backgroundColor = '';
            });
        };
    };
        
}
