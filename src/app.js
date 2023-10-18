let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let tipe = ['.com', '.net', '.us', '.io'];

/*
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let t = 0; t < tipe.length; t++) {
      let direcciones = pronoun[i] + adj[j] + noun[k] + tipe[t];
      console.log(direcciones);
      }
    }
  }
} funcionan las dos pero la segunda es mas corta*/


for(let items in pronoun){
  for(let obj in adj){
    for(let item in noun){
      for(let obs in tipe){
        console.log(pronoun[items]+adj[obj]+noun[item]+tipe[obs])
      }
    }
  }
}

