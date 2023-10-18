
let pronouns = ['the', 'our'];
let adjetives = ['great', 'big'];
let nouns = ['jogger', 'racoon','internet', 'lastofus','puedes'];
let extensions =['.com','.net','.io','.us', '.es'];
const specialDomains = {
  "internet": ".net",
  "puedes": ".es",
  "lastofus": ".us"
};
function generateDomainNames (){
  let domainNames = [];
  for(let pronoun of pronouns){
    for(let adjetive of adjetives){
      for(let noun of nouns){
        for(let extension of extensions){
          let newDomain = "";
          // console.log(pronoun[items]+adj[obj]+noun[item]+type[obs])
          if (noun in specialDomains && specialDomains [noun] === extension){
            // domainNames.push (`${noun.slice(0,-extension.length + 1)}${extension}`)
            newDomain = `${noun.slice(0,-extension.length + 1)}${extension}`;
          } else {
            // domainNames.push (`${pronoun}${adjetive}${noun}${extension}`)
            newDomain = `${pronoun}${adjetive}${noun}${extension}`;
          }
          if (!domainNames.includes (newDomain)){
            domainNames.push(newDomain);
          }
        }
      }
    }
  }
  return domainNames;
}
function printDomainNames (domainNames){
  for (const domain of domainNames) {
   console.log(domain);
  }
}
const domainNames = generateDomainNames();
printDomainNames(domainNames);