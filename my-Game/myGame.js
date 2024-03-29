const dad = document.querySelector(".container");
var child = document.createElement("div")
const gridAdd = document.querySelector("button")



for (let i = 0; i < 16*16; i++) {
    const child = document.createElement("div");
    child.setAttribute("style", "border-style:solid;width:50px;height:50px;border-width:0.3px");
    dad.appendChild(child);

    // Add event listener for hover
    child.addEventListener("mouseover", () => {
         colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];;
        child.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    });

    // Reset background color on mouseout
    child.addEventListener("mouseout", () => {
        child.style.backgroundColor = "";
    });
}
gridAdd.addEventListener("click",() => {
    dad.textContent = ""
    setGrid()


})
function setGrid(xValue,yValue){
    xValue = Number(prompt(`Enter the x Grid You want`));
    yValue = Number(prompt(`Enter the Y Grid You want`));
    if(xValue > 100 || yValue > 100){
    alert(`Error pc can"t handle ${xValue} and ${yValue}`);
     dad.textContent = "Please type again"
}else{
    for (let i = 0; i < xValue*yValue; i++) {
        const child = document.createElement("div");
        child.setAttribute("style", "border-style:solid;width:50px;height:50px;border-width:0.3px");
        dad.appendChild(child);
    
        // Add event listener for hover
        child.addEventListener("mouseover", () => {
             colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
              '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
              '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
              '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
              '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
              '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
              '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
              '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
              '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
              '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];;
            child.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            child.addEventListener("mouseout", () => {
                child.style.backgroundColor = "";
            });
        });
    
}
}
}
