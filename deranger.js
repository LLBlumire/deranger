var names = [];

function render() {
    let namelist = document.getElementById("namelist");
    namelist.innerHTML = "";
    names.forEach(name => {
        namelist.innerHTML += '<div class="name">' + name + '</div>';
    });
}

function addname(e) {
    let name = document.getElementById("name").value;
    if (name == "") {
        return;
    }
    document.getElementById("name").value = "";
    names.push(name);

    render();
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function derange(event) {
    let numtar = document.getElementById("numtar").value;
    let derangelist = document.getElementById("derangelist");
    let shuffled = shuffle(names.slice());
    derangelist.innerHTML = "";
    content = "";
    for (var i = 0; i < shuffled.length; i++) {
        let listtargets = [];
        for (var j = 1; j <= numtar; j++) {
            let targets = shuffled.slice();
            for (var k = 0; k < j; k++) {
                targets.push(targets.shift());
            }
            listtargets.push(targets);
        }
        content += '<div class="derangementitem">';
        content += '<span class="assassin">' + shuffled[i] + '</span>';
        listtargets.forEach(targets => {
            content += '<span class="target">' + targets[i] + '</span>';
        });
        content += '</div>';
    }
    derangelist.innerHTML = content;
}

document.getElementById("addname").addEventListener("click", addname)
document.getElementById("name").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        addname(e);
    }
})
document.getElementById("derange").addEventListener("click", derange);