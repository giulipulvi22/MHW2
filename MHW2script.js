//caricamento section
const items = document.querySelectorAll('.item');
for(let it of items){
    for(let comp in contenuti){
    if(it.dataset.item===comp){

        const newTitle = document.createElement('h1');
        newTitle.textContent=contenuti[comp].titolo;
        it.appendChild(newTitle);
        const newDiv = document.createElement('div');
        newDiv.style.backgroundImage = "url('"+contenuti[comp].immagine+"')";
        newDiv.classList.add('background');
        it.appendChild(newDiv);
        const newFoto = document.createElement('div');
        newFoto.classList.add('foto');
        it.appendChild(newFoto);
        const but1 = document.createElement('button');
        but1.classList.add('button1');
        but1.innerText='info';
        newFoto.appendChild(but1);
        const but2 = document.createElement('button');
        but2.classList.add('button2');
        but2.innerText='aggiungi al carrello';
        newFoto.appendChild(but2);
        }
    }
}

//mostra info
function mostraPiu(event){

    const info = event.currentTarget;
    info.textContent='meno';
    const bottoni = info.parentNode;
    const item = bottoni.parentNode;
    for(let comp in contenuti){
        if(item.dataset.item===comp)
        {
            const newText = document.createElement('p');
            newText.textContent=contenuti[comp].descrizione;
            bottoni.appendChild(newText);
        }
    }

    info.removeEventListener('click', mostraPiu);
    info.addEventListener('click', mostraMeno);
        
}

function mostraMeno(event){
    const meno = event.currentTarget;
    meno.textContent='info';
    const container = meno.parentNode;
    const newText = container.querySelector('.foto p');
    newText.remove();
    meno.removeEventListener('click', mostraMeno);
    meno.addEventListener('click', mostraPiu);
}

const info = document.querySelectorAll('.button1');
for(let inf of info){
    inf.addEventListener('click', mostraPiu);
}

//barra di ricerca
function find(){
    const barra = document.getElementById('barra');
    const key=barra.value.toUpperCase();
    const schema= document.querySelector('article');
    const item = schema.getElementsByClassName('item');
    for(let it=0; it< item.length; it++){
        let nome=item[it].getElementsByTagName('h1')[0];
        if(nome){
            let txt = nome.textContent || nome.innerText;
            if(txt.toUpperCase().indexOf(key)>-1){
                item[it].style.display='';
            }
            else{
                item[it].style.display='none';
            }
        }
    }
}
//carrello

function addChart(event){
    const item = event.currentTarget;
    const cart = document.getElementById('elementi');
    const container = item.parentNode;
    const bigitem = container.parentNode;
    for(let comp in contenuti){
        if(bigitem.dataset.item===comp)
        {
            item.classList.add('nochart');
            const area = document.createElement('div');
            cart.appendChild(area);
            const newTitle = document.createElement('p');
            const newImg = document.createElement('img');
            const button3 = document.createElement('button');
            newTitle.textContent=contenuti[comp].titolo;
            newImg.src=contenuti[comp].immagine;
            button3.innerText='rimuovi';
            area.appendChild(newTitle);
            area.appendChild(newImg);
            area.appendChild(button3);
            button3.addEventListener('click', removeChart);
        }
    }

    const carrello = document.getElementById('carrello');
    if(card==0){
        carrello.classList.remove('hidden');
        carrello.classList.add('show');
    }

    card++;

    item.removeEventListener('click', addChart);
        
}

function removeChart(event){
    const item = event.currentTarget;
    const container = item.parentNode;
    const chart = document.getElementById('elementi');
    const cont=chart.parentNode;
    let title=container.querySelector('p');
    const txt=title.textContent;
    const items = document.querySelectorAll('.item');
    for(let i of items){
        if(i.querySelector('h1').textContent===txt){
            const but=i.querySelector('.button2');
            but.classList.remove('nochart');
            but.addEventListener('click', addChart);
        }
    }  
    container.remove();
    card--;
    if(card==0){
        cont.classList.remove('show');
        cont.classList.add('hidden');
    }
}

const carrello = document.querySelectorAll('.button2');
for(let carr of carrello){
    carr.addEventListener('click', addChart);
}

let card=0;


//visualizzare immagine

function mostraFoto(event){
    const item=event.currentTarget;
    const parent=item.parentNode;
    for(let c in contenuti){
        if(parent.dataset.item===c){
            const corpo= document.querySelector('article');
            const el = document.createElement('div');
            const image=document.createElement('img');
            image.src=contenuti[c].immagine;
            el.classList.add('visualizza');
            document.body.classList.add('no-scroll');
            corpo.appendChild(el);
            el.appendChild(image);
            const vis=document.querySelectorAll('.background');
            for(let v of vis){
                v.removeEventListener('click', mostraFoto);
            }
            el.addEventListener('click', nascondiFoto);
        }
    }
}

function nascondiFoto(event){
    const item=event.currentTarget;
    item.remove();
    document.body.classList.remove('no-scroll');

    for(let v of vis){
        v.addEventListener('click', mostraFoto);
    }

}

const vis=document.querySelectorAll('.background');
for(let v of vis){
    v.addEventListener('click', mostraFoto);
}
