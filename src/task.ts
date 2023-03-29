type Dev = {
    user: string;
    skills: string[];
}

const devs: Dev[] = require('./task.json');
const skillWished = "c"
const selectedDevs: Dev[] = [];

// devs.forEach(dev => {
//     dev.skills.forEach(skill => {
//         if(skill === skillWished) selectedDevs.push(dev);
//     })
// })

devs.forEach(dev => {
    if(dev.skills.includes(skillWished)) selectedDevs.push(dev);
})


console.log(selectedDevs);