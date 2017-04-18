/* CSS: _site-header.css */
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; /*SCROLLDETECTION!!!*/
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor (){
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

/* Make HEADER dark*/
  createHeaderWaypoint(){
    var that = this;
    new Waypoint ({
      element: that.headerTriggerElement[0],
      handler: function(direction){
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          /* Reverse NAV to original state */
          that.siteHeader.removeClass("site-header--dark");
          that.headerLinks.removeClass("is-current-link");
        }
      }
    });
  }

/* Make NAV LINKS Orange */
  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function(){
      var currentPageSection = this;

      new Waypoint ({
        element: currentPageSection,
        handler: function(direction){
          if (direction == "down"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint ({
        element: currentPageSection,
        handler: function(direction){
          if (direction == "up"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });

    });
  }
}

export default StickyHeader;
