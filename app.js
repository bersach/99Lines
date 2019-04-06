let friends = ['Melody', 'Chris', 'Ryan', 'Randy', 'Matt'];

let plural = [' lines of code in the file, ', ' lines of code; ', ' strikes one out, clears it all out, ', ' lines of code in the file.'];

let twoLines = [' lines of code in the file, ', ' lines of code; ', ' strikes one out, clears it all out, ', ' line of code in the file.'];

let singular = [' line of code in the file, ', ' line of code; ', ' strikes one out, clears it all out, ', ' lines of code in the file.'];

let index = 0

while (index <= 4) {

    let count = 99;

    while (count > 0) {

        if (count > 2) {
            let output1 = count + plural[0] + count + plural[1] + friends[index] + plural[2];

            count = count - 1;

            let output2 = count + plural[3];

            let totalOutput = output1 + output2;

            console.log(totalOutput);
            ;
        } else if (count == 2) {
            let output1 = count + twoLines[0] + count + twoLines[1] + friends[index] + twoLines[2];

            count = count - 1;

            let output2 = count + twoLines[3];

            let totalOutput = output1 + output2;

            console.log(totalOutput);
        } else if (count == 1) {
            let output1 = count + singular[0] + count + singular[1] + friends[index] + singular[2];

            count = count - 1;

            let output2 = count + singular[3];

            let totalOutput = output1 + output2;

            console.log(totalOutput);
        }

    }
    index = index + 1;
}