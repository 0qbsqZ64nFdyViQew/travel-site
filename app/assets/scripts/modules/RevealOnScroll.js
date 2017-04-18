/* CSS: _reveal-item.css, _testimonials.css */
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; /*SCROLLDETECTION!!!*/

class RevealOnScroll {
    constructor(els, offset) {
      this.itemsToReveal = els;
      this.offsetPercentage = offset;
      this.hideInitially();
      this.createWaypoints();
  }

    hideInitially() {
      this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints(offs) {
      var that = this;
      this.itemsToReveal.each(function() {
        var currentItem = this;
        new Waypoint ({
          element: currentItem,
          handler: function(){
            $(currentItem).addClass("reveal-item--is-visible");
          },
          offset: that.offsetPercentage
        });
      });
    }

}

export default RevealOnScroll;
