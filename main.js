window.addEventListener( 'resize', setFretboardHeight );

function getCAGED() {

  setFretboardHeight();

  let patternNav = document.querySelectorAll( '#patternNav a' );

  patternNav.forEach( function( e ) {
    e.addEventListener( 'click', drawFretboard );
  });

  let frets = document.querySelectorAll( '.fret' );

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

  let fretboardContainer = document.getElementById( 'fretboard' );

  fretboardWidth = fretboardContainer.offsetWidth;
  fretboardContainer.style.height = fretboardWidth * 1.2 + 'px';

}

function drawFretboard() {

  this.classList.toggle( 'selected' );

  let patterns = [];
  let selectedPatterns = document.querySelectorAll( '#patternNav a.selected' );

  selectedPatterns.forEach( function( pattern ) {

    pattern.classList.forEach( function( e ) {

      if ( e !== 'selected' ) {
        patterns.push( e );
      }

    });

  });

  let frets = document.querySelectorAll( '.fret' );
  let fretboardOverlay = [];

  frets.forEach( function( fret ) {
    fretboardOverlay.push( [ '', '', '', '', '', '' ] );
  });

  patterns.forEach( function( pattern ) {

    switch ( pattern ) {

      case 'C':
        fretboardOverlay[1][0] = true;
        fretboardOverlay[1][1] = true;
        fretboardOverlay[1][2] = true;
        fretboardOverlay[1][3] = true;
        fretboardOverlay[1][5] = true;

        fretboardOverlay[2][4] = true;

        fretboardOverlay[3][2] = true;
        fretboardOverlay[3][3] = true;

        fretboardOverlay[4][0] = true;
        fretboardOverlay[4][1] = true;
        fretboardOverlay[4][4] = true;
        fretboardOverlay[4][5] = true;

        break;

      case 'A':
        fretboardOverlay[1][2] = true;
        fretboardOverlay[1][3] = true;

        fretboardOverlay[2][0] = true;
        fretboardOverlay[2][1] = true;
        fretboardOverlay[2][4] = true;
        fretboardOverlay[2][5] = true;

        fretboardOverlay[4][0] = true;
        fretboardOverlay[4][1] = true;
        fretboardOverlay[4][2] = true;
        fretboardOverlay[4][3] = true;
        fretboardOverlay[4][4] = true;
        fretboardOverlay[4][5] = true;

        break;

      case 'G':
        fretboardOverlay[1][0] = true;
        fretboardOverlay[1][1] = true;
        fretboardOverlay[1][2] = true;
        fretboardOverlay[1][3] = true;
        fretboardOverlay[1][4] = true;
        fretboardOverlay[1][5] = true;

        fretboardOverlay[3][1] = true;
        fretboardOverlay[3][2] = true;
        fretboardOverlay[3][3] = true;

        fretboardOverlay[4][0] = true;
        fretboardOverlay[4][4] = true;
        fretboardOverlay[4][5] = true;

        break;

      case 'E':
        fretboardOverlay[1][1] = true;
        fretboardOverlay[1][2] = true;
        fretboardOverlay[1][3] = true;

        fretboardOverlay[2][0] = true;
        fretboardOverlay[2][4] = true;
        fretboardOverlay[2][5] = true;

        fretboardOverlay[3][3] = true;

        fretboardOverlay[4][0] = true;
        fretboardOverlay[4][1] = true;
        fretboardOverlay[4][2] = true;
        fretboardOverlay[4][4] = true;
        fretboardOverlay[4][5] = true;

        break;

      case 'D':
        fretboardOverlay[0][3] = true;

        fretboardOverlay[1][0] = true;
        fretboardOverlay[1][1] = true;
        fretboardOverlay[1][2] = true;
        fretboardOverlay[1][4] = true;
        fretboardOverlay[1][5] = true;

        fretboardOverlay[3][0] = true;
        fretboardOverlay[3][1] = true;
        fretboardOverlay[3][2] = true;
        fretboardOverlay[3][3] = true;
        fretboardOverlay[3][5] = true;

        fretboardOverlay[4][4] = true;

        break;

    }

  });

  for ( let i = 0; i < frets.length; i++ ) {

    let strings = frets[i].querySelectorAll( '.stringBox' );

    for ( let x = 0; x < strings.length; x++ ) {

      if ( fretboardOverlay[i][x] ) {
        strings[x].insertAdjacentHTML( 'afterbegin', '<div class="circle-container  "><div class="circle"></div></div>' );
      } else {
        strings[x].innerHTML = '<div class="string"></div>';
      }

    }

  }

}
