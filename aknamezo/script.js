
function TablaLetrehozas(){
let sorok = document.getElementById("sor").value;
let oszlopok = document.getElementById("oszlop").value;
let table = '<table>'

for (let i = 0; i < sorok; i++) 
{
    table += '<tr>';
    for (let j = 0; j < oszlopok; j++) 
    {
       table += `<td id="row-${i}-col-${j}"></td>`;
        
    }
    table += '</tr>' ;   
}
table += '</table>' ;
const tableContainer = document.getElementById('tabla');
tableContainer.innerHTML = table;  
}

function FelteszAknak(){
    
    

    let aknak = document.getElementById("aknak_szama").value;
    for (let index = 0; index < aknak; index++) {
        let sorok = document.getElementById("sor").value;
        let oszlopok = document.getElementById("oszlop").value;
        let sor_szam = Math.floor(Math.random()*sorok);
        let oszlop_szam = Math.floor(Math.random()*oszlopok);
        let random_cella = document.getElementById(`row-${sor_szam}-col-${oszlop_szam}`);
        while (random_cella.innerHTML.length !== 0){
            sor_szam = Math.floor(Math.random()*sorok-1);
            oszlop_szam = Math.floor(Math.random()*oszlopok-1);
            random_cella = document.getElementById(`row-${sor_szam}-col-${oszlop_szam}`);
        }
        random_cella.innerHTML = `<div id="akna"></div>`;
    }

    
}


function FelteszBabuk(){
    let babuk = document.getElementById("babuk_szama").value;

}