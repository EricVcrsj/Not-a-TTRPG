/* Declare variables below to save the different sections (divs) of your story*/
let story = document.querySelector(".story");
let display = document. querySelector(".display") 
let manButton = document.querySelector(".boy-man");
let buffButton = document.querySelector(".boy-buff");
let cowButton = document.querySelector(".boy-cow");
let smartButton = document.querySelector(".boy-smart");
let gurlButton = document.querySelector(".boy-gurl");
let boyButton = document.querySelector(".boy-boy");
let magicButton = document.querySelector(".boy-magic");
let continueButton = document.querySelector(".continue")
let boyBoy = document.querySelector("images/better-boy-boy.png");
let player = {
  name: playerName,
  class: 'none',
  hp: 0,
  intelligence: 0,
  strength: 0,
  magic: 0,
  skills: [],
}
const types = ['Fire','Water','Lightning']
const enemies = {
  babyDragon : (typeSpec) => {
    let type;
    if(!typeSpec) {
        type = types[Math.floor(Math.  random() * types.length)];
    }else { type = typeSpec; }
      return({
        url: 'https://e7.pngegg.com/pngimages/505/226/png-clipart-figurine-legendary-creature-baby-dragon-legendary-creature-fictional-character-thumbnail.png',
        
        name: `Baby ${type} Dragon`,
        hp: 12),
        damageMods: types.map(type => {
          if(type === 'Lightning'){
            return ({
              fireMod: 0,
              waterMod: 0,
              lightningMod: 1,
            })
          }if(type === 'Fire') {
            return ({
              fireMod: 1,
              waterMod: 0,
              lightningMod: 0,
            })
          }if (type === 'Water') {
            return ({
              fireMod: 0,
              waterMod: 1,
              lightningMod: 0,
            })
          }
        })[types.indexOf(type)],
        damages: types.map(type => {
          if(type === 'Lightning'){
            return ({
              normalDamage: 0,
              fireDamage: 0,
              waterDamage: 0,
              lightningDamage: 1,
            })
          }if(type === 'Fire') {
            return ({
              normalDamage: 0,
              fireDamage: 1,
              waterDamage: 0,
              lightningDamage: 0,
            })
          }if (type === 'Water') {
            return ({
              normalDamage: 0,
              fireDamage: 0,
              waterDamage: 1,
              lightningDamage: 0,
            })
          }
        })[types.indexOf(type)]
      })
  }
}

const set = {
  playerHP: (num => {
    $('#hp').html(`Hp: ${num.toString()}`)
  }),
  playerName: (name => {
    $('#playerName').html(`<strong>${name}</strong>`)
  }),
  strength: (num => {
    $('#strength').html(`Strength: ${num.toString()}`)
  }),
  intelligence: (num => {
    $('#intelligence').html(`Intelligence: ${num.toString()}`)
  }),
  magic: (num => {
    $('#magic').html(`Magic: ${num.toString()}`)
  }),

  btn1: ((text, func) => {
    $('#btn1').off();
    $('#btn1').html(text);
    $('#btn1').on('click', func);
  }),
  btn2: ((text, func) => {
    $('#btn2').off();
    $('#btn2').html(text);
    $('#btn2').on('click', func);
  }),
  btn3: ((text, func) => {
    $('#btn3').off();
    $('#btn3').html(text);
    $('#btn3').on('click', func);
  }),
  btn4: ((text, func) => {
    $('#btn4').off();
    $('#btn4').html(text);
    $('#btn4').on('click', func);
  }),
  btnHolder: (text => {
    $('#btn-holder').html(text)
  }),

  textBox: ((text, append) => {
    append ? $('#text-box').append(text) : $('#text-box').html(text)
  }),
  enemyStats: (enemy => {
    console.log(enemy)
    $("#text-box").html(`<div id='enemy-name'>${enemy.name}</div>`);
    $('#enemy-hp').html(`Hp:${enemy.hp}`);
    $('#enemy-type').html(`Type:${enemy.type}`);
  }),
  btnHolder: (text => {
    $('#btn-holder').html(text);
  }),
}
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
boyButton.onclick=function(){
  display.innerHTML.src = boyBoy
};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};


