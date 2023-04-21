// try - catch

const error = (type, code) => {
    const error = new Error();
    error.name = type;
    error.code = code
    throw error;
}

try {
    const age = 18;
    const country = 'BO';
    if (age > 18) console.log('You are able to pass');
    else error('FAILED', 200);

    console.log('Congratulations you are old');

    if (country != 'AR') error('COUNTRY_FAILED', 400);

    console.log('Congratulations you are Argentinian');

} catch (error) {
    console.log(`ERROR: ${error.name} - CODE: ${error.code}`);
}