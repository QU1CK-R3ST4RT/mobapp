let Data =
    {
        "item1": {
            "id": 1,
            "src": "",
            "category": "memes",
            "name": "meme 1",
            "description": "f"
        },
        "item2": {
            "id": 2,
            "src": "",
            "category": "tweets",
            "name": "tweet 1",
            "description": "f"
        },
        "item3": {
            "id": 3,
            "src": "",
            "category": "fails",
            "name": "fail 1",
            "description": "f"
        }
    }



const json = '{"item1": {"id": 1,"src": "","category": "memes","name": "meme 1","description": "f"},"item2": {"id": 1,"src": "","category": "fails","name": "fail 1","description": "f"},"item3": {"id": 1,"src": "","category": "tweets","name": "tweet 1","description": "f"}}';
const obj = JSON.parse(json);
console.log(obj);