let value = document.querySelector('#value');
let btns = document.querySelectorAll('button');

// Function to handle button clicks
function handleButtonClick(btnValue) {
    if (btnValue === "=" || btnValue === 'Enter') {
        value.innerHTML = eval(value.innerHTML);
    } else {
        if (btnValue === "AC") {
            value.innerHTML = "0";
        } else {
            if (value.innerHTML === "0") {
                value.innerHTML = "";
            }
            value.innerHTML += btnValue;
        }
    }
}

// Event listener for button clicks
btns.forEach(btn => {
    btn.addEventListener("click", function() {
        handleButtonClick(this.innerHTML);
    });
});

// Event listener for keypress
document.addEventListener("keypress", function(event) {
    const keyPressed = event.key;

    // Check if the pressed key is a number or operator
    const validInputs = /[0-9+\-*/.=]|Enter/;
    if (validInputs.test(keyPressed)) {
        handleButtonClick(keyPressed);
    }
});



let theme = document.querySelector(".theme")
let themeOption = document.querySelector("#themeOption")

theme.onclick = function() {
    themeOption.classList.remove('hide')
}

document.onclick = function(e) {
    if (!theme.contains(e.target) && !themeOption.contains(e.target)) {
        themeOption.classList.add('hide')
    }
}



// Get the root element
var root = document.documentElement;

// // Get the computed styles of the root element
// var style = getComputedStyle(root);

// // Get the value of the --color-font-general variable
// var primaryColor = style.getPropertyValue('--primary-color');

// // Log the value to the console

function changeTheme(primary,secondary,tertiary,quaternary,shaTop,shaBot,danger,dangerTop,dangerFont) {
    root.style.setProperty('--primary-color', primary);
    root.style.setProperty('--secondary-color', secondary);
    root.style.setProperty('--tertiary-color', tertiary);
    root.style.setProperty('--quaternary-color', quaternary);
    root.style.setProperty('--shadow-top', shaTop);
    root.style.setProperty('--shadow-botton', shaBot);
    root.style.setProperty('--danger-color', danger);
    root.style.setProperty('--danger-top', dangerTop);
    root.style.setProperty('--danger-font-color', dangerFont);
}

let theme1 = document.querySelector('.theme1')

theme1.addEventListener('click', function() {
    changeTheme('rgb(141, 123, 104)','rgb(164, 144, 124)','rgb(200, 182, 166)','rgb(241, 222, 201)','rgba(141, 123, 104,0.4)','rgb(194, 193, 193)','rgb(103, 90, 76)','rgb(49, 34, 19)','rgb(255, 255, 255)')
} 
)

let theme2 = document.querySelector('.theme2')

theme2.addEventListener('click',function() {
    changeTheme('rgb(180, 180, 184)','rgb(199, 200, 204)','rgb(227, 225, 217)','rgb(242, 239, 229)','rgba(180, 180, 184,0.4)','rgb(244, 231, 233)','rgb(127, 127, 127)','rgba(113, 113, 113, 0.4)','rgb(255, 255, 255)')
})

let theme3 = document.querySelector('.theme3')

theme3.addEventListener('click', function() {
    changeTheme(
        'rgb(249, 245, 246)',         /* --primary-color */
        'rgb(248, 232, 238)',         /* --secondary-color */
        'rgb(253, 206, 223)',         /* --tertiary-color */
        'rgb(242, 190, 209)',         /* --quaternary-color */
    
        'rgba(172, 172, 172, 0.4)',   /* --shadow-top */
        'rgb(244, 231, 233)',         /* --shadow-botton */
    
        'rgb(254, 102, 158)',         /* --danger-color */
        'rgba(122, 122, 123, 0.4)',   /* --danger-top */
        'rgb(255, 255, 255)'          /* --danger-font-color */
    );
    
})

let theme4 = document.querySelector('.theme4')

theme4.addEventListener('click', function() {
    changeTheme(
        'rgb(142, 122, 181)',         /* --primary-color */
        'rgb(183, 132, 183)',         /* --secondary-color */
        'rgb(228, 147, 179)',         /* --tertiary-color */
        'rgb(238, 165, 166)',         /* --quaternary-color */
    
        'rgba(199, 197, 197, 0.4)',   /* --shadow-top */
        'rgb(244, 231, 233)',         /* --shadow-botton */
    
        'rgb(254, 102, 158)',         /* --danger-color */
        'rgba(122, 122, 123, 0.4)',   /* --danger-top */
        'rgb(255, 255, 255)'          /* --danger-font-color */
    );
    
})




