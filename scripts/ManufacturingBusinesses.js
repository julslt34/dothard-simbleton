import { getBusinesses } from "./database.js"
 const businesses = getBusinesses()

// const manufactBusinesses = businesses.filter(business => business.companyIndustry === 'Manufacturing') ;


 const manOnlyBusiness = (business) => {
    if (business.companyIndustry === 'Manufacturing') {
        return true
    }
    return false
}

 export const ManufacturingBusinesses = () => {
    // businesses is the array of all the businesses 
    let ManFacListHTML = ""
    // This^^^^^^^ is an html string
    // we only want manufacturing businesses
    const filteredItems = businesses.filter(manOnlyBusiness)
    // This ^^^^^^^^^^^ is the array of only manufacturing businesses
    // take that new array and make html strings for the manufacturing and add them to our existing ManFacListHTMLstring

for(const manBusinessObj of filteredItems) {
  

    ManFacListHTML += `
                <section class="business">
                    <h2 class="business__name">${manBusinessObj.companyName}</h2>
                    <div class="business__address">
                     ${manBusinessObj  .addressFullStreet}
                    </div><div class="business__address">
                    ${manBusinessObj.addressCity}, ${manBusinessObj.addressStateCode} ${manBusinessObj.addressZipCode}
                   </div>
                   <hr>
                </section>
           `
 }
   
    return ManFacListHTML 

 }