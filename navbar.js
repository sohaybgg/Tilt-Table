document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("navbar").innerHTML = `
        <div class="navbar">
            <a href="./index.html">Home</a>
            <div class="dropdown">
                <button>Videos</button>
                <div class="dropdown-content">
                    <a href="video1.html">Entry Shuttle Motion Fault</a>
                    <a href="video2.html">Exit Shuttle Stuck at Station D</a>
                    <a href="video3.html">Light Curtain Fault</a>
		    <a href="video4.html">HMI Continuously Rebooting</a>
		    <a href="video5.html">Shuttle Motion Fault Entering B</a>
		    <a href="video6.html">Paused Timer Fault</a>
	  	    <a href="video7.html">Dunnage Upload Command Fault</a>
	   	    <a href="video8.html">QTS Timeout Fault</a>
			<!-- add any additional videos here -->
                </div>
            </div>
        </div>
    `;
});