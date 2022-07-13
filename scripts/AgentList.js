import { getBusinesses } from "./database.js"
 const businesses = getBusinesses()

 /*
     Generates an array that contains the html representation of each purchasing agents
    */

export const AgentList = () => {
    
const agentHTMLRepresentations = businesses.map(
    // callback function 
    (business) => ("<h2 class=\"agent--name\">" + business.purchasingAgent.nameFirst + " " +business.purchasingAgent.nameLast +  "</h2>" + "<div class=\"agent--info\">" +business.companyName + "<br>" + business.phoneWork + "</div>" + "<hr>" )
   
)
const finalHTML = agentHTMLRepresentations.join("")

return finalHTML

}

document
.querySelector("#content")
    .addEventListener(
        "keypress", 
        (keyPressEvent) => {
            const agentSearchResultArticle = document.querySelector(".foundAgents")

            if (keyPressEvent.charCode === 13) {
                /*
                    You can use the `.includes()` string method to
                    see if a smaller string is part of a larger string.
                  */  
              
                const foundAgents = businesses.find(business => { return business.purchasingAgent.nameFirst.includes (keyPressEvent.target.value) || business.purchasingAgent.nameLast.includes (keyPressEvent.target.value)})
                // .find(business => { return business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)})
                
            //  callback function
                                           
            agentSearchResultArticle.innerHTML = `<section class="business">
                <h2 class="agent__name">${foundAgents.purchasingAgent.nameFirst} ${foundAgents.purchasingAgent.nameLast}</h2>
                <div class="business__name">
                 ${foundAgents.companyName}
                </div><div class="business__number">
                ${foundAgents.phoneWork}
               </div>
               <hr>
            </section>`
            }
        }
    );



