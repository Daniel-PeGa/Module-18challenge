const { User, Thought } = require('../models');

const userController = {
    getAllUser(req, res) {
        User.find({})
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.sendStatus(400).json({ message: 'Theres no user w this Id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err, 'This is the error');
            res.sendStatus(500).json(err);
        });
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id}, body, { new: true, runValidators: true})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: 'theres no user w/ this Id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500).json(err);
        })
    },

    deleteUser({ params }, res) {
        Thought.deleteMany ({ _id: params.id })
        .then(() => {
            User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(400).json({ message: 'theres no user w/ this Id' });
                    return;
                }
                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500).json(err);
        });
    },

    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId }},
            { new: true },
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(400).json({ message: 'theres no user w/ this Id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500).json(err);
        });
    },

    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId }},
            { new: true },
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(400).json({ message: 'theres no user w/ this Id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500).json(err);
        })
    },
};

module.exports = userController