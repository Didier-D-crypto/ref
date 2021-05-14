// async function getPartners() {
//     let answer = await fetch("https://api.filtered.ai/q/get-partner-availability")
//     return answer.json();
// }
// if (error) { return console.log(error); }
// console.log(body.url);
// console.log(body.explanation);

// return getPartners
const getPartners = () =>{
const I_URL = "https://api.filtered.ai/q/get-partner-availability"; 
return fetch(I_URL)
.then(data=>{return data.json()})
.then(res=>{console.log(res)})
}; 

    
;
return getPartners; 

