
import { getBusinesses } from "./database.js"
 const businesses = getBusinesses()

 export const BusinessList = () => {
    
      let businessListHTML = "<h1>Active Businesses</h1>"

    // Iterate the business array
    businesses.forEach(       
        (businessObj) => {
            businessListHTML += `
                <section class="business">
                    <h2 class="business__name">${businessObj.companyName}</h2>
                    <div class="business__address">
                     ${businessObj.addressFullStreet}
                    </div><div class="business__address">
                    ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}
                   </div>
                   <hr>
                </section>
           `
        }
        
    )
      
    return businessListHTML
}

document
.querySelector("#content")
    .addEventListener(
        "keypress", 
        (keyPressEvent) => {
            const companySearchResultArticle = document.querySelector(".foundBusinesses")

            if (keyPressEvent.charCode === 13) {
                /*
                    You can use the `.includes()` string method to
                    see if a smaller string is part of a larger string.
                  */  
              
                const foundBusiness = businesses.find(business => { return business.companyName.includes(keyPressEvent.target.value)})
                
            //  callback function
                                           
                companySearchResultArticle.innerHTML = `<section class="business">
                <h2 class="business__name">${foundBusiness.companyName}</h2>
                <div class="business__address">
                 ${foundBusiness.addressFullStreet}
                </div><div class="business__address">
                ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
               </div>
               <hr>
            </section>`
            }
        }
    );



