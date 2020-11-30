window.addEventListener( 'resize', setFretboardHeight );

let patternNav          = document.querySelectorAll( '#patternNav a' );
let fretboardContainer  = document.getElementById( 'fretboard' );
let frets               = document.querySelectorAll( '.fret' );

let intervals = {
  major: {
    c: [ 3, 2, 3, 2, 2 ],
    a: [ 2, 3, 2, 2, 3 ],
    g: [ 3, 2, 2, 3, 2 ],
    e: [ 2, 2, 3, 2, 3 ],
    d: [ 2, 3, 2, 3, 2 ],
  },
  minor: {
    c: [ 3, 2, 2, 3, 2 ],
    a: [ 2, 2, 3, 2, 3 ],
    g: [ 2, 3, 2, 3, 2 ],
    e: [ 3, 2, 3, 2, 2 ],
    d: [ 2, 3, 2, 2, 3 ],
  },
};

let roots = {
  major: {
    c: 4,
    a: 3,
    g: 2,
    e: 1,
    d: 5,
  },
  minor: {
    c: 2,
    a: 1,
    g: 5,
    e: 4,
    d: 3,
  },
};

function getCAGED() {

  setFretboardHeight();

  patternNav.forEach( function( e ) {
    e.addEventListener( 'click', drawFretboard );
  });

  frets.forEach( function( fret ) {

    fret.innerHTML =  '<div class="E stringBox"><div class="string"></div></div>' +
                      '<div class="A stringBox"><div class="string"></div></div>' +
                      '<div class="D stringBox"><div class="string"></div></div>' +
                      '<div class="G stringBox"><div class="string"></div></div>' +
                      '<div class="B stringBox"><div class="string"></div></div>' +
                      '<div class="e stringBox"><div class="string"></div></div>';

  });

}


function setFretboardHeight() {

  fretboardWidth = fretboardContainer.offsetWidth;
  fretboardContainer.style.height = fretboardWidth * 1.2 + 'px';

}


function drawFretboard() {

  let clickedPattern = this;
  let displayPattern = [];

  patternNav.forEach( function( e ) {
    if ( e !== clickedPattern ) {
      e.classList.remove( 'selected' );
    }
  });

  this.classList.toggle( 'selected' );

  frets.forEach( function( fret ) {
    displayPattern.push( [ '', '', '', '', '', '' ] );
  });

  // If the pattern clicked is now selected, set displayPattern equal to that
  // pattern's array.
  if ( this.classList.contains( 'selected' ) ) {

    switch ( this.innerHTML ) {

      case 'C':
        displayPattern = patternC;
        break;

      case 'A':
        displayPattern = patternA;
        break;

      case 'G':
        displayPattern = patternG;
        break;

      case 'E':
        displayPattern = patternE;
        break;

      case 'D':
        displayPattern = patternD;
        break;

    }

  }

  for ( let i = 0; i < frets.length; i++ ) {

    let strings = frets[i].querySelectorAll( '.stringBox' );

    for ( let x = 0; x < strings.length; x++ ) {

      if ( displayPattern[i][x] ) {

        strings[x].innerHTML = '<div class="string"></div>';

        if ( displayPattern[i][x] == 'root' ) {
          strings[x].insertAdjacentHTML( 'afterbegin', '<div class="circle-container"><div class="circle root"><span class="R">R</span></div></div>' );
        } else {
          strings[x].insertAdjacentHTML( 'afterbegin', '<div class="circle-container"><div class="circle"></div></div>' );
        }

      } else {

        strings[x].innerHTML = '<div class="string"></div>';

      }

    }

  }

}
