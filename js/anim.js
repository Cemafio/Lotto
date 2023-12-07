function _get(elt)
{
    return document.getElementById(elt);
}
function _create(elt)
{
    return document.createElement(elt);
}
const droite = document.querySelector('.droite');

// droite.addEventListener('click', function () {
//     window.history.back()
// })
function manidi(){
}
function fermer(){
    window.close();
}
function banga(){
    // 1-0+1
    return Math.floor(Math.random()*(2));
}
function maka(elt){
    return document.querySelector(elt);
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min+1)) + min;
}
function tsymiverina(tab){
    let compt = 0;

        for(let i=0 ; i<99 ; i++){

            let val = getRndInteger(1 , 99);
            console.log(val);
                for(let j=0 ; j<99; j++){
                    if(j == 0){
                         compt = 0;
                    }
                    if(val == tab[j]){
                         compt++;
                    }
                }

            if(compt == 0){
                tab[i] = val;
                // console.log(tab[j]);
            }
            if(compt != 0){
                i--;
            }
        }       
}
function alaina(elt){
    return document.getElementsByTagName(elt);
}

window.addEventListener('load', function(e){
    e.preventDefault();
   
    var carte = _get("cart");
    var tableau = _get("tab");
    let rte = _get("choix_color");
    let carteordi = _get("ordi");
         //creation de la carte joueur
    carte.addEventListener('click',function (e){
        console.log(banga());
        e.preventDefault();

        carte.remove(carte.tabIndex);
        tableau.style.backgroundColor=""+rte.value;

        for (let i = 0; i < 3; i++) {//creation ligne

            var tr = _create('tr');
            tableau.appendChild(tr);

            var k=1;
            var l=9;
            let cmpt=0;
            let cmpt1=0;

            for (j = 0; j < 9; j++) {//creation cellule
                if(j==8){
                    k=80;
                    l=99;
                }
                let td = _create('td');

                tr.appendChild(td);

                let bout = _create('button');
                var ang=banga();

                if(cmpt1<5){//ilay misy chiffre
                   if(cmpt<4)//ilay tsy misy
                   {
                      if(ang==1)
                      {
                         bout.innerHTML=getRndInteger(k,l);
                         cmpt1++;
                      }
                      else
                      {
                        cmpt++;
                      }
                    }
                    else
                    {
                    bout.innerHTML=getRndInteger(k,l);
                    }
                }
                bout.id = 'bt'+i+j;
                bout.style.fontSize="20px";
                bout.style.width = "60px";
                bout.style.height = "70px";
                bout.style.cursor="pointer";
                bout.style.border="none";
                bout.style.borderRadius="10px 10px";
                bout.style.backgroundColor="";
                td.appendChild(bout);//chaque cellule est un boouton

                if(k==1)
                  {
                     k=(k-1)+10
                  }
                else 
                  k+=10;
                l+=10;
            }
        } 

        //creation an'ny carte an'ilay ordinateur
        carteordi.style.backgroundColor=""+rte.value;
        for (let a = 0; a < 3; a++) {
            var tr = _create('tr');
            carteordi.appendChild(tr);
            var k=1;
            var l=9;
            let cmpt=0;
            let cmpt1=0;
            for (let b = 0; b < 9; b++) {
                if(b==8){
                    k=80;
                    l=99;
                }
                let td = _create('td');
                tr.appendChild(td);
                let bout = _create('button');
                var ang=banga();
                if(cmpt1<5){
                    if(cmpt<4)
                    {
                       if(ang==1)
                       {
                          bout.innerHTML=getRndInteger(k,l);
                          cmpt1++;
                       }
                       else
                       {
                         cmpt++;
                       }
                     }
                     else
                     {
                     bout.innerHTML=getRndInteger(k,l);
                     }
                 }                  
                bout.id = 'bouton'+a+b;
                bout.style.fontSize="20px"
                bout.style.width = "60px";
                bout.style.height = "70px";
                bout.style.cursor="pointer";
                bout.style.border="none";
                bout.style.borderRadius="10px 10px 10px";
                td.appendChild(bout);

                if(k==1)
                  {
                     k=(k-1)+10
                  }
                  else k+=10;
     
                  l+=10;
            }
        }
        //manonona chiffre avec progress bar
        let chiffre=_get('chf');
        var prog=_get('MyProgress');
        var elem=_get('MyBar');
        let dsh=_get("dash")
        
        // stylisation de notre btn commencer
        chiffre.style.visibility="visible";
        chiffre.textContent="Commencer";
        chiffre.style.fontWeight = "bold"
        chiffre.style.fontSize="16px";
        chiffre.style.backgroundColor = "green"
        // chiffre.style.width = "7em"
        
        function _automatic() {
            setInterval(() => {
                _event()
            }, 5000);
        }

        function _event() {

            elem.style.visibility="visible";
            elem.style.height = "3px";
            prog.style.visibility="visible";
            prog.style.height = "5px";

            var partie = 0; //test oe tapitra ve ny partie?
           // do{
                setTimeout(function move(){
                    var width= 10;
                    var id= setInterval(frame,50);

                    function frame(){	
                        var tab = new Array(99);
                        tsymiverina(tab);
                        let m=0;
                        if (width>=100){
                            clearInterval(id);
                            if(m<99){
                                chiffre.style.transition="0.5s"
                                chiffre.innerHTML=tab[m];
                                dsh.innerHTML+= tab[m]+" "
                                dsh.style.fontSize="20px"
                                chiffre.style.fontSize="50px"

                                let cont=0;

                                //manova ny background an'ilay bouton ahafantarana hoe efa nipoitra ilay chiffre fa mila mclick 
                                for (let i = 0; i < 3; i++){
                                    for (let j = 0; j < 9; j++){
                                        eur=_get('bt'+i+j).innerHTML
                                        if( eur==tab[m] ){
                                            if(cont==0){
                                                double=_get('bt'+i+j);
                                                double.addEventListener('click',function(e){
                                                    double.style.border="solid white"
                                                    double.style.Color=""+"white"
                                                    double.style.backgroundColor=""+rte.value;
                                                    double.value=1;
                                                });   
                                            }
                                            col=_get('bt'+i+j);
                                            cont++;
                                            col.addEventListener('click',function(e){
                                                col.style.border="solid white"
                                                col.style.Color=""+"white"
                                                col.style.backgroundColor=""+rte.value;
                                                col.value=1;
                                            });   
                                        }
                                    }
                                } 
                                //manova ny background an'ilay bouton ahafantarana hoe efa nipoitra ilay chiffre an'ilay ordinateur
                                for (let a = 0; a < 3; a++){
                                    for (let b = 0; b < 9; b++){
                                        ordicarte=_get('bouton'+a+b).innerHTML
                                        if( ordicarte==tab[m] ){
                                            ordi=_get('bouton'+a+b);
                                            ordi.style.border="solid white"
                                            ordi.style.Color=""+"white"
                                            ordi.style.backgroundColor=""+rte.value;
                                            ordi.value=1;
                                        }
                                    }
                                }
                                m+=1;
                            }
                            //victoire
                            var ray=0;
                            for (let i = 0; i < 3; i++){
                                let ligne=0;
                                for (let j = 0; j < 9; j++){
                                    eur=_get('bt'+i+j).value
                                    if(eur==1){
                                        ligne+=1;
                                    } 
                                }
                                if(ligne==5){
                                    ray+=1;
                                    if(ray==2){
                                        alert("oeeeee");
                                        chiffre.remove(chiffre.tabIndex);
                                        break;
                                        
                                    }
                                }
                            
                            } 
                            //defaite
                            var orm=0;
                            for (let i = 0; i < 3; i++){
                                let ordn=0;
                                for (let j = 0; j < 9; j++){
                                    rido=_get('bouton'+i+j).value
                                    if(rido==1){
                                        ordn+=1;
                                    } 
                                }
                                if(ordn==5){
                                    orm+=1;
                                    if(orm==2){
                                        alert("oeeeee resy enao!!");
                                        chiffre.remove(chiffre.tabIndex);
                                        window.history.back();
                                        break;
                                        
                                    }
                                }
                        
                            }
                            /*if ((orm==2)||(ray==2)){//partie finie si victoire ou defaite
                                partie++;
                            }*/
                        }else{
                            width++;
                            elem.style.width= width+'%';
                            //elem.innerHTML= width*1+'%';
                        }
                    }
                }, 1000);
           // }while(partie <= 0);
        }

        chiffre.addEventListener('click', _automatic)
    });
});

/* lecode pour le bouton parametre */
let param=document.querySelector('.param')
let parametre=document.querySelector('.parametre');
let exit=_get('exitt');

param.addEventListener('click',()=>{
    parametre.style.display="block";
    aide.style.display="none";
})
exit.addEventListener('click',()=>{
    parametre.style.display="none";
});

/* pour le bouton aide */
let help=document.querySelector('.info');
let aide=document.querySelector('.aide');
let exita=_get("exita");

help.addEventListener('click',()=>{
    aide.style.display="block"
    parametre.style.display="none";
})
exita.addEventListener('click',()=>{
    aide.style.display="none"
}) 
let dash=_get("board");
let lst=_get("liste");
let ext=_get("ex")

lst.addEventListener('click',()=>{
    dash.style.display="inline-block"
})
ext.addEventListener('click',()=>{
    dash.style.display="none"
});


