/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = ["com", "net", "us", "io"];

  for (let j = 0; j < adj.length; j++) {
    for (let i = 0; i < pronoun.length; i++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k] + "." + ext[l];
          console.log(domain);

          document.getElementById("domain").innerHTML = domain;
        }
      }
    }
  }
};
