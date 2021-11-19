async function getRandomItem() {
    var item = await $.getJSON("https://en.wikipedia.org/api/rest_v1/page/random/summary", function() {
       console.log('Succesfully retrieved item.');
    });
    console.log(item);
    return item;
}

async function displayItem() {
    var currentItem = await getRandomItem();
    title = currentItem.displaytitle;
    extract = currentItem.extract;
    image = currentItem.originalimage.source;
    description = currentItem.description;
    document.getElementById('title').innerText = title;
    document.getElementById('extract').innerText = extract;
    document.getElementById('image').src = image;
    document.getElementById('description').innerText = description;
}

displayItem();