var aPromise = function() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/skiednia');
        xhr.send(null);

        
    });
}