function bestFriend(friends){
    var largest = friends[0];
    for(var i = 0; i < friends.length; i++){
        var friend = friends[i];
        if(friend.length > largest.length){
            largest = friend;
        }
    }
    return largest;
}

var friendList = ["Rahim", "Rofikul", "Borkotulla", "Jobbar Sheikh", "Rofik Ahmed", "Salamat"];
console.log(bestFriend(friendList));
