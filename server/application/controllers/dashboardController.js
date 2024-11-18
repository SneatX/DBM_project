const Dashboard = require('../../domain/models/dashboardModel.js');

async function getBoards(req, res) {
    const userId = req.user._id
    const dashboardInstance = new Dashboard();

    const data = await dashboardInstance.findByUserId(userId)

    res.status(200).json(data)
}

module.exports = { getBoards }