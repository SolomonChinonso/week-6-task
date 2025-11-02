const interns = [
{intern:"Mira",
  scores: [10,8,9,8,8]
},
{intern:"Toby",
  scores: [9,8,10,8,7]
},
{intern:"Esther",
  scores: [7,8,9,10,7]
},
{intern:"Dera",
  scores: [8,8,10,7,8]
},
{intern:"Batom",
  scores: [10,9,9,7,8]
}
];

//to calculate average scores
function calculateAverage(scores){
 const total = scores.reduce((sum, score)=>sum + score,0);
  return total/scores.length;
}
console.log("Grades for each interns");
interns.forEach(upskillers=>{
  const average = calculateAverage(upskillers.scores);
console.log(`${upskillers.intern}- Average Score: ${average}`)
});
