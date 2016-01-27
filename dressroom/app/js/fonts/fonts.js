  WebFontConfig = {
    google: { families: [ 'Roboto+Slab:400,100,300,700:latin,cyrillic-ext,latin-ext,cyrillic',
                          'Roboto+Mono:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic:latin,cyrillic-ext,latin-ext,cyrillic',
                          'Roboto+Condensed:400,300,300italic,400italic,700,700italic:latin,cyrillic-ext,latin-ext,cyrillic',
                          'Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic:latin,cyrillic-ext,latin-ext,cyrillic',
                          'Gabriela::latin,latin-ext',
                          'Rouge+Script::latin',
                          'Abril+Fatface::latin,latin-ext',
                          'Lobster+Two:400,400italic,700,700italic:latin',
                          'Playball::latin,latin-ext',
                          'Oleo+Script:400,700:latin,latin-ext',
                          'Sansita+One::latin',
                          'Baumans::latin',
                          'Lily+Script+One::latin,latin-ext',
                          'Salsa::latin',
                          'Oleo+Script+Swash+Caps:400,700:latin,latin-ext',
                          'Stardos+Stencil:400,700:latin',
                          'Paprika::latin',
                          'Cherry+Swash:400,700:latin,latin-ext',
                          'Sail::latin',
                          'Spirax::latin',
                          'Emblema+One::latin' 
                        ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();