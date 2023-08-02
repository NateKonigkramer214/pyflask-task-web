//Find all Elements for CEO to MD.
function changeMD(){
	var CEO_HEADING = document.getElementById("CEO_H1");
	var CEO_NAME = document.getElementById("CEO_NAME");
	var CEO_IMAGE = document.getElementById("CEO_IMG");
	var CEO_PARA = document.getElementById("CEO_P");
	var CEO_BUTTON = document.getElementById("CEO_BTN");

	if(CEO_NAME.textContent == "John Look")
	{
		CEO_HEADING.innerHTML = "Managing director";
		CEO_NAME.innerHTML = "Jack Williams";
		CEO_IMAGE.src = "data:image/jpeg;base64,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";
		CEO_PARA.innerHTML = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make";
		CEO_BUTTON.innerHTML = "Change to CEO";
	}
	else
	{
		CEO_HEADING.innerHTML = "CEO";
		CEO_NAME.innerHTML = "John Look";
		CEO_IMAGE.src = "images\ceo.jpg";
		CEO_PARA.innerHTML = "John Look , 26, has been the CEO for First Class Interiors for 4 years. Look is responsible for managing a company's overall operations which include delegating and directing agendas, driving profitability, managing company organizational structure, strategy, and communicating with the board. He ensures First Class Interiors runs at a profit and smoothly at all times. ";
		CEO_BUTTON.innerHTML = "Change to MD";
	}
};

//.style.fontsize etc

//Script to change font size color of the heading (Contact us page)
function changeheading(){
	var Change_heading = document.getElementById("CHANGE_H");
	Change_heading.style.fontSize = "20px"
	Change_heading.style.color = "#E4DCCF"
}
// Write a script to align the contact infomation to the right side.

function alignright()
{
	var content_right = document.getElementByClassName("RIGHT_HOVER");
	content_right.style.textAlign= "right";
}

//SQL if i have free time.
//On click of send (contactus) store peoples questions in SQL DB.

//Timer logic javascript. Use setInterval if time.
    //Function to hide staff1 inforamtin such as image and description. 
	//Needs to be implemented for each staff member. 
	//Add show staff button. 
    function hideStaff1(){
		var staffhide1 = document.getElementById('staff1');
		var button1remove = document.getElementById('button1');
		staff1.style.visibility = "hidden";
		button1remove.style.visibility = "hidden";
	  }
	  //button1 hide default 
	  var button1_hide = document.getElementById('button1');
		button1_hide.style.visibility = "hidden";

	  //this functuon shows button after hover
	  function button1show(){
		var showbutton10s = document.getElementById('button1');
		showbutton10s.style.visibility = "visible"; 
	  }
	  //hide button when mouseout
	  function button1hide(){
	  var showbutton10s = document.getElementById('button1');
	  showbutton10s.style.visibility = "hidden"; 
	  }

//time start (will loop the function till cleartimeout();).
	setInterval(button1_hide, milliseconds); //eg
	//stop time loop 
	clearTimeout();

/* For staff 2 */
function hideStaff2(){
	var staffhide1 = document.getElementById('staff2');
	var button1remove = document.getElementById('button2');
	staff2.style.visibility = "hidden";
	button2remove.style.visibility = "hidden";
  }
  //button2 hide default 
  var button2_hide = document.getElementById('button2');
	button2_hide.style.visibility = "hidden";

  //this functuon shows button after hover
  function button2show(){
	var showbutton2 = document.getElementById('button2');
	showbutton2.style.visibility = "visible"; 
  }
  //hide button when mouseout
  function button2hide(){
  var showbutton2 = document.getElementById('button2');
  showbutton2.style.visibility = "hidden"; 
  }
//Can just name function eg. fucntion1(buttonhide);

//fireworks
btn.addEventListener('click', () => {
	const particles = [];
	const color = randomColor();
	
	const particle = document.createElement('span');
	particle.classList.add('particle', 'move');
	
	const { x, y } = randomLocation();
	particle.style.setProperty('--x', x);
	particle.style.setProperty('--y', y);
	particle.style.background = color;
	btn.style.background = color;
	
	btn.appendChild(particle);
	
	particles.push(particle);
	
	setTimeout(() => {
		for(let i=0; i<100; i++) {
			const innerP = document.createElement('span');
			innerP.classList.add('particle', 'move');
			innerP.style.transform = `translate(${x}, ${y})`;

			const xs = Math.random() * 200 - 100 + 'px';
			const ys = Math.random() * 200 - 100 + 'px';
			innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
			innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
			innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
			innerP.style.background = color;
			
			btn.appendChild(innerP);
			particles.push(innerP)
		}
		
		setTimeout(() => {
			particles.forEach(particle => {
				particle.remove();
			})
		}, 1000)
	}, 1000);
});
function randomLocation() {
	return {
		x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
		y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
	}
}

function randomColor() {
	return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}