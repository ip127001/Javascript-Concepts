const outThis = this;

const func = () => {
    console.log(this === outThis);
}
func();

//----------------------------
const counteed = {
    count: 0,
    periodically() {
        setInterval(() => {
            console.log(++this.count);
        }, 1000);
    }
}

counteed.periodically();