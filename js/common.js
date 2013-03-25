$(document).ready(function() {

// ------------------------- slider ---------------------------- //
	$(".js-slider").cycle({ 
		fx: 'scrollHorz',
        timeout:  0,
        speed: 1000,
        pager:  '.slider__pagin',
        next:   '.slider__nav-right', 
    	prev:   '.slider__nav-left',
    	activePagerClass: 'is-active',
        pagerAnchorBuilder: function(index, el) {
            return '<span></span>';
        }
    });

// ------------------------- Scroll ---------------------------- //
    $(".js-scroll").scrollable({
        prev: ".scroll__prev",
        next: ".scroll__next"
    });
    if ($(".js-scroll").length>0) {
      // Get the Scrollable control
      var scrollable_list_1 = $(".js-scroll").data("scrollable");
      // Set to the number of visible items
      var number_list = 4;
      // Handle the Scrollable control's onSeek event
      scrollable_list_1.onSeek(function(event, index) {
        // Check to see if we're at the end
        if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
          $(".scroll__next").addClass("is-disabled");
        }
      });
      // Handle the Scrollable control's onBeforeSeek event
      scrollable_list_1.onBeforeSeek(function(event, index) {
        // Check to see if we're at the end
        if (this.getIndex() >= this.getSize() - number_list) { 
          // Check to see if we're trying to move forward
          if (index > this.getIndex()) {
            // Cancel navigation
            return false;
          }
        }
      });
    } 
    else {}
});