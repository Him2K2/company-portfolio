const DataManager = require("../data-manager");

class PortfolioService {
    constructor() {}

    getById(id) {
        const allData = DataManager.allData;

        // Lấy portfolio
        const portfolio = allData.portfolios[id];
        if (!portfolio) {
            throw new Error(`Không tìm thấy portfolio với id: ${id}`);
        }

        // Lấy tranform data 
        const company = allData.companies.find(c => c.id === portfolio.company_id);
        const companyProducts = allData.products.filter(p => p.company_id === portfolio.company_id);
        const companyEmployees = allData.employees.filter(e => e.company_id === portfolio.company_id);
        company.products = companyProducts;
        company.employees = companyEmployees;
        const portfolioProducts = []; // todo
        const portfolioEmployees = []; // todo
        const pages = allData.portfolio_pages.filter(page => page.portfolio_id === portfolio.id);

        const portfolioData = {
            portfolio,
            company,
            portfolioProducts,
            portfolioEmployees,
            pages
        };

        return portfolioData;
    }
}

module.exports = PortfolioService;
