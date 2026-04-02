const getPostsList = (req, res) => {
    res.send("Ye le blogs li list");
};

const addPostinDB = (req, res) => {
    res.send("done");
};


const getPostByID = (req, res) => {
    res.send("ye lo blog jiski id tumne di!");
};

module.exports = {
    getPostsList,
    addPostinDB,
    getPostByID
};

