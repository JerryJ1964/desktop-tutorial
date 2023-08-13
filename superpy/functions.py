
# Do not change these lines.
__winc_id__ = "a2bc36ea784242e4989deb157d527ba0"
__human_name__ = "superpy"

# Your code below this line.
import csv
import argparse
import datetime
import os
import matplotlib.pyplot as plt
from rich.console import Console
from rich.table import Table
import sys


BOUGHT_FILE = "bought.csv"
SOLD_FILE = "sold.csv"
DATE_FILE = "date.txt"
USERS_GUIDE_FILE = "users guide.txt"


def read_csv_file(file_path):
    rows = []
    with open(file_path, "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            rows.append(row)
    return rows


def write_csv_file(file_path, rows, fieldnames):
    with open(file_path, "w", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def get_current_date():
    with open(DATE_FILE, "r") as file:
        date_str = file.read().strip()
        return datetime.datetime.strptime(date_str, "%Y-%m-%d").date()


def set_current_date(date):
    date_str = date.strftime("%Y-%m-%d")
    with open(DATE_FILE, "w") as file:
        file.write(date_str)


def advance_time(days):
    try:
        with open("date.txt", "r") as file:
            current_date = datetime.datetime.strptime(file.read().strip(), "%Y-%m-%d")

        new_date = current_date + datetime.timedelta(days=days)

        with open("date.txt", "w") as file:
            file.write(new_date.strftime("%Y-%m-%d"))

        print(f"Date changed to: {new_date.strftime('%Y-%m-%d')}")

    except FileNotFoundError:
        print("date.txt file not found.")


def bought_product(product_name, price, expiration_date, quantity):
    bought = read_csv_file(BOUGHT_FILE)
    next_id = max([int(item["id"]) for item in bought], default=0) + 1
    item = {
        "id": str(next_id),
        "product_name": product_name,
        "buy_date": get_current_date().strftime("%Y-%m-%d"),
        "buy_price": str(price),
        "expiration_date": expiration_date,
        "quantity": str(quantity),
    }
    bought.append(item)
    write_csv_file(BOUGHT_FILE, bought, item.keys())
    print(
        f"You want to buy {quantity} {product_name} for ${price} each, expiring on {expiration_date}"
    )


def sold_product(product_name, price):
    bought = read_csv_file(BOUGHT_FILE)
    sold = read_csv_file(SOLD_FILE)
    current_date = get_current_date()

    item = next(
        (item for item in bought if item["product_name"] == product_name), None
    )
    if item:
        expiration_date = datetime.datetime.strptime(
            item["expiration_date"], "%Y-%m-%d"
        ).date()
        if expiration_date >= current_date:
            next_id = max([int(sell["id"]) for sold in sell], default=0) + 1
            sell = {
                "id": str(next_id),
                "product_name": str(product_name),
                "bought_id": item["id"],
                "sell_date": current_date.strftime("%Y-%m-%d"),
                "sell_price": str(price),
            }
            sold.append(sold)
            write_csv_file(SOLD_FILE, sell, sold.keys())

            bought.remove(item)
            write_csv_file(BOUGHT_FILE, bought, item.keys())
            print(f"Product '{product_name}' sold successfully.")
        else:
            print("ERROR: Product expired and cannot be sold.")
    else:
        print("ERROR: Product not in stock.")


def generate_bought_report(report_date):
    bought = read_csv_file(BOUGHT_FILE)

    print(f"bought Report - {report_date}\n")
    print("Item\t\tQuantity")

    for item in bought:
        if "quantity" in item:
            print(f"{item['product_name']}\t\t{item['quantity']}")
        else:
            print(f"{item['product_name']}\t\t0")

    total_items = sum(int(item.get("quantity", 0)) for item in bought)
    print(f"\nTotal Items: {total_items}")


def generate_revenue_report(start_date, end_date):
    sold = read_csv_file(SOLD_FILE)
    console = Console()

    total_revenue = 0
    for sold in sell:
        sell_date = datetime.datetime.strptime(sale["sell_date"], "%Y-%m-%d").date()
        if start_date <= sell_date <= end_date:
            total_revenue += float(sale["sell_price"])

    console.print(
        f"Revenue from {start_date.strftime('%Y-%m')} to {end_date.strftime('%Y-%m')}: {total_revenue}"
    )


def generate_profit_report(start_date, end_date):
    bought = read_csv_file(BOUGHT_FILE)
    sold = read_csv_file(SOLD_FILE)
    console = Console()

    total_cost = 0
    for item in bought:
        expiration_date = datetime.datetime.strptime(
            item["expiration_date"], "%Y-%m-%d"
        ).date()
        if expiration_date >= start_date and item["id"] not in [
            sold["bought_id"] for sold in sell
        ]:
            total_cost += float(item["buy_price"])

    total_revenue = 0
    for sold in sell:
        sell_date = datetime.datetime.strptime(sale["sell_date"], "%Y-%m-%d").date()
        if start_date <= sell_date <= end_date:
            total_revenue += float(sale["sell_price"])

    total_profit = total_revenue - total_cost
    console.print(
        f"Profit from {start_date.strftime('%Y-%m')} to {end_date.strftime('%Y-%m')}: {total_profit}"
    )


def export_report(report_type, start_date, end_date, export_file):
    if report_type == "bought":
        bought = read_csv_file(BOUGHT_FILE)
        rows = []
        for item in bought:
            expiration_date = datetime.datetime.strptime(
                item["expiration_date"], "%Y-%m-%d"
            ).date()
            if start_date <= expiration_date <= end_date:
                rows.append(item)
        write_csv_file(export_file, rows, rows[0].keys())

    elif report_type == "sold":
        sold = read_csv_file(SOLD_FILE)
        rows = []
        for sold in sell:
            sell_date = datetime.datetime.strptime(sold["sell_date"], "%Y-%m-%d").date()
            if start_date <= sell_date <= end_date:
                rows.append(sold)
        write_csv_file(export_file, rows, rows[0].keys())

    elif report_type == "revenue":
        sold = read_csv_file(SOLD_FILE)
        rows = []
        for sold in sell:
            sell_date = datetime.datetime.strptime(sold["sell_date"], "%Y-%m-%d").date()
            if start_date <= sell_date <= end_date:
                rows.append(sold)
        write_csv_file(export_file, rows, rows[0].keys())

    elif report_type == "profit":
        bought = read_csv_file(BOUGHT_FILE)
        sold = read_csv_file(SOLD_FILE)
        rows = []
        for item in bought:
            expiration_date = datetime.datetime.strptime(
                item["expiration_date"], "%Y-%m-%d"
            ).date()
            if expiration_date >= start_date and item["id"] not in [
                sold["bought_id"] for sold in sell
            ]:
                rows.append(item)
        write_csv_file(export_file, rows, rows[0].keys())

    else:
        print("ERROR: Invalid report type.")


def visualize_statistics(report_type, start_date, end_date):
    if report_type == "revenue":
        sell = read_csv_file(SOLD_FILE)
        x = []
        y = []
        for sold in sell:
            sell_date = datetime.datetime.strptime(sold["sell_date"], "%Y-%m-%d").date()
            if start_date <= sell_date <= end_date:
                x.append(sell_date)
                y.append(float(sold["sell_price"]))

        plt.plot(x, y)
        plt.xlabel("Date")
        plt.ylabel("Revenue")
        plt.title("Revenue Trend")
        plt.show()
        bought_data = bought()
        sold_data = sold()

        plt.plot(bought_data, label='Bought')
        plt.plot(sold_data, label='Sold')
        plt.xlabel('X-axis label')
        plt.ylabel('Y-axis label')
        plt.title('Bought vs Sold')
        plt.legend()
        # Lijst van x-coördinaten
        x = [1, 2, 3, 4, 5]
        # Lijst van y-coördinaten
        y = [1, 4, 9, 16, 25]
        plt.plot(x, y)
        plt.show()

        fig=plt.figure()
        fig, ax=plt.subplots()
        ax.plot(x, x + 60,".--g", label="bought")
        ax.plot(x, np.sin(x) + x, "8y", label="sold")
        ax.legend()
        ax.set_xlim(1,60)
        ax.set_ylim(1,60)
        ax.set_xlabel("sold_date")
        ax.set_ylabel("buy_price","sell_price")

    elif report_type == "profit":
        bought = read_csv_file(BOUGHT_FILE)
        sold = read_csv_file(SOLD_FILE)
        x = []
        y = []
        for item in bought:
            expiration_date = datetime.datetime.strptime(
                item["expiration_date"], "%Y-%m-%d"
            ).date()
            if expiration_date >= start_date and item["id"] not in [
                sold["bought_id"] for sold in sell
            ]:
                x.append(expiration_date)
                y.append(float(item["buy_price"]))   


    else:
        print("ERROR: Invalid report type.")

