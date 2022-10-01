function createGrid(sideLength){
    let container = document.querySelector('.container');
    for(let row = 0; row < sideLength; row++){
        let divRow = document.createElement('div');
        for(let column = 0; column < sideLength; column++){
            let divColumn = document.createElement('div');
            divRow.appendChild(divColumn);
        }
        container.appendChild(divRow);
    }
}