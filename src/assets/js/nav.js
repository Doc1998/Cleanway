// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation-760");
    const CShamburgerMenu = document.querySelector("#cs-navigation-760 .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });



    // mobile nav dropdown code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation-760 .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }
            
        
        const toggle = document.querySelector("#pricing-603 .cs-toggle");
        const cardGroup = Array.from(document.querySelectorAll('.cs-card-group'))

        toggle.addEventListener('click', (e) => { 
            for (const item of cardGroup) {
                item.classList.toggle("active");
            }
            toggle.classList.toggle("active");
        });
                                