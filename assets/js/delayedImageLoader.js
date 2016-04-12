/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Sandeep Gangadharan | http://www.sivamdesign.com/scripts/ */
function runBanner() {
    // change the name of the image below
  document.getElementById('banner').src='large_img.gif';
}

  // change the number below to adjust the time the image takes to load
window.setTimeout("runBanner()", 5000);