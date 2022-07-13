import { BusinessList } from "./BusinessList.js"
import { NewYorkBusinesses } from "./NewYorkBusinesses.js"
import { ManufacturingBusinesses } from "./ManufacturingBusinesses.js"
import { AgentList } from "./AgentList.js"

const contentTarget = document.querySelector("#content")

const renderHTML = () => {
  contentTarget.innerHTML = `
  <input type="text" placeholder="Enter business name..." id="companySearch" />

  <article class="foundBusinesses"></article>

  <article class="businesses">

  <input type="text" placeholder="Enter agents name..." id="companySearch" />

  <article class="foundAgents"></article>

  <article class="businesses">

  
      ${BusinessList()}
  </article>
  <article class="businesses--newYork">
       <h2>New York Businesses</h2>
       ${NewYorkBusinesses()}
   </article>
   <article class="businesses--manufacturing">
   <h2>Manufacturing Businesses</h2>
   ${ManufacturingBusinesses()}
</article>
<article class="agents">
       <h2>Purchasing Agents</h2>
       ${AgentList()}
   </article>
  `

}

renderHTML()



 