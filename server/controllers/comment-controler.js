import Comment from '../model/comment.js';


export const newComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body);
        comment.save();

        res.status(200).json({msg: 'Komentarz zapisany'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id });

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        await comment.delete()

        res.status(200).json('Komentarz usunięty');
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}