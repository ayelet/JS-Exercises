function wait(ms=0) {
    return new Promise((resolve => {
        setTimeout(resolve, ms);
    }))
}

async function go() {
    console.log("start");
    await wait(2000);
    console.log("end");
}

go();