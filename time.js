setInterval(
    function () {
        const date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let second = date.getSeconds();
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        second = second < 10 ? "0" + second : second;
        document.getElementById('date').innerHTML = hour + ":" + min + ":" + second
    }, 1000
)
