// promises
// status: rejected | resolved | pending

const age = 19;

const agePromise = new Promise((resolve, reject) => {
    if (age > 18) resolve({ message: 'resolved' });
    else reject({ message: 'rejected' })
});

// old version
agePromise.then(data => {
    console.log('RESOLVED', data);
})
    .catch(error => {
        console.log('REJECTED', error);
    });

// new version
(async () => {
    try {
        const data = await agePromise;
        
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})()

// execute promises
const a = 1;

(async () => {
    const p = await Promise.all([
        agePromise,
        agePromise,
        agePromise,
        agePromise
    ]);
    console.log(p);
})()

const b = 2;
console.log(a + b);









