/**
Level 2 (fix this code using promise)

change for alert to console.log
*/

function delay(ms: number) {
    // add promise code here
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
  
delay(3000).then(() => console.log('runs after 3 seconds'));