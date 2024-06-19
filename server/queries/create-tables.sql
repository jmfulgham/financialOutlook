CREATE TABLE dailyStockPrices(
  "id" int PrimaryKey,
  "stock_id" varchar(6) references stocks(id),
  "company_name" varchar reference stocks(company_name),
  "date" date,
  "price" float
  )

CREATE TABLE stock(
   "id" int PrimaryKey,
   "ticker" varchar(6)
   "company_name" varchar
)