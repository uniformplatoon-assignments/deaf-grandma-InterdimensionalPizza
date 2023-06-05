function deafGrandma() {
    let counter=0;
    let kid_statement= window.prompt("HEY KID!")
    while(counter<2){    
        console.log(kid_statement)
        if (kid_statement===""){
            kid_statement= window.prompt("WHAT")
        }
        else if(kid_statement !== kid_statement.toUpperCase()){
            kid_statement= window.prompt("SPEAK UP, KID!")
        }
        else if(kid_statement=== kid_statement.toUpperCase() && kid_statement!=="GOODBYE!"){
            kid_statement= window.prompt("NO, NOT SINCE 1946")
        }
        else if(kid_statement==="GOODBYE!" && counter<1){
            kid_statement= window.prompt("LEAVING SO SOON?")
            counter++
        }
        else{
            alert("LATER, SKATER!")
            counter++
        }
    }
}

deafGrandma();