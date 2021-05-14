async function getPartners(){
    let answer = await fetch("https://api.filtered.ai/q/get-partner-availability")
    return answer.json();
}
return getPartners
