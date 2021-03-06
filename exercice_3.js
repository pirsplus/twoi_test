// * * * * * * * * * * * * * * * * *
// Two-I: node.js test
// @author: Julien Pirson
// * * * * * * * * * * * * * * * * *

// You will need Linux and Node.js package


// * * * * * * * * * * * * * * * * *
// exercice 3
// * * * * * * * * * * * * * * * * *
//
// Goal:
// You have to concat/assign/merge every keys from the input data to return the expected output below.
// (Be attentive about the order of the input data and the expected output)
//
// input data
let data = {
  '0-0_0-0': {emotion: {anger:0.1,happiness:0.9}},
  '0-0': {label: 'face'},
  '0-0_0-0_0-0': {gender: 'famale'},
  '0-2': {label: 'face'},
  '0-3': {label: 'car'},
  '0-2_0-1_0-0': {gender: 'male'},
  '0-3_1-1': {car: {color:'red'}},
  '0-1': {label: 'car'},
  '0-2_0-1': {emotion: {anger:0.1,happiness:0.9}},
  '0-3_1-1_0-0_0-0': {car: {size:'big'}},
  '0-3_1-1_0-0': {car: {brand:'mazda'}},
  '0-1_1-0': {car: {color:'blue'}},
  '0-3_1-1_0-0_0-0_0-0': {car: {type:'sport'}},
  '0-1_1-0_0-0': {car: {brand:'ferrari'}}
}
// expected output 
let newData = [ 
  {label: 'face', emotion: {anger:0.1,happiness:0.9}, gender: 'female'},
  {label: 'car', car: {color:'blue', brand:'ferrari'}},
  {label: 'face', emotion: {anger:0.1,happiness:0.9}, gender: 'male'},
  {label: 'car', car: {color:'red', brand:'mazda', size:'big', type:'sport'}}
]
