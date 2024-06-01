 
	var tablinks = document.getElementsByClassName("tab-links");
	var tabcontents = document.getElementsByClassName("tab-contents");

	function opentab(tabname)
    {
       for(tablink of tablinks)
       {
		        tablink.classList.remove("active-link");
       }
 
	  for(tabcontent of tabcontents)
	    {
	        tabcontent.classList.remove("active-tab");
	    }
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab");

	}

	

    function initializeProgressBars() {
        var progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(function (progressBar) {
            var width = progressBar.getAttribute('data-progress');
            progressBar.style.width = width;
            progressBar.innerHTML = width;
        });
    }

    initializeProgressBars();
