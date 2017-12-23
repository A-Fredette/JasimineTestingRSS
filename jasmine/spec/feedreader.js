/* feedreader.js */

// within $(function()) because some tets require the DOM
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This tests loops through all of the feeds to check that the URL is not empty
         */
         it('has a URL', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                //console.log(allFeeds[i].url);
                expect(allFeeds[i].url).not.toBe("");
                expect(allFeeds[i].url).not.toEqual("");
                expect(allFeeds[i].url).not.toBeNull();
            }
         });

        /* This test checks that name of each feed object is not empyty
         */
         it('has a name', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                //console.log(allFeeds[i].name);
                expect(allFeeds[i].name).not.toBe("");
                expect(allFeeds[i].name).not.toEqual("");
                expect(allFeeds[i].name).not.toBeNull();
            }
         });

    });

    describe('The menu', function(){
       /* Checks to determine is the menu is hidden upon load of the app
        */
        it('menu hidden on load', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });

        /* Checks to ensure that the menu visibility toggles with click on the menu icon
         */
        it ('toggle visibility', function() {
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    describe('Initial Entries', function(){
        /* Checks if there is at least one entry in the .feed container when loadFeed is completed
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

         it('loadFeed is called', function() {
            let entriesNum = $('.entry').length;
            console.log(entriesNum);
            expect(entriesNum).toBeGreaterThan(0);
             });
    });

    describe('New Feed Selection', function() {
        /* Checks that the HTML content changes when a new feed is loaded
         */
        let firstLoadHTML,
        secondLoadHTML;

        beforeEach(function(done) {
           loadFeed(0, function() {
                firstLoadHTML = $('.feed').html();
                console.log(firstLoadHTML);

            loadFeed(1, function() {
                secondLoadHTML = $('.feed').html();
                console.log(secondLoadHTML);
                done();
             });
            });
        });

        it('loadFeed changes content', function() {
            expect(firstLoadHTML).not.toBe(secondLoadHTML);
        });
    });
});

}());
