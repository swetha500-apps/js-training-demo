class Person {
    constructor(firstAndLast) {
        let fullName = firstAndLast;

        this.getFirstName = function () {
            return firstAndLast.split(" ")[0];
        };

        this.getLastName = function () {
            return fullName.split(" ")[1];
        };

        this.getFullName = function () {
            return fullName;
        };

        this.setFirstName = function (name) {
            return fullName = name + " " + fullName.split(" ")[1];
        };

        this.setLastName = function (name) {
            return fullName = fullName.split(" ")[0] + " " + name;
        };

        this.setFullName = function (name) {
            return fullName = name;
        };
    }
}
  const swetha = new Person("swetha sankati");
 






 function getOutput() {
    document.getElementById("output1").innerText =swetha.getFirstName();
    document.getElementById("output2").innerText =swetha.getLastName();
    document.getElementById("output3").innerText =swetha.getFullName();
    document.getElementById("output4").innerText =swetha.setFirstName("bhaskar");
    document.getElementById("output5").innerText =swetha.setLastName ("bhaskar");
    document.getElementById("output6").innerText =swetha.setFullName ("bhaskar sankati");
      }