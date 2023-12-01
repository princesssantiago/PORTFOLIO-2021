let F = 0;
let D = 0;
let f = 0;
let d = 0;

function voteFed() {
		let bday = document.getElementById("myAge").value;

  	 let dob = new Date(bday);
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);

 	  if (age > 18) {
    var count = document.getElementById("pollcount2");

    if (F == 0) {
      f = 1;
      document.getElementById("fed").value = f;
      count.innerHTML = f;
    } else {
    	f = f + 1;
    	document.getElementById("fed").value = f;
      count.innerHTML = d;
          alert("Thank you for voting!");
      }

    F = 1;
  }

}

function voteDem() {
  	 let bday = document.getElementById("myAge").value;

  	 let dob = new Date(bday);
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);

  if (age > 18) {
    var count = document.getElementById("pollcount1");

    if (D == 0) {
      d = 1;
      document.getElementById("dem").value = d;
      count.innerHTML = d;
    } else {
    	d = d + 1;
    	document.getElementById("dem").value = d;
      count.innerHTML = d;
      alert("Thank you for voting!");
    }

    D = 1;
  }
}

function proceedVote() {

	 let bday = document.getElementById("myAge").value;

 	 let dob = new Date(bday);
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);

  	 let vote = document.getElementById("proceed").value;

  		if (age < 18) {

  		  	alert("You are underage!");
  		  	return false;
  		}



  		document.getElementById("proceed").submit();
}
