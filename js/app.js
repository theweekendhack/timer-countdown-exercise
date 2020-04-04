

function main()
{
        //fetch the h1 from the DOM tree
        const heading = document.querySelector("#container > h1");
        let headingValue = parseInt(heading.innerHTML);

     
        const intervalRef =  setInterval(function() {
            
            headingValue--;

            heading.innerHTML=headingValue;

            if(headingValue==0)
            {
                clearInterval(intervalRef);
            }

        }, 1000);

}

main();