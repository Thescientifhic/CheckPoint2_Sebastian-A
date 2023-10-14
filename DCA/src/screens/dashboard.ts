import { AttributeCard } from "../components/Card/card";
import { catFact, catImg } from "../service/getData";
import { apiType } from "../types/type";
import "../components/export"

class Dashboard extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

     async connectedCallback(){
        const imgData = await catImg();
        const factData = await catFact();
        this.render( imgData, factData);
     }

         render(imgData: any, factData: any){
        if(this.shadowRoot){this.shadowRoot.innerHTML= '';
    
        const btn = this.ownerDocument.createElement("button");
        btn.innerText = "Get New Fact";
        this.shadowRoot?.appendChild(btn);

        btn.addEventListener("click", () => {
            imgData.forEach((e: apiType) => {
                const card = this.ownerDocument.createElement('app-card');
                card.setAttribute(AttributeCard.img, e.img);
                this.shadowRoot?.appendChild(card);
            });

            factData.forEach((a: apiType) => {
                const card = this.ownerDocument.createElement('app-card');
                card.setAttribute(AttributeCard.fact, a.fact); // De aquí tengo que tomar las palabras
                this.shadowRoot?.appendChild(card); 
            })
        })
    }}
}

customElements.define('app-dashboard', Dashboard);


//  mount(){
    //     const btn = this.ownerDocument.createElement("button");
    //     btn.innerText = "Get New Fact";
    //     this.shadowRoot?.appendChild(btn);

    //     btn.addEventListener("click", () => {
        // function dividirCadena(cadenaADividir, separador) {
            //     var arrayDeCadenas = cadenaADividir.split(separador);
            //     document.write( arrayDeCadenas.length + " elementos: ",
            //     );
              //  }
    
    
    //         imgData.forEach((e: apiType) => {
    //             const card = this.ownerDocument.createElement('app-card');
    //             card.setAttribute(AttributeCard.fact, e.fact);
    //             this.shadowRoot?.appendChild(card);
    //         });


    //  for (var i = 0; i < arrayDeCadenas.length; (4)) {
    //     document.write(arrayDeCadenas[i] + " / ");