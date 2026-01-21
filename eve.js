
//const today = new Date()
//document.write(today.getMonth() + 1)


//const today = new Date()
//today.setDate(16)
//document.write(today)


//const calculation = Math.cell(10,50,70,40,220,120)
//document.write("<h1>calculation:",calculation)

//const test =["Apple","Mango","grapes",true,66]
//document.write(test[2])

const capitals = {
    india: "new dehli",
    maharastra: "mumbai",
    up: "lucknow",
    location : function(){
        return "I work in" + this.maharastra
        }
}

capitals.maharastra = "pune"
document.write(capitals.maharastra)