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

    // Lấy company liên quan
    const company = allData.companies.find(
      (c) => c.id === portfolio.company_id
    );

    //  Lấy product_id từ bảng product_portfolio theo portfolio_id
    const productPortfolioIds = allData.product_portfolio
      .filter((pp) => pp.portfolio_id === portfolio.id)
      .map((pp) => pp.product_id);
    // Lấy employee_id từ bảng employee_portfolio theo portfolio_id
    const employeePortfolioIds = allData.employee_portfolio
      .filter((ep) => ep.portfolio_id === portfolio.id)
      .map((pp) => pp.employee_id);

    //  Lọc sản phẩm theo product_id tìm được
    const portfolioProducts = allData.products.filter((p) =>
      productPortfolioIds.includes(p.id)
    );
    //  //  Lọc sản phẩm theo employee_id tìm được

    const portfolioEmployees = allData.employees.filter((e) =>
      employeePortfolioIds.includes(e.id)
    );

    const pages = allData.portfolio_pages.filter(
      (page) => page.portfolio_id === portfolio.id
    );
    // tìm templateid trong bảng pỏtfolio_pages trùng với portfolioid
    const templateId = allData.portfolio_pages
      .filter((ti) => ti.portfolio_id === portfolio.id)
      .map((ti) => ti.template_id)

    //timf template tufw templateid kieems dduocjw
    const portfolioTemplate = allData.templates.filter((t) =>
      templateId.includes(t.id)
    );

    const portfolioData = {
      portfolio,
      company,
      portfolioProducts,
      portfolioEmployees,
      pages,
      portfolioTemplate,
    };

    return portfolioData;
  }
}

module.exports = PortfolioService;
