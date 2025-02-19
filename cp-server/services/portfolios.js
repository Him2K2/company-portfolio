const DataManager = require("../data-manager");

class PortfolioService {

    constructor() {
       
    }

    getById(id) {
        let allData = DataManager.allData;
        let rawPortfolioData = allData['portfolios'][id];
        let portfolioData = {
            company: {},
            products: {},
            employees: {},
            pages: {}
        }

        return portfolioData;
    }
}

module.exports = PortfolioService;