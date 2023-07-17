/**check even numbers
 * in this exercise I was tasked to create a function that will be checking if numbers from zero to a certain number is even and if its true it will print it
 */

const checkeven = (number) => {
    for(let i = 0; i < number; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}
checkeven(100);