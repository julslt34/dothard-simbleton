import { getBusinesses } from "./database.js"
 const businesses = getBusinesses()

// const NewYorkBusinesses = businesses.filter(business => business.addressStateCode === 'NY'); 


 const nyOnlyBusiness = (business) => {
    if (business.addressStateCode === 'NY') {
        return true
    }
    return false
}

 export const NewYorkBusinesses = () => {
    // businesses is the array of all the businesses 
    let NYListHTML = ""
    // This^^^^^^^ is an html string
    // we only want businesses in NY
    const filteredItems = businesses.filter(nyOnlyBusiness)
    // This ^^^^^^^^^^^ is the array of only ny businesses
    // take that new array and make html strings for the nyitems and add them to our existing nyHTMLString

for(const nyBusinessObj of filteredItems) {
    

    NYListHTML += `
                <section class="business">
                    <h2 class="business__name">${nyBusinessObj.companyName}</h2>
                    <div class="business__address">
                     ${nyBusinessObj  .addressFullStreet}
                    </div><div class="business__address">
                    ${nyBusinessObj.addressCity}, ${nyBusinessObj.addressStateCode} ${nyBusinessObj.addressZipCode}
                   </div>
                   <hr>
                </section>
           `
}
    //  return filteredItems

    return NYListHTML 

}
