function format(views){
    if(views>=1000000000){
        return (views/1000000000).toFixed(1) + "B views";
    }
    if(views>=1000000){
        return (views/1000000).toFixed(1) + "M views";
    }
    if(views>=1000){
        return (views/1000).toFixed(1) + "K views";
    }
    return views + " views";
}



function videoinfo(title, channel, views, time, duration){
document.getElementById("title").innerText = title;
document.getElementById("channel").innerText = channel;
document.getElementById("views").innerText = format(views);
document.getElementById("time").innerText = time;
document.getElementById("duration").innerText = duration;
}

videoinfo("yah bahut kaam ki video hai to isy bilkul na dekhey bhkkk slaa", "Channel Name ", 200000000, "2 days ago","12:00")

