window.addEventListener( 'resize', setFretboardHeight );

let patternNav = document.querySelectorAll( '#patternNav a' );
let fretboardContainer = document.getElementById( 'fretboard' );
let frets = document.querySelectorAll( '.fret' );


// Create empty arrays for each CAGED pattern.
let patternC = [], patternA = [], patternG = [], patternE = [], patternD = [];

frets.forEach( function( fret ) {
  patternC.push( [ '', '', '', '', '', '' ] );
  patternA.push( [ '', '', '', '', '', '' ] );
  patternG.push( [ '', '', '', '', '', '' ] );
  patternE.push( [ '', '', '', '', '', '' ] );
  patternD.push( [ '', '', '', '', '', '' ] );
});

  // Populate the C pattern.
  patternC[1][0] = true;
  patternC[1][1] = true;
  patternC[1][2] = true;
  patternC[1][3] = true;
  patternC[1][5] = true;

  patternC[2][4] = 'root';

  patternC[3][2] = true;
  patternC[3][3] = true;

  patternC[4][0] = true;
  patternC[4][1] = 'root';
  patternC[4][4] = true;
  patternC[4][5] = true;


  // Populate the A pattern
  patternA[1][2] = true;
  patternA[1][3] = true;

  patternA[2][0] = true;
  patternA[2][1] = 'root';
  patternA[2][4] = true;
  patternA[2][5] = true;

  patternA[4][0] = true;
  patternA[4][1] = true;
  patternA[4][2] = true;
  patternA[4][3] = 'root';
  patternA[4][4] = true;
  patternA[4][5] = true;


  // Populate the G pattern.
  patternG[1][0] = true;
  patternG[1][1] = true;
  patternG[1][2] = true;
  patternG[1][3] = 'root';
  patternG[1][4] = true;
  patternG[1][5] = true;

  patternG[3][1] = true;
  patternG[3][2] = true;
  patternG[3][3] = true;

  patternG[4][0] = 'root';
  patternG[4][4] = true;
  patternG[4][5] = 'root';


  // Populate the E pattern.
  patternE[1][1] = true;
  patternE[1][2] = true;
  patternE[1][3] = true;

  patternE[2][0] = 'root';
  patternE[2][4] = true;
  patternE[2][5] = 'root';

  patternE[3][3] = true;

  patternE[4][0] = true;
  patternE[4][1] = true;
  patternE[4][2] = 'root';
  patternE[4][4] = true;
  patternE[4][5] = true;


  // Populate the D pattern.
  patternD[0][3] = true;

  patternD[1][0] = true;
  patternD[1][1] = true;
  patternD[1][2] = 'root';
  patternD[1][4] = true;
  patternD[1][5] = true;

  patternD[3][0] = true;
  patternD[3][1] = true;
  patternD[3][2] = true;
  patternD[3][3] = true;
  patternD[3][5] = true;

  patternD[4][4] = 'root';


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
