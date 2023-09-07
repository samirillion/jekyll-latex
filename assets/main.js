/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

   (function ($) {
    // FitVids init
    let interval = null;
  
    function fontLoadListener() {
      var hasLoaded = false;
      /*
       * If anything goes wrong with the font loading API,
       * just change styles to the web font without handling FOUT
       */
      try {
        hasLoaded = document.fonts.check('12px "Latin Modern"');
      } catch (error) {
        console.info(`document.fonts API error: ${error}`);
        return;
      }
  
      if (hasLoaded) {
        if (interval) {
          clearInterval(interval);
        }
      }
    }
  })(jQuery);