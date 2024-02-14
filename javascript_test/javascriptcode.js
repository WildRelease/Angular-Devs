function test() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c)
    // create a new div element
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings!");
    const newContents = document.createTextNode("Hi there and greetings!sssssssssss");
    newDiv.append(newContent,newContents);
let d=""+c
    document.getElementById("div1").appendChild(d);
}